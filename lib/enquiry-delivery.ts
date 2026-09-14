/**
 * Enquiry delivery — DESIGN_BRIEF.md §4.12, Phase 10.
 *
 * Sends each enquiry to the business inbox. Configuration lives entirely in
 * environment variables so no address or credential is ever committed:
 *
 *   ENQUIRY_TO_EMAIL    where enquiries land, e.g. owner@example.com
 *   ENQUIRY_FROM_EMAIL  the From address, e.g. website@srimaruthitextiles.com
 *   RESEND_API_KEY      from resend.com
 *
 * Resend is used over its plain HTTP API rather than its SDK, so this adds no
 * dependency. Swapping to SMTP (Zoho Mail, Gmail, anything) means replacing
 * only `sendViaResend` below — the route does not know or care which is used.
 *
 * IMPORTANT: every failure path throws. The caller must not report success to
 * the visitor unless this resolves, or the site will thank someone for an
 * enquiry that was silently dropped.
 */

export type Enquiry = {
  name: string;
  business: string;
  phone: string;
  city: string;
  requirement: string;
  message: string;
};

export class DeliveryNotConfiguredError extends Error {
  constructor(missing: string[]) {
    super(`Enquiry delivery is not configured. Missing: ${missing.join(", ")}`);
    this.name = "DeliveryNotConfiguredError";
  }
}

function readConfig() {
  const config = {
    to: process.env.ENQUIRY_TO_EMAIL ?? "",
    from: process.env.ENQUIRY_FROM_EMAIL ?? "",
    apiKey: process.env.RESEND_API_KEY ?? "",
  };

  const missing = Object.entries(config)
    .filter(([, value]) => value === "")
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new DeliveryNotConfiguredError(
      missing.map((key) =>
        key === "apiKey"
          ? "RESEND_API_KEY"
          : `ENQUIRY_${key.toUpperCase()}_EMAIL`,
      ),
    );
  }

  return config;
}

/** Escapes untrusted visitor input before it goes into the HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatBody(enquiry: Enquiry) {
  const rows: Array<[string, string]> = [
    ["Name", enquiry.name],
    ["Business", enquiry.business || "—"],
    ["Phone / WhatsApp", enquiry.phone],
    ["City", enquiry.city || "—"],
    ["Requirement", enquiry.requirement],
    ["Message", enquiry.message || "—"],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `<table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:15px;border-collapse:collapse">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="vertical-align:top;color:#6B615A">${escapeHtml(label)}</td><td style="vertical-align:top;color:#1C1A1E"><strong>${escapeHtml(value)}</strong></td></tr>`,
  )
  .join("\n")}
</table>`;

  return { text, html };
}

export async function deliverEnquiry(enquiry: Enquiry): Promise<void> {
  const { to, from, apiKey } = readConfig();
  const { text, html } = formatBody(enquiry);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      /* Replying to the notification replies to the customer, when they gave
         an email. They do not here — the form collects a phone number — so
         reply_to is omitted rather than set to something misleading. */
      subject: `Website enquiry — ${enquiry.name}${enquiry.business ? ` (${enquiry.business})` : ""}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Resend rejected the enquiry (${response.status}): ${detail.slice(0, 300)}`,
    );
  }
}

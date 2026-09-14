"use client";

import { useId, useState } from "react";
import { contact, site } from "@/lib/site";

/**
 * Enquiry form — DESIGN_BRIEF.md §4.12.
 *
 * Six fields and nothing more. Every field has a real <label for>; none of
 * them rely on placeholder text as their name, because placeholder-as-label
 * disappears the moment someone starts typing.
 *
 * Field borders use --color-muted, not --color-border — see the `field`
 * utility in globals.css for why.
 *
 * Validation is deliberately loose. This audience is 30–50, on phones, with
 * average technical comfort (§2); a form that rejects a phone number because
 * of a space in it loses a real lead. The server checks only that the three
 * fields we cannot act without are present.
 */
type Status = "idle" | "sending" | "sent" | "error";

const FIELDS = [
  { name: "name", label: "Your name", type: "text", required: true, autoComplete: "name" },
  { name: "business", label: "Business name", type: "text", required: false, autoComplete: "organization" },
  { name: "phone", label: "Phone or WhatsApp", type: "tel", required: true, autoComplete: "tel" },
  { name: "city", label: "City", type: "text", required: false, autoComplete: "address-level2" },
  { name: "requirement", label: "Requirement or quantity", type: "text", required: true, autoComplete: "off" },
] as const;

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const formId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Please call us instead.");
        return;
      }

      setStatus("sent");
      setMessage("Thank you — your enquiry has reached us. We will be in touch.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("We could not send that. Please call or WhatsApp us instead.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-2">
      <h3 className="text-h3 text-ink">{site.contactSection.formHeading}</h3>

      {FIELDS.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`${formId}-${field.name}`}
            className="block text-small font-semibold text-ink"
          >
            {field.label}
            {field.required ? (
              <span className="text-muted"> (required)</span>
            ) : null}
          </label>
          <input
            id={`${formId}-${field.name}`}
            name={field.name}
            type={field.type}
            required={field.required}
            autoComplete={field.autoComplete}
            className="field mt-1"
          />
        </div>
      ))}

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="block text-small font-semibold text-ink"
        >
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          className="field mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-1 w-full disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>

      {/* Announced to screen readers without stealing focus. On failure the
          number is repeated inline — telling someone to "call instead" without
          giving them the number is a dead end. */}
      <p
        role="status"
        aria-live="polite"
        className={`text-small ${status === "error" ? "text-error" : "text-success"}`}
      >
        {message}
        {status === "error" ? (
          <>
            {" "}
            <a
              href={`tel:${contact.phone.e164}`}
              className="font-semibold underline underline-offset-4"
            >
              {contact.phone.display}
            </a>
          </>
        ) : null}
      </p>

      <p className="text-small text-muted">{site.contactSection.privacyNote}</p>
    </form>
  );
}

import { NextResponse } from "next/server";
import {
  deliverEnquiry,
  DeliveryNotConfiguredError,
} from "@/lib/enquiry-delivery";

/**
 * Enquiry endpoint — DESIGN_BRIEF.md §4.12, Phase 10.
 *
 * Validates a submission and emails it to the business inbox via
 * lib/enquiry-delivery.ts. Success is returned ONLY after delivery resolves:
 * a form that says "thank you" while dropping the lead is worse than one that
 * errors, because nobody follows up on a lead they never knew about.
 *
 * Until the environment variables in lib/enquiry-delivery.ts are set, this
 * returns 503 and the form tells the visitor to call instead.
 */

/** The three fields an enquiry is useless without. */
const REQUIRED = ["name", "phone", "requirement"] as const;

/** Guards against a pasted essay or an oversized payload. */
const MAX_FIELD_LENGTH = 2000;

type EnquiryPayload = Record<string, string>;

function sanitise(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not read that. Please try again." },
      { status: 400 },
    );
  }

  if (typeof raw !== "object" || raw === null) {
    return NextResponse.json(
      { ok: false, error: "We could not read that. Please try again." },
      { status: 400 },
    );
  }

  const source = raw as Record<string, unknown>;
  const enquiry: EnquiryPayload = {
    name: sanitise(source.name),
    business: sanitise(source.business),
    email: sanitise(source.email),
    phone: sanitise(source.phone),
    city: sanitise(source.city),
    requirement: sanitise(source.requirement),
    quantity: sanitise(source.quantity),
    message: sanitise(source.message),
  };

  if (!enquiry.name || !enquiry.requirement) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please fill in your name and what product you are looking for.",
      },
      { status: 400 },
    );
  }

  // Require at least one valid contact method (email or phone)
  if (!enquiry.phone && !enquiry.email) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please provide an email address or phone/WhatsApp number so we can respond.",
      },
      { status: 400 },
    );
  }

  if (enquiry.email && !enquiry.email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (enquiry.phone) {
    const digits = enquiry.phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      return NextResponse.json(
        { ok: false, error: "That phone number does not look right. Please check it." },
        { status: 400 },
      );
    }
  }

  try {
    await deliverEnquiry(enquiry as Parameters<typeof deliverEnquiry>[0]);
  } catch (error) {
    /* Log the full enquiry on failure so a lead is never lost to an outage —
       the server log is the last resort, not the delivery mechanism. */
    console.error("[enquiry] DELIVERY FAILED — lead captured in log only", {
      receivedAt: new Date().toISOString(),
      reason: error instanceof Error ? error.message : String(error),
      ...enquiry,
    });

    const unconfigured = error instanceof DeliveryNotConfiguredError;
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send that just now. Please call or WhatsApp us instead.",
      },
      { status: unconfigured ? 503 : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

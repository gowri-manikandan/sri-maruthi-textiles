"use client";

import { useId, useState } from "react";
import { contact } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const PRODUCT_OPTIONS = [
  "Bath Towels",
  "Pool & Resort Towels",
  "Kitchen & Utility Towels",
  "Custom Textile Requirement",
  "Other",
] as const;

export default function EnquiryForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    requirement: "Bath Towels",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Client-side validation for required fields
    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.requirement.trim()) {
      setStatus("error");
      setErrorMessage("Please select what product you are looking for.");
      return;
    }
    if (!formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please tell us about your requirements or message.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          result.error ?? "Something went wrong. Please reach out to us directly."
        );
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not send your enquiry just now. Please call or WhatsApp us directly."
      );
    }
  }

  // Success view after submission
  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[3px] bg-[#F5F1E8] border border-[rgba(41,37,31,0.14)] p-8 sm:p-10 text-center shadow-[0_8px_28px_rgba(0,0,0,0.18)]"
      >
        <div className="size-12 mx-auto rounded-full bg-[#40572D]/15 flex items-center justify-center text-[#40572D] mb-4">
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-[24px] sm:text-[26px] font-normal text-[#29251F]">
          Thank you for your enquiry.
        </h3>
        <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-[#29251F]/80 max-w-[400px] mx-auto">
          We&apos;ve received your requirements and will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              business: "",
              email: "",
              phone: "",
              requirement: "Bath Towels",
              quantity: "",
              message: "",
            });
            setStatus("idle");
          }}
          className="mt-6 inline-flex items-center text-[13.5px] font-semibold text-[#40572D] hover:text-[#26351C] underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[3px] bg-[#F5F1E8] border border-[rgba(41,37,31,0.14)] p-6 sm:p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-[#29251F]">
      <div className="mb-6 pb-4 border-b border-[rgba(41,37,31,0.12)]">
        <h3 className="font-display text-[22px] sm:text-[25px] font-normal text-[#29251F]">
          Send an Enquiry
        </h3>
        <p className="mt-1 text-[13.5px] text-[#29251F]/70">
          Share your requirement details below and we&apos;ll be in touch.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-name`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              Full Name <span className="text-[#A95738]">*</span>
            </label>
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${formId}-business`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              Company / Business
            </label>
            <input
              id={`${formId}-business`}
              name="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
              placeholder="Company name"
              autoComplete="organization"
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              Email <span className="text-[#A95738]">*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              autoComplete="email"
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              Phone / WhatsApp
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your contact number"
              autoComplete="tel"
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Product Type & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-requirement`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              What are you looking for? <span className="text-[#A95738]">*</span>
            </label>
            <select
              id={`${formId}-requirement`}
              name="requirement"
              required
              value={formData.requirement}
              onChange={handleChange}
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            >
              {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor={`${formId}-quantity`}
              className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
            >
              Approximate Quantity
            </label>
            <input
              id={`${formId}-quantity`}
              name="quantity"
              type="text"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 500 pieces"
              className="mt-1.5 w-full h-[46px] px-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Message / Requirements */}
        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block font-sans text-[12.5px] font-semibold text-[#29251F]"
          >
            Requirements / Message <span className="text-[#A95738]">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your size, colour, weave, quantity or any other requirements…"
            className="mt-1.5 w-full p-3.5 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors resize-none"
          />
        </div>

        {/* Error Feedback */}
        {status === "error" && (
          <div
            role="alert"
            className="p-3 rounded-[2px] bg-[#B3392C]/10 border border-[#B3392C]/25 text-[13.5px] text-[#B3392C]"
          >
            <p>{errorMessage}</p>
            {contact.phone.e164 && (
              <p className="mt-1 text-[13px] text-[#29251F]/80">
                You can also call or message us directly:{" "}
                <a
                  href={`tel:${contact.phone.e164}`}
                  className="font-semibold text-[#40572D] underline underline-offset-2"
                >
                  {contact.phone.display}
                </a>
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group w-full h-[50px] rounded-[3px] bg-[#26351C] hover:bg-[#1F2B16] text-[#F5F1E8] font-sans text-[15px] font-semibold tracking-wide shadow-[0_4px_16px_rgba(38,53,28,0.22)] transition-all duration-250 ease-out hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26351C] focus-visible:ring-offset-2"
          >
            <span>{status === "sending" ? "Sending Enquiry…" : "Send Enquiry"}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </button>
        </div>

        <p className="text-center text-[12px] text-[#29251F]/60 pt-1">
          We use your details only to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}

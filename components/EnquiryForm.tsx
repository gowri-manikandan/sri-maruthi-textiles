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
    city: "",
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
    if (!formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your contact phone or WhatsApp number.");
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
        className="rounded-[4px] bg-[#F5F1E8] border border-[rgba(41,37,31,0.14)] p-8 sm:p-12 text-center shadow-[0_12px_44px_rgba(0,0,0,0.22)]"
      >
        <div className="size-14 mx-auto rounded-full bg-[#40572D]/15 flex items-center justify-center text-[#40572D] mb-5">
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-[26px] sm:text-[30px] font-normal text-[#29251F]">
          Thank you for your enquiry.
        </h3>
        <p className="mt-3 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#29251F]/80 max-w-[460px] mx-auto">
          We&apos;ve received your commercial requirements. Our weaving and production team will review the details and respond with pricing and dispatch timelines within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              business: "",
              email: "",
              phone: "",
              city: "",
              requirement: "Bath Towels",
              quantity: "",
              message: "",
            });
            setStatus("idle");
          }}
          className="mt-7 inline-flex items-center px-6 py-2.5 rounded-[2px] bg-[#26351C] text-[#F5F1E8] text-[14px] font-semibold hover:bg-[#1E2B16] transition-colors shadow-sm"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[4px] bg-[#F5F1E8] border border-[rgba(41,37,31,0.14)] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[0_12px_44px_rgba(0,0,0,0.22)] text-[#29251F]">
      {/* Header */}
      <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-[rgba(41,37,31,0.12)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-[#A95738]">
            DIRECT COMMERCIAL ENQUIRY
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#40572D]/10 text-[#40572D] text-[11.5px] font-medium tracking-wide">
            <span className="size-1.5 rounded-full bg-[#40572D] animate-pulse" />
            Direct Mill Pricing • Fast Response
          </span>
        </div>
        <h3 className="mt-2.5 font-display text-[26px] sm:text-[29px] lg:text-[32px] font-normal text-[#29251F] tracking-[-0.015em] leading-tight">
          Send an Enquiry
        </h3>
        <p className="mt-2 text-[14.5px] sm:text-[15px] leading-[1.6] text-[#29251F]/75">
          Share your requirement details below. Our weaving and production team will review your specifications and respond with commercial pricing and delivery timelines within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Product Type with Quick-Select Pills + Accessible Select */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor={`${formId}-requirement`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              What product are you looking for? <span className="text-[#A95738]">*</span>
            </label>
            <span className="text-[12px] text-[#29251F]/55 hidden sm:inline">
              Select a category below
            </span>
          </div>

          {/* Quick-Select Pills */}
          <div className="mt-2.5 flex flex-wrap gap-2">
            {PRODUCT_OPTIONS.map((opt) => {
              const isSelected = formData.requirement === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, requirement: opt }))
                  }
                  className={`px-3.5 py-1.5 rounded-[2px] text-[12.5px] sm:text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-[#26351C] text-[#F5F1E8] shadow-sm font-semibold"
                      : "bg-white text-[#29251F]/80 border border-[rgba(41,37,31,0.18)] hover:border-[#26351C]/40 hover:bg-[#FAF8F3]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Synchronized Select Dropdown with custom chevron (preventing clipping) */}
          <div className="relative mt-2.5">
            <select
              id={`${formId}-requirement`}
              name="requirement"
              required
              value={formData.requirement}
              onChange={handleChange}
              className="w-full h-[48px] sm:h-[50px] pl-3.5 pr-10 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] appearance-none focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors cursor-pointer"
            >
              {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#29251F]/60">
              <svg
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor={`${formId}-name`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
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
              placeholder="Your full name"
              autoComplete="name"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${formId}-business`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              Company / Business <span className="text-[12px] font-normal text-[#29251F]/60">(Optional)</span>
            </label>
            <input
              id={`${formId}-business`}
              name="business"
              type="text"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business / store name"
              autoComplete="organization"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email & Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              Email Address <span className="text-[#A95738]">*</span>
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              autoComplete="email"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              Phone / WhatsApp <span className="text-[#A95738]">*</span>
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact or WhatsApp number"
              autoComplete="tel"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Quantity & Delivery Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label
              htmlFor={`${formId}-quantity`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              Approximate Quantity <span className="text-[12px] font-normal text-[#29251F]/60">(Pieces / Meters)</span>
            </label>
            <input
              id={`${formId}-quantity`}
              name="quantity"
              type="text"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 500 pcs / 1,000 m"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor={`${formId}-city`}
              className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
            >
              Delivery Location / City <span className="text-[12px] font-normal text-[#29251F]/60">(Optional)</span>
            </label>
            <input
              id={`${formId}-city`}
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Kochi, Coimbatore, Chennai"
              className="mt-1.5 w-full h-[48px] sm:h-[50px] px-3.5 sm:px-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Message / Requirements */}
        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block font-sans text-[13px] sm:text-[13.5px] font-semibold text-[#29251F]"
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
            placeholder="Tell us about your required dimensions (e.g. 30x60 in), weight/GSM, border weave pattern, colour preferences, or specific delivery timeline…"
            className="mt-1.5 w-full p-3.5 sm:p-4 rounded-[2px] bg-white border border-[rgba(41,37,31,0.18)] text-[14.5px] sm:text-[15px] text-[#29251F] placeholder:text-[#29251F]/45 focus:border-[#40572D] focus:ring-1 focus:ring-[#40572D] outline-none transition-colors resize-none leading-relaxed"
          />
        </div>

        {/* Commercial Highlights Bar */}
        <div className="pt-2 pb-1 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[12.5px] sm:text-[13px] text-[#29251F]/75 border-t border-[rgba(41,37,31,0.08)]">
          <div className="flex items-center gap-2">
            <span className="text-[#40572D] font-bold">✓</span>
            <span>Direct Mill Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#40572D] font-bold">✓</span>
            <span>Sample Swatches Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#40572D] font-bold">✓</span>
            <span>Committed Dispatch Dates</span>
          </div>
        </div>

        {/* Error Feedback */}
        {status === "error" && (
          <div
            role="alert"
            className="p-3.5 rounded-[2px] bg-[#B3392C]/10 border border-[#B3392C]/25 text-[13.5px] text-[#B3392C]"
          >
            <p className="font-medium">{errorMessage}</p>
            {contact.phone.e164 && (
              <p className="mt-1.5 text-[13px] text-[#29251F]/80">
                You can also call or message us directly:{" "}
                <a
                  href={`tel:${contact.phone.e164}`}
                  className="font-semibold text-[#40572D] underline underline-offset-2 hover:text-[#26351C]"
                >
                  {contact.phone.display}
                </a>
              </p>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={status === "sending"}
            className="group w-full h-[52px] sm:h-[54px] rounded-[3px] bg-[#26351C] hover:bg-[#1E2B16] text-[#F5F1E8] font-sans text-[15.5px] sm:text-[16px] font-semibold tracking-wide shadow-[0_4px_18px_rgba(38,53,28,0.25)] transition-all duration-200 ease-out hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26351C] focus-visible:ring-offset-2 cursor-pointer"
          >
            <span>
              {status === "sending"
                ? "Submitting Commercial Enquiry…"
                : "Submit Commercial Enquiry"}
            </span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </button>
        </div>

        <p className="text-center text-[12px] sm:text-[12.5px] text-[#29251F]/60 pt-1">
          Your information is strictly protected and used only to respond to your commercial inquiry.
        </p>
      </form>
    </div>
  );
}

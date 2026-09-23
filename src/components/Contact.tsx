"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    service: "AI UGC Ads",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-b border-[#DDD9D1]/80 bg-[#F5F3EE]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-[#626B70] uppercase mb-3">
                09 / CONTACT
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tightest leading-tight">
                HAVE A PROJECT <br /> IN MIND?
              </h2>
              <p className="text-sm sm:text-base text-[#626B70] pt-4 max-w-md font-normal leading-relaxed">
                Let's turn the idea into something people actually remember. We respond to all project inquiries within 24 hours.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-6 pt-6 border-t border-[#DDD9D1]">
              <div>
                <div className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase mb-1">
                  EMAIL DIRECT
                </div>
                <a
                  href="mailto:hello@firstframe.ai"
                  className="font-serif-editorial text-2xl sm:text-3xl text-[#111111] hover:text-[#626B70] transition-colors hover-line"
                >
                  hello@firstframe.ai
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase mb-2">
                  SOCIAL DIRECT
                </div>
                <div className="flex flex-wrap gap-5 text-xs font-semibold tracking-widest text-[#111111] uppercase">
                  {["Instagram", "LinkedIn", "TikTok", "X / Twitter"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="hover:text-[#626B70] transition-colors hover-line"
                    >
                      {social} ↗
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase mb-1">
                  STUDIO LOCATION
                </div>
                <div className="text-xs font-semibold text-[#111111] tracking-wider uppercase">
                  Available Globally // Remote AI Production
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Underline Form */}
          <div className="lg:col-span-7 bg-[#F5F3EE] p-6 sm:p-10 rounded-[24px] border border-[#DDD9D1] shadow-sm">
            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#111111] text-[#F5F3EE] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif-editorial text-3xl text-[#111111]">
                  Inquiry Received.
                </h3>
                <p className="text-sm text-[#626B70] max-w-md mx-auto">
                  Thank you for reaching out. We'll review your project requirements and respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#DDD9D1] text-xs font-semibold tracking-wider uppercase text-[#111111] hover:bg-[#ECE9E2]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {errorMessage && (
                  <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2 border-b border-[#DDD9D1] pb-2">
                    <label className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent text-lg text-[#111111] placeholder:text-[#626B70]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2 border-b border-[#DDD9D1] pb-2">
                    <label className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent text-lg text-[#111111] placeholder:text-[#626B70]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="space-y-2 border-b border-[#DDD9D1] pb-2">
                    <label className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="Aura Skincare"
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-transparent text-lg text-[#111111] placeholder:text-[#626B70]/40 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2 border-b border-[#DDD9D1] pb-2">
                    <label className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                      PROJECT TYPE
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-transparent text-lg text-[#111111] focus:outline-none cursor-pointer"
                    >
                      <option value="AI UGC Ads">AI UGC Ads</option>
                      <option value="Product Videos">Product Videos</option>
                      <option value="Social Media Ads">Social Media Ads</option>
                      <option value="AI Product Creatives">AI Product Creatives</option>
                      <option value="Full Campaign Strategy">Full Campaign Strategy</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 border-b border-[#DDD9D1] pb-2">
                    <label className="text-[10px] font-bold tracking-wider text-[#626B70] uppercase">
                      TELL ME ABOUT THE PROJECT *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your product, campaign goals, target audience..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent text-lg text-[#111111] placeholder:text-[#626B70]/40 focus:outline-none resize-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  data-cursor="START ↗"
                  className="w-full py-4 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-widest uppercase hover:bg-black transition-all flex items-center justify-center gap-2 disabled:opacity-75 shadow-sm"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

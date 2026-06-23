"use client";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { Footer } from "@/components/sections/shared/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    packageInterest: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full bg-white border border-[#C9A84C]/20 rounded-sm px-4 py-3 font-sans text-sm text-[#0D1B2A] placeholder:text-[#0D1B2A]/30 focus:outline-none focus:border-[#C9A84C] transition-colors";

  return (
    <main>
      <BackgroundPaths
        eyebrow="Get in Touch"
        title="Begin Your Journey"
        subtitle="Reach out with any questions about our packages, pricing, or dates. We'll respond within one business day."
      />

      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-[#0D1B2A] rounded-sm p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] mb-2">Message Received</h3>
                  <p className="font-sans text-[#EDE8DF]/60 text-sm">
                    JazakAllahu Khairan for reaching out. We will be in touch within one business day, inshallah.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="font-sans text-xs uppercase tracking-widest text-[#0D1B2A]/50">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-sans text-xs uppercase tracking-widest text-[#0D1B2A]/50">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#0D1B2A]/50">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#0D1B2A]/50">Package Interest</label>
                    <select
                      name="packageInterest"
                      value={form.packageInterest}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a package...</option>
                      <option>Economy Umrah</option>
                      <option>Standard Umrah</option>
                      <option>Premium Umrah</option>
                      <option>Ramadan Umrah</option>
                      <option>Hajj Standard</option>
                      <option>Hajj Premium</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-sans text-xs uppercase tracking-widest text-[#0D1B2A]/50">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your group size, preferred travel dates, or any questions..."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#C9A84C] text-[#0D1B2A] font-sans font-semibold py-3 rounded-sm hover:bg-[#b8963e] transition-colors mt-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact info + map */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D1B2A] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#0D1B2A] text-sm">Office Address</p>
                    <p className="font-sans text-[#0D1B2A]/60 text-sm mt-0.5">
                      37-11 74th St, 2nd Floor<br />
                      Jackson Heights, NY 11372
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#0D1B2A] text-sm">Phone</p>
                    <a href="tel:+19176918162" className="font-sans text-[#C9A84C] text-sm hover:underline block">
                      +1 917-691-8162
                    </a>
                    <a href="tel:+17188664255" className="font-sans text-[#C9A84C] text-sm hover:underline block mt-0.5">
                      +1 718-866-HAJJ
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#0D1B2A] text-sm">Email</p>
                    <a href="mailto:reservations@taqwahajjandumrah.org" className="font-sans text-[#C9A84C] text-sm hover:underline">
                      reservations@taqwahajjandumrah.org
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/19176918162"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#0D1B2A] text-[#EDE8DF] font-sans text-sm font-semibold px-5 py-3 rounded-sm hover:bg-[#162840] transition-colors w-fit"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A84C]" />
                  Message us on WhatsApp
                </a>
              </div>

              {/* Google Map embed */}
              <div className="rounded-sm overflow-hidden border border-[#C9A84C]/20 h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.346!2d-73.8835!3d40.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0000000001%3A0x1!2s37-11+74th+St%2C+Jackson+Heights%2C+NY+11372!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Taqwa Hajj & Umrah location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { IslamicPatternBg } from "@/components/ui/islamic-pattern";

export function CTABanner() {
  return (
    <section className="relative py-24 bg-[#0D1B2A] overflow-hidden">
      <IslamicPatternBg />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <span className="uppercase tracking-[0.25em] text-[#C9A84C]/70 text-xs font-sans font-medium">
          Begin Your Pilgrimage
        </span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#C9A84C] mt-4 leading-tight">
          The Journey of a Lifetime Starts with One Call
        </h2>
        <p className="font-sans text-[#EDE8DF]/60 mt-6 max-w-xl mx-auto">
          All bookings are handled personally — give us a call or message us on WhatsApp and we'll walk you through everything.
        </p>

        {/* Phone number — primary CTA */}
        <div className="mt-8">
          <a
            href="tel:+19176918162"
            className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0D1B2A] font-sans font-bold text-xl px-10 py-5 rounded-sm hover:bg-[#b8963e] transition-colors"
          >
            <Phone className="w-5 h-5" />
            +1 917-691-8162
          </a>
        </div>

        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          <a
            href="https://wa.me/19176918162"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-sans px-6 py-3 rounded-sm hover:bg-[#C9A84C]/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-[#EDE8DF]/20 text-[#EDE8DF]/60 font-sans px-6 py-3 rounded-sm hover:bg-[#EDE8DF]/5 transition-colors"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

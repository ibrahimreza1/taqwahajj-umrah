import { Footer } from "@/components/sections/shared/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Award, Globe, Users, Star, Phone, Mail, Heart, Shield, BookOpen } from "lucide-react";
import { IslamicPatternBg } from "@/components/ui/islamic-pattern";
import Link from "next/link";

const stats = [
  { value: "11+", label: "Years of Service", desc: "Serving New York since 2013" },
  { value: "1,000+", label: "Pilgrims Guided", desc: "Trusted across the tri-state area" },
  { value: "5.0 ★", label: "Google Rating", desc: "464 reviews from our community" },
  { value: "2", label: "Holy Cities", desc: "Makkah & Madinah, every trip" },
];

const values = [
  {
    icon: Shield,
    title: "Best Price Guaranteed",
    desc: "We believe no Muslim should be priced out of their pilgrimage. We work directly with airlines and hotels to offer premium experiences at the most competitive prices in New York.",
  },
  {
    icon: BookOpen,
    title: "Scholar-Led, Always",
    desc: "Every single trip is led by a knowledgeable guide who travels with your group from New York — not a rep who meets you at the airport. Your spiritual journey begins before you land.",
  },
  {
    icon: Heart,
    title: "Community First",
    desc: "We are from the same community we serve — Jackson Heights, Queens. When you travel with us, you travel with neighbors who genuinely care about your experience.",
  },
  {
    icon: Globe,
    title: "End-to-End Service",
    desc: "From visa processing to hotel check-in to ziyarat tours, every detail is handled. You focus on worship — we handle everything else.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <BackgroundPaths
        eyebrow="Our Story"
        title="About Taqwa Hajj & Umrah"
        subtitle="11+ years of leading Hajj & Umrah at the best price and best service possible — from the heart of Jackson Heights, Queens."
      />

      {/* Mission statement */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-serif text-2xl md:text-3xl text-[#0D1B2A] leading-relaxed mb-8">
            Taqwa Hajj & Umrah was founded with a single belief: that every Muslim in New York deserves the opportunity to perform their pilgrimage with proper spiritual guidance — not just a travel itinerary.
          </p>
          <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed mb-4">
            What began as a small group of families traveling together from Jackson Heights has grown into one of the most trusted pilgrimage organizations in the tri-state area. Over eleven years, we have accompanied more than a thousand pilgrims on their journeys to Makkah and Madinah.
          </p>
          <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed mb-4">
            We are not a standard travel agency. Every trip we organize is led by a scholar or knowledgeable guide who travels with your group from New York. They provide context, spiritual reflection, and a presence that transforms a trip into a true pilgrimage.
          </p>
          <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed">
            Our mission is simple: remove every logistical barrier between you and your worship, so that when you stand before the Kaaba, all you carry is your intention.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-[#C9A84C] mb-1">{s.value}</div>
                <div className="font-sans text-sm font-semibold text-[#F5F0E8] mb-1">{s.label}</div>
                <div className="font-sans text-xs text-[#EDE8DF]/50">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl text-[#0D1B2A] mt-3">Our Commitments to You</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F5F0E8] rounded-sm p-7 border border-[#C9A84C]/20 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-xl text-[#0D1B2A]">{title}</h3>
                <p className="font-sans text-sm text-[#0D1B2A]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
              Our Team
            </span>
            <h2 className="font-serif text-4xl text-[#0D1B2A] mt-3">The People Behind Your Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Brother Ashik",
                role: "Lead Scholar & Group Coordinator",
                bio: "A graduate of Madinah University with over a decade of experience leading pilgrimage groups from New York. Brother Ashik is known for his warmth, patience, and ability to make even first-time pilgrims feel at home in the holy cities. His daily reflections at the Haram are a highlight of every trip.",
              },
              {
                name: "Brother Safat",
                role: "Operations Director & Guide",
                bio: "Brother Safat oversees the logistics of every trip — from visa processing to hotel accommodations to transportation in Makkah and Madinah. With years of on-the-ground experience in Saudi Arabia, he ensures that every pilgrim is safe, comfortable, and where they need to be.",
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-sm p-8 border border-[#C9A84C]/20">
                <div className="w-16 h-16 rounded-full bg-[#0D1B2A] flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl text-[#C9A84C]">
                    {person.name.split(" ")[1][0]}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#0D1B2A]">{person.name}</h3>
                <span className="font-sans text-xs uppercase tracking-widest text-[#7A9E8E] font-medium mt-1 block">
                  {person.role}
                </span>
                <p className="font-sans text-[#0D1B2A]/60 text-sm mt-4 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — contact for business */}
      <section className="relative py-24 bg-[#0D1B2A] overflow-hidden">
        <IslamicPatternBg />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="uppercase tracking-[0.25em] text-[#C9A84C]/70 text-xs font-sans font-medium">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mt-4 leading-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-sans text-[#EDE8DF]/60 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            For business inquiries, package questions, group bookings, or anything else — reach us by phone or email. We respond personally, not through a call center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="tel:+19176918162"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0D1B2A] font-sans font-bold px-8 py-4 rounded-sm hover:bg-[#b8963e] transition-colors"
            >
              <Phone className="w-4 h-4" />
              917-691-8162
            </a>
            <a
              href="tel:+17188664255"
              className="inline-flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] font-sans font-semibold px-8 py-4 rounded-sm hover:bg-[#C9A84C]/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              718-866-HAJJ
            </a>
          </div>
          <a
            href="mailto:reservations@taqwahajjandumrah.org"
            className="inline-flex items-center gap-2 mt-4 font-sans text-sm text-[#EDE8DF]/50 hover:text-[#C9A84C] transition-colors"
          >
            <Mail className="w-4 h-4" />
            reservations@taqwahajjandumrah.org
          </a>
          <div className="mt-6">
            <Link
              href="/contact"
              className="font-sans text-xs text-[#EDE8DF]/30 hover:text-[#EDE8DF]/60 underline underline-offset-4 transition-colors"
            >
              Or send us a message online →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Footer } from "@/components/sections/shared/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Award, Globe, Users, Star } from "lucide-react";
import { IslamicPatternBg } from "@/components/ui/islamic-pattern";

const credentials = [
  { icon: Award, label: "11+ Years in Operation", desc: "Serving the New York Muslim community since 2013" },
  { icon: Globe, label: "Madinah-Trained Scholars", desc: "Our guides hold credentials from leading Islamic institutions" },
  { icon: Users, label: "1,000+ Pilgrims Served", desc: "A trusted name across the tri-state area" },
  { icon: Star, label: "5-Star Community Reviews", desc: "Recommended by imams and community leaders throughout NYC" },
];

export default function AboutPage() {
  return (
    <main>
      <BackgroundPaths
        eyebrow="Our Story"
        title="About Taqwa Hajj & Umrah"
        subtitle="Serving the Muslim community of New York with guided pilgrimage since 2013."
      />

      {/* Story */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="font-serif text-2xl text-[#0D1B2A] leading-relaxed mb-6">
              Taqwa Hajj & Umrah was founded with a single belief: that every Muslim in New York deserves the opportunity to perform their pilgrimage with proper spiritual guidance — not just a travel itinerary.
            </p>
            <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed mb-4">
              What began as a small group of families traveling together from Jackson Heights has grown into one of the most trusted pilgrimage organizations in the tri-state area. Over eleven years, we have accompanied more than a thousand pilgrims on their journeys to Makkah and Madinah.
            </p>
            <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed mb-4">
              We are different from a standard travel agency. Every trip we organize is led by a scholar or knowledgeable guide who travels with your group from New York. They provide context, spiritual reflection, and the kind of presence that transforms a trip into a true pilgrimage.
            </p>
            <p className="font-sans text-[#0D1B2A]/70 text-base leading-relaxed">
              Our mission is simple: to remove every logistical barrier between you and your worship, so that when you stand before the Kaaba, all you carry is your intention.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
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
              <div key={person.name} className="bg-[#F5F0E8] rounded-sm p-8 border border-[#C9A84C]/20">
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

      {/* Credentials */}
      <section className="relative py-20 bg-[#0D1B2A] overflow-hidden">
        <IslamicPatternBg />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#F5F0E8]">Why the Community Trusts Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-[#F5F0E8]/5 border border-[#C9A84C]/20 rounded-sm p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F0E8] mb-2">{label}</h3>
                <p className="font-sans text-sm text-[#EDE8DF]/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

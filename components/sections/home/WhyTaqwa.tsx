import { BookOpen, Heart, Map, DollarSign } from "lucide-react";
import { IslamicPatternBg } from "@/components/ui/islamic-pattern";

const pillars = [
  {
    icon: BookOpen,
    title: "Guided by Scholars",
    body: "Every journey is led by a qualified Islamic scholar — not just a tour operator. Our guides include graduates of Madinah University who provide spiritual context throughout your pilgrimage.",
  },
  {
    icon: Heart,
    title: "Community-Centered",
    body: "We serve the Muslim community of New York and the broader tri-state area. Our groups feel like family — many pilgrims return year after year because of the bonds formed on these journeys.",
  },
  {
    icon: Map,
    title: "Seamless Logistics",
    body: "From visa processing to hotel check-in to transportation in the holy cities, we handle every detail. You focus on your worship — we take care of everything else.",
  },
  {
    icon: DollarSign,
    title: "Affordable Packages",
    body: "Sacred journeys shouldn't be out of reach. We offer flexible payment plans and competitive pricing so that performing Umrah or Hajj is accessible to every member of our community.",
  },
];

export function WhyTaqwa() {
  return (
    <section className="relative py-24 bg-[#0D1B2A] overflow-hidden">
      <IslamicPatternBg />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5F0E8] mt-3">
            The Taqwa Difference
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-[#F5F0E8]/5 border border-[#C9A84C]/20 rounded-sm p-8 flex gap-5 hover:bg-[#F5F0E8]/10 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mt-1">
                <Icon className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#F5F0E8] mb-2">{title}</h3>
                <p className="font-sans text-sm text-[#EDE8DF]/60 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

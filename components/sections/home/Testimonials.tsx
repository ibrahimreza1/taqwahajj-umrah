import { Star } from "lucide-react";
import { fetchGoogleReviews } from "@/lib/reviews";

function truncate(text: string, max = 320) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

export async function Testimonials() {
  const reviews = await fetchGoogleReviews();

  return (
    <section className="py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.25em] text-[#C9A84C] text-xs font-sans font-medium">
            Google Reviews
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D1B2A] mt-3">
            From Our Community
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <span className="font-sans text-sm text-[#0D1B2A]/60">
              5.0 · 464 reviews on Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="bg-white border border-[#C9A84C]/20 rounded-sm p-8 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>
              <p className="font-sans text-[#0D1B2A]/70 text-sm leading-relaxed italic">
                &ldquo;{truncate(r.text)}&rdquo;
              </p>
              <div className="mt-auto pt-4 border-t border-[#C9A84C]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {r.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.avatar} alt={r.author} className="w-7 h-7 rounded-full object-cover" />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#0D1B2A] flex items-center justify-center">
                      <span className="text-[#C9A84C] text-xs font-serif font-semibold">
                        {r.author[0]}
                      </span>
                    </div>
                  )}
                  <span className="font-sans font-semibold text-[#0D1B2A] text-sm">{r.author}</span>
                </div>
                {r.date && (
                  <span className="font-sans text-[#0D1B2A]/30 text-xs">{r.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/Ce2ZrKo7vcosEB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-[#C9A84C] underline underline-offset-4 hover:text-[#b8963e]"
          >
            See all 464 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}

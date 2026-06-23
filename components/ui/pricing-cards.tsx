import { Check, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Package {
  name: string;
  duration: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
}

interface PricingCardsProps {
  packages: Package[];
  badge?: string;
}

function PricingCards({ packages, badge = "Packages" }: PricingCardsProps) {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <Badge className="bg-[#C9A84C]/20 text-[#C9A84C] border-[#C9A84C]/30 hover:bg-[#C9A84C]/30">
          {badge}
        </Badge>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`relative rounded-sm border transition-shadow hover:shadow-xl ${
              pkg.highlight
                ? "bg-[#0D1B2A] border-[#C9A84C] shadow-lg"
                : "bg-white border-[#C9A84C]/20"
            }`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0D1B2A] text-xs font-sans font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <CardHeader className="pb-4">
              <span
                className={`text-xs font-sans uppercase tracking-widest ${
                  pkg.highlight ? "text-[#C9A84C]/70" : "text-[#7A9E8E]"
                }`}
              >
                {pkg.duration}
              </span>
              <CardTitle
                className={`font-serif text-2xl font-normal mt-1 ${
                  pkg.highlight ? "text-[#F5F0E8]" : "text-[#0D1B2A]"
                }`}
              >
                {pkg.name}
              </CardTitle>
              <CardDescription
                className={pkg.highlight ? "text-[#EDE8DF]/60" : "text-[#0D1B2A]/50"}
              >
                {pkg.tagline}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-6">
              <p
                className={`font-serif text-3xl ${
                  pkg.highlight ? "text-[#C9A84C]" : "text-[#0D1B2A]"
                }`}
              >
                {pkg.price}
              </p>

              <ul className="flex flex-col gap-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        pkg.highlight ? "text-[#C9A84C]" : "text-[#7A9E8E]"
                      }`}
                    />
                    <span
                      className={`font-sans text-sm ${
                        pkg.highlight ? "text-[#EDE8DF]/80" : "text-[#0D1B2A]/70"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/contact"
                  className={`text-center text-sm font-sans font-semibold py-3 rounded-sm transition-colors ${
                    pkg.highlight
                      ? "bg-[#C9A84C] text-[#0D1B2A] hover:bg-[#b8963e]"
                      : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10"
                  }`}
                >
                  Learn More
                </Link>
                <a
                  href="tel:+19176918162"
                  className={`flex items-center justify-center gap-2 text-center text-xs font-sans py-2 rounded-sm transition-colors ${
                    pkg.highlight
                      ? "text-[#EDE8DF]/50 hover:text-[#EDE8DF]"
                      : "text-[#0D1B2A]/40 hover:text-[#0D1B2A]/70"
                  }`}
                >
                  <PhoneCall className="w-3 h-3" />
                  Call to book
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export { PricingCards };

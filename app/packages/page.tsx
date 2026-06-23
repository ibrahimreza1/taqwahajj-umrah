"use client";
import { useState } from "react";
import { Footer } from "@/components/sections/shared/Footer";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { PricingCards } from "@/components/ui/pricing-cards";

const tabs = ["Umrah", "Hajj", "Ramadan"] as const;
type Tab = (typeof tabs)[number];

const packages: Record<Tab, Array<{
  name: string;
  duration: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
}>> = {
  Umrah: [
    {
      name: "October Umrah 2026",
      duration: "Oct 10 – Oct 18 · Columbus Day Weekend",
      price: "Starting at $2,350",
      tagline: "8 days in the Holy Land over Columbus Day",
      features: [
        "Direct flight with Saudia Airlines",
        "Madinah: Intercontinental Dar Al Hijrah Hotel",
        "Makkah: Fairmont Hotel, Royal Clocktower",
        "Visa & all transfers included",
        "Religious & Historical Sightseeing",
        "Pre-Umrah Webinar",
        "Breakfast Buffet daily",
        "24/7 Staff Assistance",
      ],
    },
    {
      name: "November Umrah 2026",
      duration: "Nov 21 – Nov 29 · Thanksgiving Break",
      price: "Starting at $2,290",
      tagline: "9 days in the Holy Land over Thanksgiving",
      features: [
        "Flight with Saudia Airlines",
        "Madinah: Intercontinental Dar Al Hijra",
        "Makkah: Fairmont Hotel, Clocktower",
        "Visa & all transport included",
        "Religious Sightseeing Tours",
        "Pre-Umrah Webinar",
        "Breakfast Buffet daily",
        "24/7 Staff Assistance",
      ],
    },
  ],
  Hajj: [
    {
      name: "Hajj Standard",
      duration: "21 Days",
      price: "From $8,999",
      tagline: "Complete the fifth pillar with guidance",
      features: [
        "Round-trip flights from JFK",
        "4-star hotels in Makkah & Madinah",
        "Mina tent accommodation (AC)",
        "Full Hajj visa processing",
        "Scholar-led Hajj rituals",
        "All internal transfers",
        "Daily meals during rituals",
        "24/7 group support",
      ],
    },
    {
      name: "Hajj Premium",
      duration: "21 Days",
      price: "From $12,499",
      tagline: "Perform Hajj in comfort and serenity",
      features: [
        "Business class available",
        "5-star hotels (Haram proximity)",
        "Upgraded Mina accommodation",
        "Full Hajj visa processing",
        "Dedicated scholar & imam",
        "Private group coach",
        "Full board meals",
        "Pre-Hajj orientation in NYC",
      ],
    },
  ],
  Ramadan: [
    {
      name: "Last 10 Nights",
      duration: "14 Days",
      price: "From $3,499",
      tagline: "Seek Laylat al-Qadr in the holy city",
      features: [
        "Round-trip flights from JFK",
        "4-star hotel near Haram",
        "Visa processing",
        "Daily iftar arrangements",
        "Tarawih & Tahajjud programs",
        "Scholar-led guidance",
        "24/7 group support",
      ],
    },
    {
      name: "Full Ramadan",
      duration: "30 Days",
      price: "From $7,999",
      tagline: "Spend the entire blessed month in Makkah",
      features: [
        "Round-trip flights from JFK",
        "4-star hotel near Haram",
        "Madinah stay included",
        "Visa processing",
        "All iftars & suhoor",
        "Daily scholar lectures",
        "Itikaf facilitation",
        "24/7 full support",
      ],
    },
  ],
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Umrah");

  return (
    <main>
      <BackgroundPaths
        eyebrow="All Packages"
        title="Find Your Journey"
        subtitle="Every package includes a scholar or knowledgeable guide departing with your group from New York."
      />

      {/* Tabs */}
      <div className="bg-[#F5F0E8] border-b border-[#C9A84C]/20 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 font-sans text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-[#C9A84C] text-[#0D1B2A]"
                  : "border-transparent text-[#0D1B2A]/50 hover:text-[#0D1B2A]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Package grid */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {activeTab === "Ramadan" && (
            <PricingCards packages={packages["Ramadan"]} badge="Ramadan Packages" />
          )}

          {activeTab === "Umrah" && (
            <PricingCards packages={packages["Umrah"]} badge="Umrah Packages" />
          )}

          {activeTab === "Hajj" && packages["Hajj"].length > 0 && (
            <PricingCards packages={packages["Hajj"]} badge="Hajj Packages" />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

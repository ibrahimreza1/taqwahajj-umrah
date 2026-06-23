import { Clock, Users, BookOpen, Headphones } from "lucide-react";

const items = [
  { icon: Clock, label: "11+ Years Experience" },
  { icon: Users, label: "Groups Up to 150" },
  { icon: BookOpen, label: "Scholar-Led Tours" },
  { icon: Headphones, label: "24/7 Support" },
];

export function TrustBar() {
  return (
    <div className="bg-[#F5F0E8] border-y border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#C9A84C]" />
              </div>
              <span className="font-sans text-sm font-medium text-[#0D1B2A]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

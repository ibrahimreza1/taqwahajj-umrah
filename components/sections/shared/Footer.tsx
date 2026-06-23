import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-serif text-2xl text-[#C9A84C]">Taqwa</span>
              <span className="font-sans text-[#EDE8DF]/50 text-xs tracking-widest uppercase ml-2">
                Hajj & Umrah
              </span>
            </div>
            <p className="font-sans text-[#EDE8DF]/50 text-sm leading-relaxed">
              Scholar-led pilgrimage groups from New York, serving the Muslim community with care and integrity since 2013.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C9A84C]/70 font-medium">
              Navigate
            </span>
            {[
              { href: "/", label: "Home" },
              { href: "/packages", label: "Packages" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-[#EDE8DF]/60 hover:text-[#EDE8DF] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#C9A84C]/70 font-medium">
              Contact
            </span>
            <div className="flex items-start gap-2 text-[#EDE8DF]/60 text-sm font-sans">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#C9A84C]" />
              <span>37-11 74th St 2nd Fl,<br />Jackson Heights, NY 11372</span>
            </div>
            <div className="flex items-center gap-2 text-[#EDE8DF]/60 text-sm font-sans">
              <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
              <a href="tel:+19176918162" className="hover:text-[#EDE8DF] transition-colors">
                +1 917-691-8162
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C9A84C]/10 text-center">
          <span className="font-sans text-xs text-[#EDE8DF]/30">
            © {new Date().getFullYear()} Taqwa Hajj & Umrah. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

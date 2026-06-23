"use client";
import { Home, BookOpen, Users, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { name: "Home",     url: "/",         icon: Home },
  { name: "Packages", url: "/packages", icon: BookOpen },
  { name: "About",    url: "/about",    icon: Users },
  { name: "Contact",  url: "/contact",  icon: Phone },
];

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 gap-3">
      <NavBar items={navItems} />
      <ThemeToggle />
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Copyright,
  Mail,
  MapPin,
  Phone,
  Store,
  Send,
  ArrowUpRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

type LinkItem = { label: string; href: string };
type SocialItem = { label: string; href: string; icon: React.ElementType };
type ContactItem = {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
};

const quickLinks: LinkItem[] = [
  { label: "হোম", href: "/" },
  { label: "দোকানসমূহ", href: "/shops" },
  { label: "ক্যাটাগরি", href: "/categories" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
];

const usefulLinks: LinkItem[] = [
  { label: "কীভাবে কাজ করে", href: "/how-it-works" },
  { label: "দোকান যুক্ত করুন", href: "/add-shop" },
  { label: "সাপোর্ট সেন্টার", href: "/support" },
  { label: "প্রাইভেসি পলিসি", href: "/privacy" },
];

const socialLinks: SocialItem[] = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

const contactDetails: ContactItem[] = [
  { icon: MapPin, title: "Location", value: "Khulna, Bangladesh" },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1628 679540",
    href: "tel:+8801628679540",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@areabazar.com",
    href: "mailto:support@areabazar.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-black/90 text-white">
      {/* premium background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.12),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.02))]" />
      </div>

      {/* top highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* top CTA */}
        {/* <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-12 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              নতুন অফার সম্পর্কে সবার আগে জানতে চান?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              আমাদের নিউজলেটারে সাবস্ক্রাইব করুন এবং আপনার এলাকার সেরা অফার,
              দোকান ও আপডেট সবার আগে পেয়ে যান।
            </p>
          </div>

          <form className="flex w-full max-w-md gap-x-2">
            <input
              type="email"
              required
              placeholder="আপনার ইমেইল দিন"
              className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500 active:scale-95"
            >
              <Send className="mr-2 h-4 w-4" />
              জয়েন
            </button>
          </form>
        </div> */}

        {/* main content */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-950/40 transition-transform duration-300 group-hover:rotate-6">
                <Store className="h-6 w-6" />
              </div>

              <div>
                <span className="block text-2xl font-black tracking-tight text-white">
                  Area Bazar
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-400">
                  Local Connect
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              আপনার চারপাশের স্থানীয় দোকান, মার্কেট এবং দরকারি সার্ভিসগুলোকে এক
              জায়গায় আনা — এটাই Area Bazar এর লক্ষ্য। সহজ, দ্রুত এবং modern
              local discovery experience এখন আপনার হাতের মুঠোয়।
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* navigation */}
          {[
            { title: "Quick Explore", links: quickLinks },
            { title: "Support & Help", links: usefulLinks },
          ].map((section) => (
            <div key={section.title} className="lg:pl-8">
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">
                {section.title}
              </h4>

              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-slate-400 transition-colors hover:text-emerald-400"
                    >
                      <ArrowUpRight className="mr-2 h-0 w-0 transition-all duration-300 group-hover:h-3 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/90">
              Contact Us
            </h4>

            <div className="mt-6 space-y-5">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                      {item.title}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Copyright className="h-4 w-4" />
            <span>
              {currentYear}{" "}
              <span className="font-semibold text-white">Area Bazar</span>. All
              rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-medium text-slate-400">
            <Link
              href="#"
              className="flex items-center gap-1 transition hover:text-emerald-400"
            >
              <ShieldCheck className="h-3 w-3" />
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="flex items-center gap-1 transition hover:text-emerald-400"
            >
              <Globe className="h-3 w-3" />
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

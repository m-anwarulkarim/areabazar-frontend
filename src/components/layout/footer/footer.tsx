"use client";

import Link from "next/link";
import {
  ArrowRight,
  Copyright,
  // Instagram,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
  Store,
  // Youtube,
} from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "দোকানসমূহ", href: "/shops" },
  { label: "ক্যাটাগরি", href: "/categories" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
];

const usefulLinks = [
  { label: "কীভাবে কাজ করে", href: "/how-it-works" },
  { label: "আপনার দোকান যুক্ত করুন", href: "/add-shop" },
  { label: "সাপোর্ট", href: "/support" },
  { label: "যোগাযোগ", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: ImInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: BsYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-emerald-100 bg-white text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="relative -mt-8 overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-6 py-8 text-white shadow-[0_20px_70px_-20px_rgba(16,185,129,0.55)] sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <Store className="h-4 w-4" />
                স্থানীয় দোকান খুঁজে পাওয়া এখন আরও সহজ
              </div>
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                AreaBazar দিয়ে আপনার আশেপাশের দোকান খুঁজুন আরও দ্রুত, আরও
                স্মার্টভাবে
              </h2>

              <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">
                লোকাল মার্কেট, প্রয়োজনীয় পণ্য, দোকানের তথ্য এবং যোগাযোগ — সব
                কিছু এক জায়গায়।
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <Link
                href="/shops"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                দোকান খুঁজুন
              </Link>

              <Link
                href="/add-shop"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                আপনার দোকান যুক্ত করুন
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div className="xl:pr-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25">
                <Store className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  AreaBazar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Local Shop Discovery Platform
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Area Bazar হলো এমন একটি প্ল্যাটফর্ম যেখানে আপনি সহজে আপনার এলাকার
              দোকান, পণ্য এবং প্রয়োজনীয় সার্ভিস খুঁজে পেতে পারেন।
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:text-emerald-400"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition group-hover:bg-emerald-500 dark:bg-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              Useful Links
            </h4>

            <ul className="mt-5 space-y-3">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition group-hover:bg-emerald-500 dark:bg-slate-600" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              Contact Info
            </h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Khulna, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Phone
                  </p>
                  <Link
                    href="tel:+8801700000000"
                    className="mt-1 block text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    +880 162867954
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Email
                  </p>
                  <Link
                    href="mailto:support@areabazar.com"
                    className="mt-1 block text-sm text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    support@areabazar.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Copyright className="h-4 w-4" />
            <span>
              {new Date().getFullYear()} AreaBazar. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LangToggle from "./LangToggle";
import type { Lang } from "@/lib/i18n";

type NavProps = {
  lang: Lang;
  links: { href: string; label: string }[];
  ctaLabel: string;
};

export default function Nav({ lang, links, ctaLabel }: NavProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ===== DESKTOP nav (>= md) ===== */}
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-fg-dim transition-colors hover:text-accent"
          >
            {l.label}
          </Link>
        ))}
        <LangToggle current={lang} />
        <Link href="/contacto" className="btn-primary text-xs whitespace-nowrap">
          {ctaLabel}
        </Link>
      </nav>

      {/* ===== MOBILE: hamburger button (< md) ===== */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col items-end justify-center gap-1.5 p-2 -mr-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span
          className={`block h-0.5 w-6 bg-fg transition-all duration-200 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-fg transition-opacity duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-fg transition-all duration-200 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* ===== MOBILE: slide-down menu (< md) ===== */}
      {open && (
        <>
          {/* backdrop */}
          <div
            className="md:hidden fixed inset-0 top-20 bg-bg/95 backdrop-blur-sm z-40"
            onClick={close}
            aria-hidden
          />
          {/* menu */}
          <div className="md:hidden fixed left-0 right-0 top-20 z-50 border-b border-border bg-bg shadow-2xl">
            <nav className="container-page flex flex-col py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="border-b border-border py-4 text-lg text-fg transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-6 flex items-center justify-between gap-4">
                <LangToggle current={lang} />
                <Link
                  href="/contacto"
                  onClick={close}
                  className="btn-primary text-sm whitespace-nowrap"
                >
                  {ctaLabel}
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

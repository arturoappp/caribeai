import Link from "next/link";
import { company, content } from "@/lib/data";
import { getLang } from "@/lib/i18n";
import Nav from "./Nav";

export default function Header() {
  const lang = getLang();
  const t = content[lang];

  const links = [
    { href: "/servicios", label: t.nav.services },
    { href: "/proyectos", label: t.nav.projects },
    { href: "/nosotros",  label: t.nav.about },
    { href: "/contacto",  label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container-page relative flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-mono text-base sm:text-lg font-semibold">
          {/* Logo responsive: 40px mobile, 56px desktop */}
          <img src="/logo.svg" alt={company.name} className="h-10 w-10 md:h-14 md:w-14" />
          <span>{company.name}</span>
        </Link>
        <Nav lang={lang} links={links} ctaLabel={t.btn.talk} />
      </div>
    </header>
  );
}

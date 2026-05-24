import Link from "next/link";
import { company, content } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export default function Footer() {
  const lang = getLang();
  const t = content[lang];

  return (
    <footer className="mt-24 border-t border-border bg-bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 font-mono font-semibold">
            <img src="/logo.svg" alt={company.name} className="h-10 w-10" />
            <span>{company.name}</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-fg-dim">{t.tagline}</p>
          <p className="mt-4 text-xs text-fg-muted">{t.location}</p>
          <p className="mt-2 text-xs text-fg-muted">{t.footer.availability}</p>
        </div>

        <div>
          <p className="label-mono mb-3">{t.footer.navigate}</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/"          className="text-fg-dim hover:text-accent">{t.nav.home}</Link></li>
            <li><Link href="/servicios" className="text-fg-dim hover:text-accent">{t.nav.services}</Link></li>
            <li><Link href="/proyectos" className="text-fg-dim hover:text-accent">{t.nav.projects}</Link></li>
            <li><Link href="/nosotros"  className="text-fg-dim hover:text-accent">{t.nav.about}</Link></li>
            <li><Link href="/contacto"  className="text-fg-dim hover:text-accent">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <p className="label-mono mb-3">{t.footer.contact}</p>
          <ul className="space-y-2 text-sm">
            <li><a href={`mailto:${company.email}`} className="text-fg-dim hover:text-accent">{company.email}</a></li>
            <li><a href={company.whatsappLink} target="_blank" rel="noreferrer" className="text-fg-dim hover:text-accent">WhatsApp: {company.whatsapp}</a></li>
            <li><a href={company.linkedin} target="_blank" rel="noreferrer" className="text-fg-dim hover:text-accent">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border bg-bg">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5 text-xs text-fg-muted">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>{company.legalName}</span>
            <span>Santo Domingo, República Dominicana</span>
          </div>
          <div>© {new Date().getFullYear()} {company.name}. {t.footer.copy}</div>
        </div>
      </div>
    </footer>
  );
}

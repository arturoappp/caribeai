import Link from "next/link";
import { content, getProjects } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "Proyectos — Caribe AI",
  description: "Portafolio de sistemas en operación.",
};

export default function ProyectosPage() {
  const lang = getLang();
  const t = content[lang];
  const projects = getProjects(lang);

  return (
    <>
      <section className="container-page border-b border-border py-20">
        <p className="label-mono">{t.labels.portfolio}</p>
        <h1 className="heading-xl mt-3 max-w-3xl">{t.proyectos.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-fg-dim">{t.proyectos.intro}</p>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const isExternal = p.external ?? p.url.startsWith("http");
            const linkText = p.linkLabel ?? (isExternal ? new URL(p.url).hostname : "Ver más");
            return (
              <a
                key={p.id}
                href={p.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group relative block overflow-hidden rounded-lg border border-border bg-bg-surface transition-all hover:border-border-strong hover:-translate-y-1"
              >
                <div className="h-1" style={{ backgroundColor: p.accent }} />
                <div className="flex h-64 flex-col justify-between p-7">
                  <div className="font-mono text-3xl font-bold tracking-tight" style={{ color: p.accent }}>
                    {p.brand}
                  </div>
                  <div>
                    <p className="text-fg">{p.tagline}</p>
                    <p className="mt-1 text-xs text-fg-muted">{p.sector}</p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-fg-dim transition-colors group-hover:text-accent">
                      {linkText}
                      {isExternal && <span aria-hidden>↗</span>}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-bg-surface p-8 text-center">
          <h2 className="heading-md">{t.proyectos.demoH2}</h2>
          <p className="mt-3 text-fg-dim">{t.proyectos.demoP}</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contacto" className="btn-primary">{t.btn.requestDemo}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

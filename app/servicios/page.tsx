import Link from "next/link";
import { company, content } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "Servicios — Caribe AI",
  description: "Capacidades operativas: desarrollo de plataformas, IA privada, agentes, infraestructura y capacitación.",
};

export default function ServiciosPage() {
  const lang = getLang();
  const t = content[lang];

  return (
    <>
      <section className="container-page border-b border-border py-20">
        <p className="label-mono">{t.labels.capabilities}</p>
        <h1 className="heading-xl mt-3 max-w-3xl">{t.servicios.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-fg-dim">{t.servicios.intro}</p>
      </section>

      <section className="container-page py-16">
        <div className="divide-y divide-border">
          {t.services.map((s) => (
            <article key={s.id} id={s.id} className="grid gap-6 py-14 md:grid-cols-[120px_1fr] md:gap-12">
              <div>
                <p className="font-mono text-5xl font-bold text-accent">{s.number}</p>
              </div>
              <div className="max-w-2xl">
                <h2 className="heading-md">{s.title}</h2>
                <p className="mt-4 text-fg-dim">{s.long}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-fg">
                      <span className="mt-1.5 text-accent">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-lg border border-border bg-bg-surface p-10 text-center">
          <h2 className="heading-md max-w-2xl mx-auto">{t.servicios.ctaH2}</h2>
          <p className="mt-4 text-fg-dim">{t.servicios.ctaP}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contacto" className="btn-primary">{t.btn.talk}</Link>
            <a href={`mailto:${company.email}`} className="btn-secondary">{company.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}

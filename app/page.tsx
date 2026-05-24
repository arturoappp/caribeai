import Link from "next/link";
import { company, content, getProjects, teamBackgroundCompanies } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export default function HomePage() {
  const lang = getLang();
  const t = content[lang];
  const projects = getProjects(lang);

  return (
    <>
      {/* HERO — con logo decorativo grande a la derecha (anchor de marca) */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 divider-grid opacity-30" aria-hidden />
        <div className="container-page relative py-28 lg:py-36">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
            {/* TEXTO — primero en HTML para que mobile vea headline primero */}
            <div className="lg:order-1">
              <p className="label-mono mb-6">{t.labels.caribeai}</p>
              <h1 className="heading-xl max-w-4xl">{t.tagline}</h1>
              <p className="mt-6 max-w-2xl text-lg text-fg-dim">{t.pitch}</p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/contacto" className="btn-primary">{t.btn.talk}</Link>
                <Link href="/servicios" className="btn-secondary">{t.btn.viewServices}</Link>
              </div>
            </div>

            {/* LOGO DECORATIVO — grande en todos los breakpoints, glow mas fuerte */}
            <div className="flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                {/* Halo cyan sutil detras del logo */}
                <div
                  className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-3xl"
                  aria-hidden
                />
                <img
                  src="/logo.svg"
                  alt=""
                  aria-hidden
                  className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 drop-shadow-[0_0_60px_rgba(6,182,212,0.35)]"
                />
              </div>
            </div>
          </div>

          {/* Strip de credenciales — gap responsivo */}
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3 sm:gap-x-8 md:gap-x-12">
            {t.credentials.map((c) => (
              <div key={c.label}>
                <p className="font-mono text-2xl md:text-3xl font-semibold text-accent">{c.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-fg-muted">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section className="container-page py-20">
        <p className="label-mono">{t.labels.portfolioPlain}</p>
        <h2 className="heading-lg mt-2 mb-10">{t.home.portfolioH2}</h2>
        <div className="grid gap-5 md:grid-cols-3">
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
                <div className="flex h-56 flex-col justify-between p-6">
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
      </section>

      {/* TRAYECTORIA DEL EQUIPO — version DRAMATICA (border cyan, gradient, boxes con accent permanente) */}
      <section className="relative border-y-2 border-accent/30 bg-gradient-to-b from-bg-surface via-bg-surface to-bg overflow-hidden">
        {/* Halo cyan ambient en esquinas */}
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <div className="container-page relative py-24 lg:py-32">
          <p className="label-mono">{t.labels.teamBackground}</p>
          <h2 className="heading-xl mt-3 max-w-3xl">{t.labels.teamBackgroundH2}</h2>
          <p className="mt-5 max-w-2xl text-lg text-fg-dim">{t.labels.teamBackgroundIntro}</p>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {teamBackgroundCompanies.map((name) => (
              <div
                key={name}
                className="group flex h-28 items-center justify-center rounded-lg border border-accent/40 bg-bg/60 px-4 text-center backdrop-blur-sm transition-all hover:border-accent hover:bg-bg-elevated hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
              >
                <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-wide text-fg leading-tight transition-colors group-hover:text-accent">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALOR — 3 props firmas (mas discreto ahora, no compite con Trayectoria) */}
      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {t.valueProps.map((v, i) => (
            <div key={v.title} className="border-l-2 border-accent pl-5">
              <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="heading-sm mt-2">{v.title}</h3>
              <p className="mt-2 text-sm text-fg-dim">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOSOTROS — teaser visionario con imagen */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="label-mono">{t.labels.about.replace("// ", "")}</p>
            <h2 className="heading-lg mt-2 max-w-xl">{t.home.aboutH2}</h2>
            <p className="mt-6 max-w-xl text-fg-dim text-lg leading-relaxed">{t.nosotros.visionP}</p>
            <div className="mt-8">
              <Link href="/nosotros" className="btn-secondary">
                {lang === "es" ? "Conocer más" : "Learn more"} →
              </Link>
            </div>
          </div>

          {/* IMAGEN — about.png */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <img
              src="/about.png"
              alt={lang === "es" ? "Espacio de trabajo Caribe AI" : "Caribe AI workspace"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS overview */}
      <section className="container-page py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="label-mono">{t.labels.services}</p>
            <h2 className="heading-lg mt-2">{t.home.servicesH2}</h2>
          </div>
          <Link href="/servicios" className="text-sm text-fg-dim hover:text-accent">
            {t.btn.viewDetail} →
          </Link>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {t.services.map((s) => (
            <Link
              key={s.id}
              href={`/servicios#${s.id}`}
              className="group grid items-center gap-4 py-5 transition-colors hover:bg-bg-surface md:grid-cols-[80px_1fr_auto] md:gap-8 md:py-7"
            >
              <span className="font-mono text-2xl text-accent">{s.number}</span>
              <div>
                <h3 className="heading-sm">{s.title}</h3>
                <p className="mt-1 text-sm text-fg-dim">{s.short}</p>
              </div>
              <span className="hidden text-fg-muted transition-all group-hover:translate-x-1 group-hover:text-accent md:inline">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="border-y border-border bg-bg-surface">
        <div className="container-page py-20">
          <p className="label-mono">{t.labels.methodology}</p>
          <h2 className="heading-lg mt-2 mb-10 max-w-2xl">{t.home.methodologyH2}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.methodology.map((m) => (
              <div key={m.step}>
                <p className="font-mono text-2xl font-semibold text-accent">{m.step}</p>
                <h3 className="heading-sm mt-2">{m.title}</h3>
                <p className="mt-2 text-sm text-fg-dim">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="container-page py-16">
        <p className="label-mono">{t.labels.sectors}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {t.sectors.map((s) => (
            <span key={s} className="rounded border border-border bg-bg-surface px-3 py-1.5 text-sm text-fg-dim">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CTA FINAL — con logo arriba para reforzar marca al cierre */}
      <section className="container-page pb-20 pt-8">
        <div className="rounded-lg border border-accent/40 bg-gradient-to-br from-bg-surface to-bg p-10 lg:p-14">
          <img
            src="/logo.svg"
            alt=""
            aria-hidden
            className="h-14 w-14 mb-6 drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          />
          <h2 className="heading-lg max-w-2xl">{t.home.ctaH2}</h2>
          <p className="mt-4 max-w-2xl text-fg-dim">{t.home.ctaP}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contacto" className="btn-primary">{t.btn.talk}</Link>
            <a href={`mailto:${company.email}`} className="btn-secondary">{company.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}

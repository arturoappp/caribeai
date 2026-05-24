import Link from "next/link";
import { company, content } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "Nosotros — Caribe AI",
  description: "Misión, visión y filosofía de Caribe AI Systems.",
};

export default function NosotrosPage() {
  const lang = getLang();
  const t = content[lang];

  return (
    <>
      {/* HEADER */}
      <section className="container-page border-b border-border py-20">
        <p className="label-mono">{t.labels.about}</p>
        <h1 className="heading-xl mt-3 max-w-3xl">{t.nosotros.h1}</h1>
        <p className="mt-6 max-w-2xl text-lg text-fg-dim">{t.nosotros.intro}</p>
      </section>

      {/* IMAGEN + QUIÉNES SOMOS */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* IMAGEN — about-portrait.png */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border">
            <img
              src="/about-portrait.png"
              alt={lang === "es" ? "Espacio de trabajo Caribe AI" : "Caribe AI workspace"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="label-mono">{t.labels.whoWeAre}</p>
            <p className="mt-4 text-lg text-fg-dim leading-relaxed">{t.nosotros.whoWeAreP}</p>
          </div>
        </div>
      </section>

      {/* FUNDADOR */}
      <section className="border-t border-border bg-bg-surface">
        <div className="container-page py-20">
          <p className="label-mono mb-10">// {t.nosotros.founderLabel}</p>
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16 lg:items-start">
            {/* Foto del fundador */}
            <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-lg border border-border bg-bg">
              <img
                src="/founder.png"
                alt={t.nosotros.founderName}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Bio */}
            <div className="max-w-2xl">
              <h2 className="heading-md">{t.nosotros.founderName}</h2>
              <p className="mt-2 font-mono text-sm text-accent">{t.nosotros.founderTitle}</p>
              <p className="mt-6 text-lg text-fg-dim leading-relaxed">{t.nosotros.founderBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="border-y border-border bg-bg-surface">
        <div className="container-page py-20">
          <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">01</p>
              <h2 className="heading-md mt-2">{t.labels.mission}</h2>
            </div>
            <p className="max-w-2xl text-xl text-fg leading-relaxed">{t.nosotros.missionP}</p>
          </div>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">02</p>
            <h2 className="heading-md mt-2">{t.labels.vision}</h2>
          </div>
          <p className="max-w-2xl text-xl text-fg leading-relaxed">{t.nosotros.visionP}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-12">
        <div className="rounded-lg border border-accent/40 bg-gradient-to-br from-bg-surface to-bg p-10 lg:p-14">
          <h2 className="heading-md max-w-2xl">{t.home.ctaH2}</h2>
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

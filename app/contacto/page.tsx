import { company, content } from "@/lib/data";
import { getLang } from "@/lib/i18n";

export const metadata = {
  title: "Contacto — Caribe AI",
  description: "Agendar reunión o conversar sobre su proyecto.",
};

export default function ContactoPage() {
  const lang = getLang();
  const t = content[lang];

  return (
    <section className="container-page py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="label-mono">{t.labels.contact}</p>
          <h1 className="heading-xl mt-3">{t.contacto.h1}</h1>
          <p className="mt-6 max-w-md text-lg text-fg-dim">{t.contacto.intro}</p>

          <div className="mt-10 space-y-6">
            <ContactRow label={t.contacto.rows.email}    value={company.email}        href={`mailto:${company.email}`} />
            <ContactRow label={t.contacto.rows.whatsapp} value={company.whatsapp}     href={company.whatsappLink} />
            <ContactRow label={t.contacto.rows.linkedin} value="linkedin.com/company/caribeai" href={company.linkedin} />
            <ContactRow label={t.contacto.rows.location} value={t.location} />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-bg-surface p-8">
          <h2 className="heading-md">{t.contacto.formH2}</h2>
          <p className="mt-2 text-sm text-fg-dim">{t.contacto.formIntro}</p>

          {/*
            Form sin backend.
            Cambia action= a Formspree, su propia API en goldsolido, o Web3Forms.
            Ejemplo: action="https://formspree.io/f/XXXXXXX"
          */}
          <form className="mt-6 space-y-4" method="POST" action="#">
            <Field label={t.contacto.fields.name}  name="name"  required />
            <Field label={t.contacto.fields.org}   name="org" />
            <Field label={t.contacto.fields.email} name="email" type="email" required />
            <Field label={t.contacto.fields.phone} name="phone" />
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-fg-dim">
                {t.contacto.fields.message} <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              {t.btn.send}
            </button>
            <p className="text-xs text-fg-muted">{t.contacto.privacy}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <p className="label-mono">{label}</p>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-lg text-fg hover:text-accent">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-lg">{value}</p>
      )}
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm text-fg-dim">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

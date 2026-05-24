# Caribe AI — sitio web corporativo (placeholder)

Sitio web para `caribeai.do` (nombre temporal, cambiar después).
Audiencia primaria: contactos militares/gobierno en RD (Rinaldi).
Tono: sobrio-militar + tech moderno.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (sin librerías UI externas — pure CSS controlable)
- Mobile-first, dark mode by default
- Server components donde sea posible (rápido, SEO-friendly)

## Estructura

```
app/
  page.tsx               # Home (hero + servicios destacados + casos + contacto)
  servicios/page.tsx     # Lista completa de servicios
  proyectos/page.tsx     # Portfolio detallado
  contacto/page.tsx      # Formulario + canales de contacto
  layout.tsx             # Layout raíz (header, footer, fuentes, metadata)
  globals.css            # Estilos base + utilidades

components/
  Header.tsx             # Nav superior sticky
  Footer.tsx             # Footer con links rápidos
  Hero.tsx               # Hero del home
  ServiceCard.tsx        # Tarjeta de servicio (reusable)
  ProjectCard.tsx        # Tarjeta de proyecto (reusable)

lib/
  data.ts                # Servicios + proyectos centralizados (editar aquí)
```

## Correr localmente

```bash
cd caribeai
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy gratis (Vercel)

```bash
npm i -g vercel
vercel
```

O alternativa: deploy en `goldsolido` con `npm run build && npm start` detrás de Cloudflare Tunnel.

## Qué editar antes de mandar a Rinaldi

1. **`lib/data.ts`** — ajustar servicios y proyectos. Métricas reales si las tienes
2. **`components/Footer.tsx`** — email, WhatsApp, LinkedIn reales
3. **`app/layout.tsx`** — metadata: title, description, OG image
4. **Imágenes** — reemplazar placeholders en `/public/` con tus screenshots/rack reales
5. **Nombre/dominio** — buscar `Caribe AI` y `caribeai.do` y reemplazar si decides otro

## TODO antes de enviar

- [ ] Logo (puede ser solo texto en mono + acento cyan al inicio)
- [ ] Foto profesional o foto de rack/GPUs
- [ ] Screenshots reales de movicora, donde.do, ebo, openclaw
- [ ] Cuenta empresarial WhatsApp Business + email contacto@caribeai.do
- [ ] LinkedIn empresa
- [ ] Dominio comprado y DNS apuntado

## Cuando llegue inglés

Crear `app/en/page.tsx` etc o usar `next-intl`. Por ahora español-only es lo correcto para Rinaldi.

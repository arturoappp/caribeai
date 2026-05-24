import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLang } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://caribeai.net"
  ),
  title: "Caribe AI — Sistemas críticos · IA soberana",
  description:
    "Casa de ingeniería de software. Construimos plataformas, agentes de IA y sistemas críticos para organizaciones que exigen control total sobre sus datos.",
  keywords: [
    "AI", "inteligencia artificial", "República Dominicana",
    "desarrollo software", "LLM on-premise", "backend",
    "FastAPI", "Spring Boot", "sistemas críticos",
  ],
  openGraph: {
    title: "Caribe AI",
    description: "Plataformas e IA de despliegue soberano. Sin nube extranjera. Sin intermediarios.",
    type: "website",
    locale: "es_DO",
    alternateLocale: ["en_US"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lang = getLang();
  return (
    <html lang={lang}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

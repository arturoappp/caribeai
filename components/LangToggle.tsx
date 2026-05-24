"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Lang } from "@/lib/i18n";

const COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Toggle ES/EN. Recibe el lang actual (server-side) por prop.
 * Setea cookie y llama a router.refresh() para que el server re-renderice.
 */
export default function LangToggle({ current }: { current: Lang }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (next: Lang) => {
    if (next === current) return;
    document.cookie = `${COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
    startTransition(() => router.refresh());
  };

  const base =
    "px-2 py-0.5 font-mono text-xs uppercase tracking-wider transition-colors";
  const active = "text-accent";
  const inactive = "text-fg-muted hover:text-fg";

  return (
    <div
      className="flex items-center divide-x divide-border border border-border rounded overflow-hidden"
      aria-label="Language selector"
      data-pending={pending ? "true" : undefined}
    >
      <button
        onClick={() => onClick("es")}
        className={`${base} ${current === "es" ? active : inactive}`}
        aria-pressed={current === "es"}
      >
        ES
      </button>
      <button
        onClick={() => onClick("en")}
        className={`${base} ${current === "en" ? active : inactive}`}
        aria-pressed={current === "en"}
      >
        EN
      </button>
    </div>
  );
}

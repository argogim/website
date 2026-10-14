"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap">
        <Image
          src="/assets/logo.webp"
          alt="ARGO-GIM · Inside insight"
          width={140}
          height={30}
          className="flogo"
          style={{ width: "auto", height: 30 }}
        />
        <p className="disclaimer">{t.footer.disclaimer}</p>
        <ol>
          {t.footer.sources.map((src, idx) => (
            <li key={idx}>{src}</li>
          ))}
        </ol>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
          <span>{t.footer.copyright}</span>
          <div style={{ display: "flex", gap: 18, fontSize: "0.82rem" }}>
            <Link href="/privacy" style={{ color: "var(--fg-2)", textDecoration: "underline" }}>
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/cookie-policy" style={{ color: "var(--fg-2)", textDecoration: "underline" }}>
              {t.footer.cookiePolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

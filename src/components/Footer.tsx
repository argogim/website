"use client";

import React from "react";
import Image from "next/image";
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
        <span>{t.footer.copyright}</span>
      </div>
    </footer>
  );
};

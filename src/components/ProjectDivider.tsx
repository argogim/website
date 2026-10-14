"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectDivider: React.FC = () => {
  const { lang, t } = useLanguage();
  const pdfFileName = `/assets/ARGO-GIM_executive-summary_${lang === "en" ? "EN" : "IT"}.pdf`;

  return (
    <section className="divider" id="progetto">
      <div className="wrap">
        <span className="eyebrow">{t.project.eyebrow}</span>
        <h2>{t.project.title}</h2>
        <div className="dl-row">
          <a
            className="btn btn-primary"
            href={pdfFileName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.project.openPdf}
          </a>
          <span className="src">{t.project.pdfDesc}</span>
        </div>
      </div>
    </section>
  );
};

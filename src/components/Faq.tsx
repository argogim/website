"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Faq: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="faq-sec" id="faq">
      <div className="wrap faq-grid">
        <div className="sec-head">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2>{t.faq.title}</h2>
          <p className="lead">{t.faq.lead}</p>
        </div>

        <div className="faq">
          {t.faq.items.map((item, idx) => (
            <details key={idx} open={item.defaultOpen}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

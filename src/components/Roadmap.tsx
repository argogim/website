"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="roadmap">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
            {t.roadmap.title}
          </h2>
          <p className="lead">{t.roadmap.lead}</p>
        </div>

        <ol className="road">
          {t.roadmap.steps.map((step, idx) => (
            <li key={idx} className={step.isCurrent ? "now" : ""}>
              <span className="when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

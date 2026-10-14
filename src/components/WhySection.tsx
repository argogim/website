"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const WhySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="why">
      <div className="wrap why-grid">
        {/* Card 1: Screening uptake */}
        <div className="num-card">
          <div className="big" style={{ color: "var(--azzurro)" }}>
            {t.why.stat1.value}
          </div>
          <p>{t.why.stat1.desc}</p>
          <div
            className="mini-bars"
            role="img"
            aria-label="Adesione 2024: Nord 46,8%, Centro 32,7%, Sud e Isole 21,1%; obiettivo 50%"
          >
            <div>
              <span>{t.why.stat1.north}</span>
              <i style={{ "--w": "46.8%" } as React.CSSProperties} />
              <span>46,8%</span>
            </div>
            <div>
              <span>{t.why.stat1.centre}</span>
              <i style={{ "--w": "32.7%" } as React.CSSProperties} />
              <span>32,7%</span>
            </div>
            <div>
              <span>{t.why.stat1.south}</span>
              <i
                style={
                  {
                    "--w": "21.1%",
                    "--c": "var(--coral)",
                  } as React.CSSProperties
                }
              />
              <span>21,1%</span>
            </div>
          </div>
          <span className="src">{t.why.stat1.source}</span>
        </div>

        {/* Card 2: Survival Rate */}
        <div className="num-card">
          <div className="big">
            <span style={{ color: "var(--azzurro)" }}>91%</span>
            <span style={{ color: "var(--muted)", fontWeight: 300 }}> / </span>
            <span style={{ color: "var(--coral)" }}>13%</span>
          </div>
          <p>{t.why.stat2.desc}</p>
          <span className="src">{t.why.stat2.source}</span>
        </div>
      </div>
    </section>
  );
};

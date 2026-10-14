"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Waitlist: React.FC = () => {
  const { t } = useLanguage();
  // If a Google Form link is configured, put it here:
  const WAITLIST_URL = "";

  return (
    <section className="waitlist" id="lista">
      <div className="wrap">
        <div className="wl">
          <div>
            <span className="eyebrow">{t.waitlist.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{t.waitlist.title}</h2>
            <p className="lead">{t.waitlist.lead}</p>
          </div>
          <div className="wl-act">
            <a
              className="btn btn-primary"
              href={WAITLIST_URL || "#contatti"}
              target={WAITLIST_URL ? "_blank" : undefined}
              rel={WAITLIST_URL ? "noopener noreferrer" : undefined}
            >
              {t.waitlist.cta}
            </a>
            <span className="src">{t.waitlist.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

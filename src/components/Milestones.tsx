"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Trophy, Award, Sparkles } from "lucide-react";

export const Milestones: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles size={22} color="var(--azzurro)" />;
      case 1:
        return <Award size={22} color="var(--violet-soft)" />;
      case 2:
      default:
        return <Trophy size={22} color="#FFD700" />;
    }
  };

  return (
    <section className="milestones-sec" id="percorso">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="eyebrow">{t.milestones.eyebrow}</span>
          <h2>{t.milestones.title}</h2>
          <p className="lead">{t.milestones.lead}</p>
        </div>

        <div className="milestones-grid">
          {t.milestones.items.map((item, idx) => (
            <div key={idx} className="milestone-card">
              <div className="milestone-top">
                <div className="milestone-icon-wrap">
                  {getIcon(idx)}
                </div>
                <div className="milestone-badge">
                  {item.badge}
                </div>
              </div>
              <span className="milestone-step">Fase {item.step}</span>
              <h3 className="milestone-title">{item.title}</h3>
              <p className="milestone-desc">{item.desc}</p>
              {item.linkUrl && item.linkText && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="milestone-link"
                >
                  <span>{item.linkText}</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Radio, Layers, Activity, ChevronRight, Sparkles } from "lucide-react";

export const AcronymSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(2); // Default to Gradient Overlay as the key innovation

  const icons = [
    <Cpu key="a" size={24} className="acronym-icon" />,
    <Radio key="r" size={24} className="acronym-icon" />,
    <Layers key="g" size={24} className="acronym-icon" />,
    <Activity key="gim" size={24} className="acronym-icon" />,
  ];

  const activeItem = t.acronym.items[activeIdx] || t.acronym.items[0];

  return (
    <section className="acronym-sec" id="acronimo">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">
            <Sparkles size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />
            {t.acronym.eyebrow}
          </span>
          <h2>{t.acronym.title}</h2>
          <div className="acronym-fullname-badge">
            <span>{t.acronym.fullName}</span>
          </div>
          <p className="lead">{t.acronym.lead}</p>
        </div>

        {/* 4 Interactive Selector Cards */}
        <div className="acronym-grid">
          {t.acronym.items.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                className={`acronym-card ${isActive ? "active" : ""}`}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                aria-selected={isActive}
              >
                <div className="card-top">
                  <div className="letter-badge">{item.letter}</div>
                  <div className="icon-wrap">{icons[idx]}</div>
                </div>

                <div className="card-body">
                  <h3 className="word-title">{item.word}</h3>
                  <span className="meaning-sub">{item.meaning}</span>
                  <p className="short-desc">{item.desc}</p>
                </div>

                <div className="card-footer">
                  <span className="tag-pill">{item.tag}</span>
                  <span className="view-more">
                    <ChevronRight size={16} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Spotlight Box */}
        <div className="acronym-spotlight">
          <div className="spotlight-header">
            <div className="spotlight-pill">
              <span className="badge-highlight">{activeItem.letter}</span>
              <strong>{activeItem.word}</strong>
              <span className="sep">·</span>
              <span className="meaning">{activeItem.meaning}</span>
            </div>
            <span className="tag-glow">{activeItem.tag}</span>
          </div>

          <div className="spotlight-content">
            <div className="spotlight-quote">
              <p>{activeItem.desc}</p>
            </div>
            <div className="spotlight-deepdive">
              <h4>Razionale Clinico & Ingegneristico</h4>
              <p>{activeItem.deepDive}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

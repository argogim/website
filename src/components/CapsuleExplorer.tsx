"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const HOTSPOT_COORDS = [
  { left: "14%", top: "50%", dx: false },
  { left: "44%", top: "60%", dx: false },
  { left: "58.5%", top: "52%", dx: false },
  { left: "74%", top: "52%", dx: false },
  { left: "66%", top: "18%", dx: false },
  { left: "29%", top: "27%", dx: true },
];

export const CapsuleExplorer: React.FC = () => {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const partRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-k"));
            if (!isNaN(idx)) {
              setActiveIdx(idx);
            }
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    partRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    const target = partRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section className="explorer" id="capsula">
      <div className="wrap">
        <div className="explorer-head">
          <span className="eyebrow">{t.explorer.eyebrow}</span>
          <h2>{t.explorer.title}</h2>
          <div className="dims">
            <span>
              <b>{t.explorer.dimLength.value}</b>
              {t.explorer.dimLength.label}
            </span>
            <span>
              <b>{t.explorer.dimDiameter.value}</b>
              {t.explorer.dimDiameter.label}
            </span>
            <span>
              <b>{t.explorer.dimUse.value}</b>
              {t.explorer.dimUse.label}
            </span>
          </div>
        </div>

        <div className="explorer-body">
          <div className="stage">
            <div className="cap" id="cap">
              <Image
                src="/assets/capsule-cut.webp"
                alt="Vista interna della capsula ARGO-GIM"
                width={800}
                height={400}
                style={{ width: "100%", height: "auto" }}
                priority
              />
              {HOTSPOT_COORDS.map((coord, idx) => {
                const isDx = coord.dx;
                const isOn = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    aria-label={t.explorer.parts[idx]?.title || `Componente ${idx + 1}`}
                    className={`hot ${isDx ? "dx" : ""} ${isOn ? "on" : ""}`}
                    style={{ left: coord.left, top: coord.top }}
                    onClick={() => handleSelect(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            <p className="src cap-note">{t.explorer.renderNote}</p>
          </div>

          <ol className="parts" id="parts">
            {t.explorer.parts.map((part, idx) => {
              const isDx = part.isDx;
              const isOn = activeIdx === idx;
              return (
                <li
                  key={idx}
                  ref={(el) => {
                    partRefs.current[idx] = el;
                  }}
                  data-k={idx}
                  className={`part ${isDx ? "dx" : ""} ${isOn ? "on" : ""}`}
                  onClick={() => handleSelect(idx)}
                >
                  <span className="num">{part.num}</span>
                  <div>
                    <h3>
                      {part.title}
                      {part.tag && <span className="tag">{part.tag}</span>}
                    </h3>
                    <p>{part.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

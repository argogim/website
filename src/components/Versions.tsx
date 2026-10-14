"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Versions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="versions-sec" id="versioni">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{t.versions.eyebrow}</span>
          <h2>{t.versions.title}</h2>
        </div>

        <div className="versions">
          {/* Lite */}
          <article className="ver lite">
            <Image
              src="/assets/logo-lite.webp"
              alt="ARGO-GIM Lite"
              width={160}
              height={34}
              className="vlogo"
              style={{ width: "auto", height: 34 }}
            />
            <span className="who">{t.versions.lite.who}</span>
            <h3>{t.versions.lite.title}</h3>
            <p className="claim">{t.versions.lite.claim}</p>
            <ul>
              {t.versions.lite.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Dx */}
          <article className="ver dx">
            <Image
              src="/assets/logo-dx.webp"
              alt="ARGO-GIM Dx"
              width={160}
              height={34}
              className="vlogo"
              style={{ width: "auto", height: 34 }}
            />
            <span className="who">{t.versions.dx.who}</span>
            <h3>{t.versions.dx.title}</h3>
            <p className="claim">{t.versions.dx.claim}</p>
            <ul>
              {t.versions.dx.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

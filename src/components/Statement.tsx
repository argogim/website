"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Statement: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="statement">
      <div className="wrap statement-grid">
        <div>
          <h2>
            <span className="dim">{t.statement.headingDim} </span>
            <b>{t.statement.headingBold}</b>
          </h2>
          <p className="lead">{t.statement.lead}</p>
        </div>
        <div className="photo">
          <Image
            src="/assets/hand.webp"
            alt="La capsula ARGO-GIM tenuta tra due dita"
            width={600}
            height={750}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

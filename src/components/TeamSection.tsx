"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const TeamSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="people" id="team">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{t.team.eyebrow}</span>
          <h2>{t.team.title}</h2>
        </div>

        <div className="team">
          {t.team.members.map((person, idx) => (
            <div key={idx} className="person">
              <div aria-hidden="true" className="avatar">
                {person.initials}
              </div>
              <div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="partner">
          <Image
            src="/assets/biotecnomed.webp"
            alt="Biotecnomed, Polo di Innovazione Tecnologie della Salute"
            width={120}
            height={52}
            style={{ width: "auto", height: 52 }}
          />
          <span>{t.team.partnerTitle}</span>
        </div>
      </div>
    </section>
  );
};

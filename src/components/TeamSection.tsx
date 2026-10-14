"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Linkedin, ExternalLink } from "lucide-react";

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
                <div className="person-header">
                  <h3>{person.name}</h3>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link"
                      aria-label={`Profilo LinkedIn di ${person.name}`}
                      title={`LinkedIn: ${person.name}`}
                    >
                      <Linkedin size={15} />
                    </a>
                  )}
                </div>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={t.team.partnerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="partner"
          title="Biotecnomed - Polo di Innovazione Tecnologie della Salute"
        >
          <Image
            src="/assets/biotecnomed.webp"
            alt="Biotecnomed, Polo di Innovazione Tecnologie della Salute"
            width={120}
            height={52}
            style={{ width: "auto", height: 52 }}
          />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {t.team.partnerTitle}
            <ExternalLink size={13} style={{ opacity: 0.6 }} />
          </span>
        </a>
      </div>
    </section>
  );
};

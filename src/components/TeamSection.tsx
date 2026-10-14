"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Linkedin } from "lucide-react";

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
                  <div>
                    <h3>{person.name}</h3>
                    <span style={{ fontSize: "0.8rem", color: "var(--azzurro)", fontFamily: "var(--mono)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {t.team.subtitleRole}
                    </span>
                  </div>
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
                <p style={{ marginTop: 6 }}>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(t.contact.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <section className="contact" id="contatti">
      <div className="wrap">
        <div>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 style={{ marginTop: 16 }}>{t.contact.title}</h2>
          <p className="lead">{t.contact.lead}</p>
          <div className="reach">
            <span className="addr" id="email">
              {t.contact.email}
            </span>
            <button
              className="btn btn-ghost"
              type="button"
              id="copy"
              onClick={handleCopy}
            >
              {copied ? t.contact.copiedBtn : t.contact.copyBtn}
            </button>
          </div>
        </div>

        <div className="seek">
          {t.contact.areas.map((area, idx) => (
            <div key={idx}>
              <span>{area.num}</span>
              {area.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

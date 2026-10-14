"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav ${isSolid ? "solid" : ""}`} id="nav">
      <div className="wrap">
        <Link href="#top" className="brand" aria-label="ARGO-GIM, inizio pagina">
          <Image
            src="/assets/logo.webp"
            alt="ARGO-GIM"
            width={120}
            height={26}
            priority
            style={{ width: "auto", height: 26 }}
          />
        </Link>

        <nav aria-label="Sezioni">
          <a href="#capsula">{t.nav.capsule}</a>
          <a href="#innovazione">{t.nav.comparison}</a>
          <a href="#come-si-usa">{t.nav.routine}</a>
          <a href="#percorso">{t.nav.milestones}</a>
          <a href="#versioni">{t.nav.versions}</a>
          <a href="#progetto">{t.nav.project}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Lingua">
            <button
              type="button"
              aria-pressed={lang === "it"}
              onClick={() => setLang("it")}
            >
              IT
            </button>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <a className="btn btn-primary" href="#lista">
            {t.nav.waitlist}
          </a>
        </div>
      </div>
    </header>
  );
};

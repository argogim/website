"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (videoRef.current) {
        videoRef.current.removeAttribute("autoplay");
        videoRef.current.pause();
      }
    }
  }, []);

  return (
    <section className="hero">
      <img
        src="/assets/scan-poster.jpg"
        alt=""
        aria-hidden="true"
        className="bg"
      />
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        className="bg"
        loop
        muted
        playsInline
        poster="/assets/scan-poster.jpg"
        preload="auto"
      >
        <source src="/assets/scan.mp4" type="video/mp4" />
      </video>

      <div className="wrap">
        <Image
          src="/assets/logo.webp"
          alt="ARGO-GIM · Inside insight"
          width={380}
          height={82}
          className="hero-logo"
          priority
        />
        <div className="hero-acronym-tag">
          <strong>ARGO-GIM</strong>
          <span>·</span>
          <span>Autonomous Real-time Gradient Overlay — Gastro Intestinal Monitor</span>
        </div>
        <h1>
          {t.hero.titlePrefix}
          <span>{t.hero.titleHighlight}</span>
        </h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="ctas">
          <a className="btn btn-primary" href="#capsula">
            {t.hero.ctaPrimary}
          </a>
          <a className="btn btn-ghost" href="#progetto">
            {t.hero.ctaGhost}
          </a>
        </div>
        <span className="scroll-cue">{t.hero.scrollCue}</span>
      </div>
    </section>
  );
};

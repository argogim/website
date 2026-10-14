"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const CapsuleFilm: React.FC = () => {
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
    <section className="film">
      <div className="wrap">
        <div className="film-frame">
          <video
            ref={videoRef}
            aria-label="Animazione della capsula ARGO-GIM che si apre e mostra i componenti interni"
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/capsule-poster.jpg"
            preload="metadata"
          >
            <source src="/assets/capsule.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="film-cap">
          <p>{t.film.caption}</p>
          <span className="src">{t.film.badge}</span>
        </div>
      </div>
    </section>
  );
};

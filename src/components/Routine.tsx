"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export const Routine: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="routine" id="come-si-usa">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">{t.routine.eyebrow}</span>
          <h2>{t.routine.title}</h2>
        </div>

        <div className="moments">
          {/* Moment 1 */}
          <article className="moment">
            <div className="vis">
              <Image
                src="/assets/hand.webp"
                alt="Capsula tra le dita"
                fill
                className="cover"
                style={{ objectPosition: "62% 50%" }}
              />
            </div>
            <span className="when">{t.routine.moments[0].when}</span>
            <h3>{t.routine.moments[0].title}</h3>
            <p>{t.routine.moments[0].desc}</p>
          </article>

          {/* Moment 2 */}
          <article className="moment">
            <div className="vis">
              <Image
                src="/assets/vest.webp"
                alt="Gilet ARGO-GIM"
                fill
                className="contain"
              />
            </div>
            <span className="when">{t.routine.moments[1].when}</span>
            <h3>{t.routine.moments[1].title}</h3>
            <p>{t.routine.moments[1].desc}</p>
          </article>

          {/* Moment 3 */}
          <article className="moment">
            <div className="vis">
              <Image
                src="/assets/receiver.webp"
                alt="Ricevitore ARGO-GIM"
                fill
                className="contain"
                style={{ maxHeight: "82%" }}
              />
            </div>
            <span className="when">{t.routine.moments[2].when}</span>
            <h3>{t.routine.moments[2].title}</h3>
            <p>{t.routine.moments[2].desc}</p>
          </article>

          {/* Moment 4 - Phone App Mockup */}
          <article className="moment">
            <div className="vis" aria-label="Esempio illustrativo della schermata dell'app">
              <div aria-hidden="true" className="phone">
                <div className="ph-top">
                  <Image
                    src="/assets/logo.webp"
                    alt=""
                    width={40}
                    height={10}
                    style={{ height: 10, width: "auto" }}
                  />
                  <span>Report</span>
                </div>
                <div className="ring">
                  <svg viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      r="42"
                      stroke="#22336B"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      r="42"
                      stroke="url(#rg)"
                      strokeDasharray="216 264"
                      strokeLinecap="round"
                      strokeWidth="8"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="rg" x1="0" x2="1">
                        <stop offset="0" stopColor="#3D8BFF" />
                        <stop offset="1" stopColor="#8B6CFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="val">
                    82
                    <small>{t.routine.giIndexLabel}</small>
                  </div>
                </div>
                <div className="spark">
                  <svg viewBox="0 0 120 40">
                    <path
                      d="M2 30 L26 26 L50 28 L74 18 L98 16 L118 12"
                      fill="none"
                      stroke="#3D8BFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    <circle cx="118" cy="12" fill="#EEF2FB" r="3.5" />
                  </svg>
                </div>
                <div className="ph-row">
                  <span>pH ok</span>
                  <span>Hb ok</span>
                  <span>ROS ok</span>
                </div>
              </div>
              <span className="mock-tag">{t.routine.appExample}</span>
            </div>
            <span className="when">{t.routine.moments[3].when}</span>
            <h3>{t.routine.moments[3].title}</h3>
            <p>{t.routine.moments[3].desc}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

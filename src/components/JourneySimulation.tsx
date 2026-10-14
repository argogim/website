"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SegmentInfo {
  at: number;
  it: string;
  en: string;
  ph: number;
}

const SEGMENTS: SegmentInfo[] = [
  { at: 0, it: "Cieco", en: "Caecum", ph: 5.7 },
  { at: 0.07, it: "Colon ascendente", en: "Ascending colon", ph: 6.0 },
  { at: 0.27, it: "Colon trasverso", en: "Transverse colon", ph: 6.3 },
  { at: 0.58, it: "Colon discendente", en: "Descending colon", ph: 6.6 },
  { at: 0.8, it: "Sigma", en: "Sigmoid colon", ph: 6.7 },
  { at: 0.93, it: "Retto", en: "Rectum", ph: 6.9 },
];

export const JourneySimulation: React.FC = () => {
  const { lang, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const doneRef = useRef<SVGPathElement>(null);
  const capRef = useRef<SVGGElement>(null);

  const [activeSegIdx, setActiveSegIdx] = useState(0);
  const [segName, setSegName] = useState("Cieco");
  const [elapsedText, setElapsedText] = useState("00:00 h");
  const [progressWidth, setProgressWidth] = useState("0%");
  const [phDisplay, setPhDisplay] = useState("5,7");
  const [tempDisplay, setTempDisplay] = useState("37,1");
  const [phLineD, setPhLineD] = useState("M0 60");
  const [framesText, setFramesText] = useState("");

  const formatNumber = useCallback(
    (num: number, decimals: number) => {
      const s = num.toFixed(decimals);
      return lang === "en" ? s : s.replace(".", ",");
    },
    [lang]
  );

  const getSegIndex = (f: number) => {
    let idx = 0;
    for (let k = 0; k < SEGMENTS.length; k++) {
      if (f >= SEGMENTS[k].at) idx = k;
    }
    return idx;
  };

  const getPhAt = (f: number) => {
    const idx = getSegIndex(f);
    const a = SEGMENTS[idx];
    const b = SEGMENTS[Math.min(idx + 1, SEGMENTS.length - 1)];
    const span = b.at - a.at || 1;
    const progress = Math.min(1, (f - a.at) / span);
    return a.ph + (b.ph - a.ph) * progress + 0.06 * Math.sin(f * 40);
  };

  useEffect(() => {
    const sec = sectionRef.current;
    const path = pathRef.current;
    const done = doneRef.current;
    const cap = capRef.current;

    if (!sec || !path || !done || !cap) return;

    const totalLen = path.getTotalLength();
    done.style.strokeDasharray = `${totalLen}`;
    done.style.strokeDashoffset = `${totalLen}`;

    let lastF = -1;
    let ticking = false;

    const render = () => {
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const f = Math.min(1, Math.max(0, -rect.top / (rect.height - vh)));

      if (Math.abs(f - lastF) < 0.001 && lastF !== -1) return;
      lastF = f;

      const p = path.getPointAtLength(f * totalLen);
      const p2 = path.getPointAtLength(Math.min(totalLen, f * totalLen + 1));
      const ang = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI;

      cap.setAttribute(
        "transform",
        `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${ang.toFixed(1)})`
      );
      done.style.strokeDashoffset = (totalLen * (1 - f)).toFixed(1);

      const i = getSegIndex(f);
      setActiveSegIdx(i);
      setSegName(SEGMENTS[i][lang]);

      const totalH = 24;
      const h = f * totalH;
      const hh = Math.floor(h);
      const mm = Math.floor((h - hh) * 60);
      const timeStr = `${lang === "en" ? "Elapsed " : "Trascorse "}${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")} h`;
      setElapsedText(timeStr);

      setProgressWidth(`${(f * 100).toFixed(1)}%`);
      setPhDisplay(formatNumber(getPhAt(f), 1));
      setTempDisplay(
        formatNumber(
          37.05 + 0.15 * Math.sin(f * 9) + 0.05 * Math.cos(f * 31),
          1
        )
      );

      const pts: string[] = [];
      const N = 60;
      for (let k = 0; k <= N; k++) {
        const g = k / N;
        if (g > f) break;
        const y = 60 - ((getPhAt(g) - 5.5) / (7.0 - 5.5)) * 50;
        pts.push(`${(g * 300).toFixed(1)} ${y.toFixed(1)}`);
      }
      setPhLineD(pts.length ? `M${pts.join(" L")}` : "M0 60");

      const seen = Math.round(f * 48000);
      const sent = Math.round(seen * 0.17);
      const nf = (n: number) =>
        n.toLocaleString(lang === "en" ? "en-GB" : "it-IT");
      setFramesText(t.journey.framesTemplate(nf(seen), nf(sent)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          render();
        });
      }
    };

    const onResize = () => {
      render();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    render();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [lang, t, formatNumber]);

  return (
    <section className="journey" id="viaggio" ref={sectionRef}>
      <div className="journey-stage">
        <div className="wrap">
          <div className="journey-head">
            <span className="sim-badge">
              <i />
              <span>{t.journey.simBadge}</span>
            </span>
            <h2>{t.journey.title}</h2>
            <p className="lead">{t.journey.lead}</p>
          </div>

          <div className="journey-grid">
            <div className="colon">
              <svg
                aria-label="Schema del colon con la posizione della capsula"
                role="img"
                viewBox="0 0 520 440"
              >
                <defs>
                  <linearGradient id="jg" x1="0" x2="1" y1="1" y2="0">
                    <stop offset="0" stopColor="#3D8BFF" />
                    <stop offset="1" stopColor="#8B6CFF" />
                  </linearGradient>
                </defs>
                <path
                  ref={pathRef}
                  id="colon-path"
                  d="M120 380 V140 Q120 80 180 80 H340 Q400 80 400 140 V300 Q400 350 350 360 Q300 370 300 400 V420"
                  fill="none"
                  stroke="#1B2A5C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="54"
                />
                <path
                  d="M120 380 V140 Q120 80 180 80 H340 Q400 80 400 140 V300 Q400 350 350 360 Q300 370 300 400 V420"
                  fill="none"
                  stroke="#22336B"
                  strokeDasharray="3 7"
                  strokeWidth="2"
                />
                <path
                  ref={doneRef}
                  id="colon-done"
                  d="M120 380 V140 Q120 80 180 80 H340 Q400 80 400 140 V300 Q400 350 350 360 Q300 370 300 400 V420"
                  fill="none"
                  stroke="url(#jg)"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <g ref={capRef} id="jcap">
                  <circle fill="rgba(61,139,255,.25)" r="16" />
                  <rect
                    fill="#EEF2FB"
                    height="12"
                    rx="6"
                    width="26"
                    x="-13"
                    y="-6"
                  />
                  <circle cx="-7" cy="0" fill="#0066CC" r="3" />
                </g>
                <text
                  className={`seg-label ${activeSegIdx === 0 ? "on" : ""}`}
                  x="40"
                  y="392"
                >
                  {t.journey.labels[0]}
                </text>
                <text
                  className={`seg-label ${activeSegIdx === 1 ? "on" : ""}`}
                  x="20"
                  y="240"
                >
                  {t.journey.labels[1]}
                </text>
                <text
                  className={`seg-label ${activeSegIdx === 2 ? "on" : ""}`}
                  textAnchor="middle"
                  x="260"
                  y="40"
                >
                  {t.journey.labels[2]}
                </text>
                <text
                  className={`seg-label ${activeSegIdx === 3 ? "on" : ""}`}
                  x="438"
                  y="230"
                >
                  {t.journey.labels[3]}
                </text>
                <text
                  className={`seg-label ${activeSegIdx === 4 ? "on" : ""}`}
                  x="372"
                  y="398"
                >
                  {t.journey.labels[4]}
                </text>
                <text
                  className={`seg-label ${activeSegIdx === 5 ? "on" : ""}`}
                  x="318"
                  y="432"
                >
                  {t.journey.labels[5]}
                </text>
              </svg>
            </div>

            <div aria-live="polite" className="panel">
              <div className="where">
                <b>{segName}</b>
                <span>{elapsedText}</span>
              </div>
              <div className="progress">
                <i style={{ width: progressWidth }} />
              </div>
              <div className="readings">
                <div className="rd">
                  <span className="k">{t.journey.readings.ph}</span>
                  <span className="v">{phDisplay}</span>
                </div>
                <div className="rd">
                  <span className="k">{t.journey.readings.temperature}</span>
                  <span className="v">
                    {tempDisplay}
                    <small>°C</small>
                  </span>
                </div>
                <div className="rd">
                  <span className="k">{t.journey.readings.hb}</span>
                  <span className="v ok">{t.journey.readings.normal}</span>
                </div>
                <div className="rd">
                  <span className="k">{t.journey.readings.ros}</span>
                  <span className="v ok">{t.journey.readings.normal}</span>
                </div>
              </div>
              <div className="ph-chart">
                <span className="k">{t.journey.readings.phChartTitle}</span>
                <svg preserveAspectRatio="none" viewBox="0 0 300 70">
                  <path
                    d="M0 60 H300 M0 35 H300 M0 10 H300"
                    stroke="#22336B"
                    strokeWidth="1"
                  />
                  <path
                    d={phLineD}
                    fill="none"
                    id="j-phline"
                    stroke="#3D8BFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <p className="frames" dangerouslySetInnerHTML={{ __html: framesText }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

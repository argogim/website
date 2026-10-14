"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Check, X } from "lucide-react";

export const Comparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="comparison-sec" id="innovazione">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="eyebrow">{t.comparison.eyebrow}</span>
          <h2>{t.comparison.title}</h2>
          <p className="lead">{t.comparison.lead}</p>
        </div>

        <div className="table-responsive">
          <table className="comp-table">
            <thead>
              <tr>
                <th style={{ width: "26%" }}>{t.comparison.headers.feature}</th>
                <th style={{ width: "37%" }} className="th-trad">{t.comparison.headers.traditional}</th>
                <th style={{ width: "37%" }} className="th-argo">{t.comparison.headers.argo}</th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, idx) => (
                <tr key={idx} className={row.highlight ? "row-highlight" : ""}>
                  <td className="td-feature">
                    <strong>{row.feature}</strong>
                  </td>
                  <td className="td-trad">
                    <span className="icon-badge icon-badge-x">
                      <X size={14} />
                    </span>
                    <span>{row.traditional}</span>
                  </td>
                  <td className="td-argo">
                    <span className="icon-badge icon-badge-check">
                      <Check size={14} />
                    </span>
                    <span>{row.argo}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Check,
  X,
  Sparkles,
  Layers,
  Table as TableIcon,
  LayoutGrid,
  Info,
  ChevronDown,
  ChevronUp,
  Activity,
  Heart,
  Cpu,
} from "lucide-react";

export const Comparison: React.FC = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>("prep");
  const [activeCardId, setActiveCardId] = useState<string>("prep");

  const filterOptions = [
    { id: "all", label: t.comparison.filterAll },
    { id: "comfort", label: t.comparison.filterComfort },
    { id: "sensors", label: t.comparison.filterSensors },
    { id: "ai", label: t.comparison.filterAi },
  ];

  const filteredRows = t.comparison.rows.filter((row) => {
    if (selectedFilter === "all") return true;
    return row.category === selectedFilter;
  });

  const activeCardRow =
    t.comparison.rows.find((r) => r.id === activeCardId) ||
    filteredRows[0] ||
    t.comparison.rows[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "comfort":
        return <Heart size={15} />;
      case "sensors":
        return <Activity size={15} />;
      case "ai":
        return <Cpu size={15} />;
      default:
        return <Layers size={15} />;
    }
  };

  return (
    <section className="comparison-sec" id="innovazione">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-head">
          <span className="eyebrow">
            <Sparkles size={14} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }} />
            {t.comparison.eyebrow}
          </span>
          <h2>{t.comparison.title}</h2>
          <p className="lead">{t.comparison.lead}</p>
        </div>

        {/* Highlight Comparison Stats */}
        <div className="comp-stats-grid">
          <div className="comp-stat-card">
            <div className="comp-stat-head">
              <span className="stat-label">{t.comparison.stats.invasiveness.label}</span>
            </div>
            <div className="stat-duel">
              <div className="duel-side duel-trad">
                <span className="duel-device">PillCam™</span>
                <span className="duel-val">{t.comparison.stats.invasiveness.trad}</span>
              </div>
              <div className="duel-divider">vs</div>
              <div className="duel-side duel-argo">
                <span className="duel-device">ARGO-GIM</span>
                <span className="duel-val">{t.comparison.stats.invasiveness.argo}</span>
              </div>
            </div>
          </div>

          <div className="comp-stat-card">
            <div className="comp-stat-head">
              <span className="stat-label">{t.comparison.stats.modalities.label}</span>
            </div>
            <div className="stat-duel">
              <div className="duel-side duel-trad">
                <span className="duel-device">PillCam™</span>
                <span className="duel-val">{t.comparison.stats.modalities.trad}</span>
              </div>
              <div className="duel-divider">vs</div>
              <div className="duel-side duel-argo">
                <span className="duel-device">ARGO-GIM</span>
                <span className="duel-val">{t.comparison.stats.modalities.argo}</span>
              </div>
            </div>
          </div>

          <div className="comp-stat-card">
            <div className="comp-stat-head">
              <span className="stat-label">{t.comparison.stats.frameAnalysis.label}</span>
            </div>
            <div className="stat-duel">
              <div className="duel-side duel-trad">
                <span className="duel-device">PillCam™</span>
                <span className="duel-val">{t.comparison.stats.frameAnalysis.trad}</span>
              </div>
              <div className="duel-divider">vs</div>
              <div className="duel-side duel-argo">
                <span className="duel-device">ARGO-GIM</span>
                <span className="duel-val">{t.comparison.stats.frameAnalysis.argo}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls Bar: View Toggle + Filters */}
        <div className="comp-controls-bar">
          <div className="filter-chips">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`chip-btn ${selectedFilter === f.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedFilter(f.id);
                  const firstMatch = t.comparison.rows.find(
                    (r) => f.id === "all" || r.category === f.id
                  );
                  if (firstMatch) setActiveCardId(firstMatch.id);
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="view-toggle">
            <button
              type="button"
              className={`toggle-btn ${viewMode === "cards" ? "active" : ""}`}
              onClick={() => setViewMode("cards")}
              title="Vista interattiva a schede"
            >
              <LayoutGrid size={15} />
              <span>{t.comparison.viewCardsLabel}</span>
            </button>
            <button
              type="button"
              className={`toggle-btn ${viewMode === "table" ? "active" : ""}`}
              onClick={() => setViewMode("table")}
              title="Vista matrice tecnica"
            >
              <TableIcon size={15} />
              <span>{t.comparison.viewTableLabel}</span>
            </button>
          </div>
        </div>

        {/* View 1: Interactive Duel Cards */}
        {viewMode === "cards" && (
          <div className="comp-duel-container">
            {/* Feature Selector Tabs */}
            <div className="feature-nav-tabs">
              {filteredRows.map((row) => {
                const isSelected = activeCardRow.id === row.id;
                return (
                  <button
                    key={row.id}
                    type="button"
                    className={`feature-tab ${isSelected ? "selected" : ""}`}
                    onClick={() => setActiveCardId(row.id)}
                  >
                    <span className="feature-icon">{getCategoryIcon(row.category)}</span>
                    <span className="feature-title">{row.feature}</span>
                    {row.highlight && <span className="key-dot" title="Caratteristica cardine" />}
                  </button>
                );
              })}
            </div>

            {/* Duel Stage Card */}
            <div className="duel-stage">
              <div className="duel-header-bar">
                <div className="feature-badge-row">
                  <span className="category-pill">
                    {getCategoryIcon(activeCardRow.category)}
                    <span>{activeCardRow.feature}</span>
                  </span>
                  {activeCardRow.highlight && (
                    <span className="pill-highlight">Salto Generazionale</span>
                  )}
                </div>
              </div>

              <div className="duel-cards-split">
                {/* Traditional Capsule Card (PillCam™) */}
                <div className="duel-card duel-card-trad">
                  <div className="card-top">
                    <span className="device-tag trad-tag">
                      <X size={13} />
                      {t.comparison.badgePillcam}
                    </span>
                    <span className="status-badge-crit">{activeCardRow.traditionalBadge}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-desc">{activeCardRow.traditional}</p>
                  </div>
                  <div className="card-bottom">
                    <span className="bottom-note">Approccio convenzionale con vincoli procedurali</span>
                  </div>
                </div>

                {/* ARGO-GIM Breakthrough Card */}
                <div className="duel-card duel-card-argo">
                  <div className="card-top">
                    <span className="device-tag argo-tag">
                      <Check size={13} />
                      {t.comparison.badgeArgo}
                    </span>
                    <span className="status-badge-adv">{activeCardRow.argoBadge}</span>
                  </div>
                  <div className="card-body">
                    <p className="card-desc">{activeCardRow.argo}</p>
                  </div>
                  <div className="card-bottom">
                    <span className="bottom-note">Progettato per superare le barriere di accesso</span>
                  </div>
                </div>
              </div>

              {/* Expandable Technical Rationale */}
              <div className="deepdive-box">
                <div className="deepdive-header">
                  <Info size={16} className="info-icon" />
                  <strong>Perché fa la differenza clinicamente:</strong>
                </div>
                <p className="deepdive-text">{activeCardRow.deepDive}</p>
              </div>
            </div>
          </div>
        )}

        {/* View 2: High-End Matrix Table View */}
        {viewMode === "table" && (
          <div className="table-responsive-clean">
            <table className="comp-table-clean">
              <thead>
                <tr>
                  <th className="th-param">{t.comparison.headers.feature}</th>
                  <th className="th-trad">{t.comparison.headers.traditional}</th>
                  <th className="th-argo">{t.comparison.headers.argo}</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => {
                  const isExpanded = expandedId === row.id;
                  return (
                    <React.Fragment key={row.id}>
                      <tr
                        className={`comp-row ${row.highlight ? "row-featured" : ""} ${
                          isExpanded ? "row-expanded" : ""
                        }`}
                        onClick={() => setExpandedId(isExpanded ? null : row.id)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isExpanded}
                      >
                        <td className="cell-param">
                          <div className="param-wrapper">
                            <span className="param-icon">{getCategoryIcon(row.category)}</span>
                            <div>
                              <strong>{row.feature}</strong>
                              {row.highlight && <span className="row-badge-star">Perno R&D</span>}
                            </div>
                            <span className="expand-chevron">
                              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </span>
                          </div>
                        </td>

                        <td className="cell-trad">
                          <div className="cell-content">
                            <div className="badge-line">
                              <span className="trad-badge-pill">{row.traditionalBadge}</span>
                            </div>
                            <p>{row.traditional}</p>
                          </div>
                        </td>

                        <td className="cell-argo">
                          <div className="cell-content">
                            <div className="badge-line">
                              <span className="argo-badge-pill">
                                <Check size={12} style={{ display: "inline-block", marginRight: 3 }} />
                                {row.argoBadge}
                              </span>
                            </div>
                            <p>{row.argo}</p>
                          </div>
                        </td>
                      </tr>

                      {/* Expandable Drawer Row */}
                      {isExpanded && (
                        <tr className="drawer-row">
                          <td colSpan={3}>
                            <div className="drawer-content">
                              <div className="drawer-head">
                                <Info size={15} />
                                <strong>Approfondimento Clinico & Tecnologico:</strong>
                              </div>
                              <p>{row.deepDive}</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

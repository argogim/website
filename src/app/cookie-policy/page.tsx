"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";

export default function CookiePolicyPage() {
  const { lang, setLang } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", background: "var(--ink)", color: "var(--fg)" }}>
      {/* Header */}
      <header className="nav solid" style={{ position: "relative" }}>
        <div className="wrap">
          <Link href="/" className="brand" aria-label="ARGO-GIM Home">
            <Image
              src="/assets/logo.webp"
              alt="ARGO-GIM"
              width={120}
              height={26}
              priority
              style={{ width: "auto", height: 26 }}
            />
          </Link>
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
            <Link href="/" className="btn btn-ghost" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              <ArrowLeft size={14} style={{ marginRight: 6 }} />
              {lang === "it" ? "Torna al sito" : "Back to site"}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="wrap" style={{ paddingBlock: "64px 96px", maxWidth: "860px" }}>
        {lang === "it" ? (
          <article className="legal-doc">
            <span className="eyebrow">Informativa sull'Uso dei Cookie e Memoria Locale</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "16px 0 24px" }}>
              Cookie Policy
            </h1>
            <p className="src" style={{ marginBottom: "32px" }}>
              Informativa redatta in conformità al Provvedimento del Garante per la Protezione dei Dati Personali e alla Direttiva ePrivacy (2009/136/CE).<br />
              Ultimo aggiornamento: 14 ottobre 2026.
            </p>

            <section style={{ display: "grid", gap: "28px", lineHeight: "1.7" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  1. Cosa sono i Cookie?
                </h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  2. Nessun Cookie di Profilazione o Pubblicitario
                </h2>
                <div style={{ background: "rgba(61, 139, 255, 0.08)", border: "1px solid rgba(61, 139, 255, 0.25)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <strong>Nessun tracciamento commerciale:</strong> questo sito web <strong>non utilizza alcun cookie di profilazione</strong>, né cookie di terze parti per finalità pubblicitarie o di tracciamento comportamentale degli utenti.
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  3. Strumenti Tecnici Utilizzati (Local Storage)
                </h2>
                <p>
                  Il sito si avvale unicamente di un meccanismo tecnico di <strong>memoria locale del browser (Web Storage / localStorage)</strong>:
                </p>
                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <p><strong>Nome della chiave:</strong> <code>argo-lang</code></p>
                  <p><strong>Finalità:</strong> Memorizzare la lingua scelta dall'utente (Italiano o Inglese) per consentire una navigazione coerente tra le visite successive.</p>
                  <p><strong>Tipologia:</strong> Strumento strettamente tecnico esente dall'obbligo di consenso preventivo tramite cookie banner.</p>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  4. Come Gestire o Disattivare la Memoria Locale
                </h2>
                <p>
                  L'utente può in qualsiasi momento cancellare i dati memorizzati localmente o disabilitare l'uso dei cookie attraverso le impostazioni del proprio browser (Chrome, Safari, Firefox, Edge). La disattivazione della memoria locale non compromette la consultazione del sito, ma richiederà di riselezionare la lingua desiderata ad ogni accesso.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  5. Contatti
                </h2>
                <p>
                  Per qualsiasi domanda relativa all'uso di strumenti tecnici sul sito, puoi scrivere a: <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)", fontWeight: 600 }}>info@argogim.com</a>.
                </p>
              </div>
            </section>
          </article>
        ) : (
          <article className="legal-doc">
            <span className="eyebrow">Cookies and Local Storage Policy</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "16px 0 24px" }}>
              Cookie Policy
            </h1>
            <p className="src" style={{ marginBottom: "32px" }}>
              Prepared in accordance with the EU ePrivacy Directive (2009/136/EC) and GDPR.<br />
              Last updated: October 14, 2026.
            </p>

            <section style={{ display: "grid", gap: "28px", lineHeight: "1.7" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text strings that visited websites store on user devices to recall browsing preferences upon subsequent visits.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  2. No Tracking or Profiling Cookies
                </h2>
                <div style={{ background: "rgba(61, 139, 255, 0.08)", border: "1px solid rgba(61, 139, 255, 0.25)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <strong>No commercial tracking:</strong> This website <strong>does not use any profiling cookies</strong>, third-party marketing trackers, or analytical behavioral monitors.
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  3. Technical Storage Used (Local Storage)
                </h2>
                <p>
                  The site utilizes solely local browser memory (<code>localStorage</code>) strictly for technical operation:
                </p>
                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <p><strong>Key Name:</strong> <code>argo-lang</code></p>
                  <p><strong>Purpose:</strong> Retaining the user's preferred language (Italian or English) for subsequent visits.</p>
                  <p><strong>Classification:</strong> Strictly technical utility exempt from cookie banner consent requirements.</p>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  4. Disabling Local Storage
                </h2>
                <p>
                  Users can clear or disable browser storage at any time through their browser privacy settings (Safari, Chrome, Firefox, Edge).
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  5. Contact
                </h2>
                <p>
                  For inquiries, please write to: <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)", fontWeight: 600 }}>info@argogim.com</a>.
                </p>
              </div>
            </section>
          </article>
        )}
      </main>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "24px 0", textAlign: "center", color: "var(--muted)", fontSize: "0.85rem" }}>
        <p>© 2026 ARGO-GIM · info@argogim.com</p>
      </footer>
    </div>
  );
}

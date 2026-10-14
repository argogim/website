"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <span className="eyebrow">Informativa sul Trattamento dei Dati Personali</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "16px 0 24px" }}>
              Privacy Policy
            </h1>
            <p className="src" style={{ marginBottom: "32px" }}>
              Ai sensi dell'art. 13 del Regolamento Generale sulla Protezione dei Dati (UE) 2016/679 (GDPR).<br />
              Ultimo aggiornamento: 14 ottobre 2026.
            </p>

            <section style={{ display: "grid", gap: "28px", lineHeight: "1.7" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  1. Titolare del Trattamento
                </h2>
                <p>
                  Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
                </p>
                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <strong>Niccolò Vono</strong> (in qualità di ideatore e manutentore del sito web; la società ARGO-GIM è attualmente in fase di costituzione)<br />
                  <strong>Indirizzo:</strong> Via della Repubblica, 35, 88060, Gasperina (CZ), Italia<br />
                  <strong>Email di contatto:</strong> <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)" }}>info@argogim.com</a>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  2. Tipologia di Dati Raccolti e Finalità del Trattamento
                </h2>
                <p>
                  Sul presente sito web vengono trattate unicamente le seguenti categorie di dati:
                </p>
                <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "10px" }}>
                  <li>
                    <strong>Dati forniti volontariamente dall'utente (Waitlist / Resta aggiornato):</strong> l'indirizzo email inserito spontaneamente nel modulo della lista d'attesa. Il dato è trattato esclusivamente per inviare comunicazioni e aggiornamenti periodici relativi allo stato di avanzamento del progetto ARGO-GIM (sviluppo del prototipo, studi clinici, milestone).
                  </li>
                  <li>
                    <strong>Dati di navigazione tecnici:</strong> durante la normale navigazione, i sistemi informatici possono acquisire alcuni dati tecnici impliciti nell'uso dei protocolli di comunicazione Internet (ad esempio indirizzo IP anonimizzato, orario della richiesta, browser utilizzato) gestiti dall'infrastruttura di hosting a soli fini di sicurezza e corretto funzionamento della rete.
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  3. Base Giuridica del Trattamento
                </h2>
                <p>
                  La base giuridica per l'invio delle comunicazioni informative sul progetto è il <strong>consenso espresso dell'interessato</strong> (Art. 6, par. 1, lett. a del GDPR), manifestato tramite l'apposita casella di spunta (checkbox) prima dell'invio della propria email. Il consenso è revocabile in ogni momento.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  4. Fornitori Terzi e Trasferimento dei Dati
                </h2>
                <p>
                  I dati non vengono ceduti, venduti né comunicati a terzi per finalità pubblicitarie o di profilazione. Per l'erogazione del servizio ci avvaliamo esclusivamente di fornitori tecnologici conformi al GDPR nominati responsabili del trattamento:
                </p>
                <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "10px" }}>
                  <li><strong>Vercel Inc.</strong> (Hosting e infrastruttura web serverless, con Data Processing Addendum conforme alla normativa UE).</li>
                  <li><strong>Resend Inc.</strong> (Piattaforma sicura per l'invio e la gestione delle comunicazioni via email).</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  5. Periodo di Conservazione dei Dati
                </h2>
                <p>
                  L'indirizzo email conferito per la lista d'attesa sarà conservato per il tempo strettamente necessario a perseguire le finalità del progetto e fino all'eventuale richiesta di cancellazione (disiscrizione) da parte dell'utente.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  6. Diritti dell'Interessato
                </h2>
                <p>
                  In qualunque momento, ai sensi degli articoli 15-22 del GDPR, l'interessato ha il diritto di:
                </p>
                <ul style={{ paddingLeft: "20px", display: "grid", gap: "8px", margin: "10px 0" }}>
                  <li>Ottenere la conferma dell'esistenza dei propri dati personali e averne accesso.</li>
                  <li>Richiederne l'aggiornamento, la rettifica o l'integrazione.</li>
                  <li>Richiedere la cancellazione (diritto all'oblio) o la limitazione del trattamento.</li>
                  <li>Opporsi in qualsiasi momento al trattamento o revocare il consenso prestato.</li>
                  <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (garanteprivacy.it).</li>
                </ul>
                <p>
                  Per esercitare qualsiasi diritto è sufficiente inviare un'email a: <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)", fontWeight: 600 }}>info@argogim.com</a>.
                </p>
              </div>
            </section>
          </article>
        ) : (
          <article className="legal-doc">
            <span className="eyebrow">Personal Data Processing Policy</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "16px 0 24px" }}>
              Privacy Policy
            </h1>
            <p className="src" style={{ marginBottom: "32px" }}>
              Pursuant to Article 13 of the General Data Protection Regulation (EU) 2016/679 (GDPR).<br />
              Last updated: October 14, 2026.
            </p>

            <section style={{ display: "grid", gap: "28px", lineHeight: "1.7" }}>
              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  1. Data Controller
                </h2>
                <p>
                  The Data Controller for the personal data collected through this website is:
                </p>
                <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "12px", padding: "16px 20px", margin: "14px 0" }}>
                  <strong>Niccolò Vono</strong> (as creator and website maintainer; ARGO-GIM company is currently being incorporated)<br />
                  <strong>Address:</strong> Via della Repubblica, 35, 88060, Gasperina (CZ), Italy<br />
                  <strong>Contact email:</strong> <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)" }}>info@argogim.com</a>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  2. Collected Data & Purposes
                </h2>
                <p>
                  Only the following categories of data are processed:
                </p>
                <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "10px" }}>
                  <li>
                    <strong>Voluntarily provided data (Waitlist):</strong> the email address submitted voluntarily via the waitlist form. Data is processed solely to send relevant project updates (prototype milestones, clinical testing news).
                  </li>
                  <li>
                    <strong>Technical browsing logs:</strong> system logs automatically recorded by server infrastructure (anonymized IP, browser type, timestamp) strictly for network security and site stability.
                  </li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  3. Legal Basis
                </h2>
                <p>
                  The legal basis for sending project development communications is the <strong>user's explicit consent</strong> (GDPR Art. 6(1)(a)), collected via the mandatory checkbox prior to email submission. Consent can be withdrawn at any time.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  4. Third-Party Service Providers
                </h2>
                <p>
                  Personal data is never sold or used for commercial profiling. We utilize GDPR-compliant providers acting as data processors:
                </p>
                <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "10px" }}>
                  <li><strong>Vercel Inc.</strong> (Hosting and cloud infrastructure, under EU-compliant DPA).</li>
                  <li><strong>Resend Inc.</strong> (Transactional email delivery service).</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  5. Data Retention
                </h2>
                <p>
                  Email addresses are retained strictly for the duration of the project's development phases or until the user requests unsubscription.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.4rem", color: "var(--azzurro)", marginBottom: "12px" }}>
                  6. User Rights
                </h2>
                <p>
                  Under GDPR Articles 15-22, users hold the right to access, rectify, delete, restrict, or object to the processing of their data, or lodge a complaint with a supervisory authority.
                </p>
                <p style={{ marginTop: "10px" }}>
                  To exercise your rights, contact us anytime at: <a href="mailto:info@argogim.com" style={{ color: "var(--azzurro)", fontWeight: 600 }}>info@argogim.com</a>.
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

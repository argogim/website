import os
import subprocess

CSS_STYLES = """
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');

@page {
  size: A4 portrait;
  margin: 0;
}

:root {
  --ink: #040817;
  --navy: #08112D;
  --navy-2: #0C1840;
  --surface: #111E4B;
  --line: #22336B;
  --fg: #EEF2FB;
  --fg-2: #AEB9D8;
  --muted: #7A88B0;
  --azzurro: #3D8BFF;
  --azzurro-deep: #0066CC;
  --violet: #8B6CFF;
  --violet-soft: #B9A6FF;
  --coral: #FF8F6B;
  --green: #22C55E;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'IBM Plex Sans', -apple-system, sans-serif;
  background: var(--ink);
  color: var(--fg);
  font-size: 9pt;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
}

.page {
  width: 210mm;
  height: 297mm;
  padding: 16mm 18mm 14mm 18mm;
  position: relative;
  page-break-after: always;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background: var(--ink);
}

.header {
  border-bottom: 1px solid var(--line);
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.header .logo-area h1 {
  font-family: 'Sora', sans-serif;
  font-size: 20pt;
  letter-spacing: -0.02em;
  color: #fff;
  font-weight: 700;
  line-height: 1;
}

.header .logo-area h1 span {
  color: var(--azzurro);
}

.header .logo-area p {
  font-size: 8pt;
  color: var(--fg-2);
  margin-top: 3px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', monospace;
}

.header .meta {
  text-align: right;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 7.5pt;
  color: var(--muted);
}

.status-badge {
  display: inline-block;
  margin-top: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(61, 139, 255, 0.15);
  border: 1px solid rgba(61, 139, 255, 0.35);
  color: var(--azzurro);
  font-size: 7pt;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-box {
  margin-top: 10px;
  background: radial-gradient(circle at 10% 20%, rgba(61, 139, 255, 0.12), rgba(17, 30, 75, 0.4) 60%);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 14px;
}

.hero-box h2 {
  font-family: 'Sora', sans-serif;
  font-size: 11pt;
  font-weight: 600;
  color: #fff;
  line-height: 1.25;
}

.hero-box p {
  font-size: 8.5pt;
  color: var(--fg-2);
  margin-top: 4px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 10px;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 8px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 10px 12px;
}

.card-title {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 7pt;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--azzurro);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.card h3 {
  font-family: 'Sora', sans-serif;
  font-size: 9.5pt;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
}

.card p, .card li {
  font-size: 8pt;
  color: var(--fg-2);
  line-height: 1.4;
}

.stat-group {
  display: flex;
  gap: 12px;
  margin-top: 6px;
}

.stat-item {
  flex: 1;
  background: rgba(4, 8, 23, 0.5);
  border: 1px solid rgba(34, 51, 107, 0.8);
  border-radius: 6px;
  padding: 6px 8px;
}

.stat-val {
  font-family: 'Sora', sans-serif;
  font-size: 13pt;
  font-weight: 700;
  color: var(--azzurro);
  line-height: 1;
}

.stat-desc {
  font-size: 6.8pt;
  color: var(--muted);
  margin-top: 2px;
  line-height: 1.2;
}

.table-comp {
  width: 100%;
  border-collapse: collapse;
  font-size: 7.5pt;
  margin-top: 6px;
}

.table-comp th {
  padding: 5px 6px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 6.5pt;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(4, 8, 23, 0.6);
  border-bottom: 1px solid var(--line);
  text-align: left;
}

.table-comp td {
  padding: 4px 6px;
  border-bottom: 1px solid rgba(34, 51, 107, 0.4);
  vertical-align: top;
  color: var(--fg-2);
}

.table-comp td.argo {
  color: #fff;
  font-weight: 500;
  background: rgba(61, 139, 255, 0.05);
}

.badge-tag {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 6.5pt;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
}

.tag-trad {
  background: rgba(122, 136, 176, 0.2);
  color: var(--muted);
}

.tag-argo {
  background: rgba(61, 139, 255, 0.25);
  color: var(--azzurro);
}

.timeline {
  display: flex;
  border-top: 2px solid var(--line);
  padding-top: 8px;
  margin-top: 8px;
  gap: 8px;
}

.tl-step {
  flex: 1;
  position: relative;
  font-size: 7.5pt;
}

.tl-step::before {
  content: "";
  position: absolute;
  top: -12px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--navy);
  border: 2px solid var(--violet);
}

.tl-step.now::before {
  background: var(--azzurro);
  border-color: var(--azzurro);
  box-shadow: 0 0 0 3px rgba(61, 139, 255, 0.3);
}

.tl-step .when {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 6.5pt;
  color: var(--muted);
  text-transform: uppercase;
}

.tl-step.now .when {
  color: var(--azzurro);
  font-weight: 600;
}

.tl-step h4 {
  font-size: 7.5pt;
  color: #fff;
  margin-top: 1px;
}

.tl-step p {
  font-size: 6.8pt;
  color: var(--fg-2);
  line-height: 1.25;
}

.team-list {
  display: grid;
  gap: 6px;
  margin-top: 6px;
}

.team-member {
  display: flex;
  gap: 8px;
  align-items: center;
  background: rgba(4, 8, 23, 0.4);
  padding: 5px 8px;
  border-radius: 6px;
  border: 1px solid rgba(34, 51, 107, 0.6);
}

.avatar {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--azzurro-deep), var(--violet));
  display: grid;
  place-items: center;
  font-family: 'Sora', sans-serif;
  font-size: 7.5pt;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.tm-info h4 {
  font-size: 8pt;
  color: #fff;
  line-height: 1.1;
}

.tm-info span {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 6.5pt;
  color: var(--azzurro);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tm-info p {
  font-size: 7pt;
  color: var(--fg-2);
  line-height: 1.2;
}

.checklist {
  list-style: none;
  display: grid;
  gap: 5px;
  margin-top: 6px;
}

.checklist li {
  display: flex;
  gap: 6px;
  font-size: 7.8pt;
  line-height: 1.35;
  color: var(--fg-2);
}

.checklist li strong {
  color: #fff;
}

.checklist li .num-b {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 6.8pt;
  color: var(--azzurro);
  background: rgba(61, 139, 255, 0.15);
  padding: 1px 4px;
  border-radius: 3px;
  height: fit-content;
  flex-shrink: 0;
}

.footer-legal {
  border-top: 1px solid var(--line);
  padding-top: 8px;
  margin-top: 10px;
  font-size: 6.5pt;
  color: var(--muted);
  line-height: 1.3;
}
"""

HTML_IT = f"""<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8">
<title>ARGO-GIM · Executive Summary</title>
<style>{CSS_STYLES}</style>
</head>
<body>

<!-- ================= PAGE 1 ================= -->
<div class="page">
  <div>
    <div class="header">
      <div class="logo-area">
        <h1>ARGO<span>-GIM</span></h1>
        <p>Autonomous Real-time Gradient Overlay · Gastro Intestinal Monitor</p>
      </div>
      <div class="meta">
        <div>EXECUTIVE SUMMARY · 1/2</div>
        <div>OTTOBRE 2026 · ARGO-GIM</div>
        <div class="status-badge">Concept & R&D · Best Runner-up Talentis 2026</div>
      </div>
    </div>

    <div class="hero-box">
      <h2>Il tuo intestino, visto da dentro. A casa, senza preparazione invasiva.</h2>
      <p>Un concept di capsula ingeribile miniaturizzata che integra telecamere ad alta risoluzione, array di biosensori chimico-fisici ed Edge-AI a bordo per il monitoraggio della salute intestinale e la prevenzione del cancro colorettale.</p>
    </div>

    <!-- Problema e Soluzione -->
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Il Problema Clinico ed Epidemiologico</div>
        <h3>La prevenzione attuale non raggiunge chi ne ha bisogno</h3>
        <p>Il cancro del colon-retto è la 2ª causa di morte oncologica in Europa. Se diagnosticato in fase localizzata, la sopravvivenza a 5 anni è del 91%, ma crolla al 13% in fase metastatica. In Italia, lo screening basato su sangue occulto ed eventuale colonscopia vede un'adesione media di appena il 35,8% (scendendo al 21,1% nel Sud e nelle Isole), a causa del timore dell'invasività dell'esame e della complessità della preparazione intestinale.</p>
        <div class="stat-group">
          <div class="stat-item">
            <div class="stat-val">35,8%</div>
            <div class="stat-desc">Adesione media screening in Italia (ONS 2024)</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" style="color:var(--coral)">21,1%</div>
            <div class="stat-desc">Adesione nel Sud e nelle Isole</div>
          </div>
          <div class="stat-item">
            <div class="stat-val">91% / 13%</div>
            <div class="stat-desc">Sopravvivenza a 5 anni: localizzato vs metastatico</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">La Soluzione ARGO-GIM</div>
        <h3>Architettura di sistema a 4 componenti integrati</h3>
        <p><strong>ARGO-GIM (Autonomous Real-time Gradient Overlay - Gastro Intestinal Monitor)</strong> è studiato per trasformare una procedura ospedaliera traumatica in un esame domiciliare continuativo e non invasivo:</p>
        <ul style="padding-left:14px; margin-top:6px; display:grid; gap:3px;">
          <li><strong>Capsula miniaturizzata (28 × 12 mm):</strong> dual-end cameras, array biosensori, radio a bassissimo consumo e batteria allo stato solido biocompatibile.</li>
          <li><strong>Gilet sensori leggero:</strong> indossato sotto gli abiti, rileva la telemetria e stima la localizzazione anatomica della capsula lungo il colon.</li>
          <li><strong>Ricevitore compatto:</strong> registra i dati fisiologici durante la normale giornata.</li>
          <li><strong>App & Dashboard AI:</strong> calcola un indice di salute intestinale e compila un referto strutturato pronto per il medico.</li>
        </ul>
      </div>
    </div>

    <!-- Differenziazione da PillCam e Capsule Tradizionali -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Innovazione Tecnologica · Differenziazione rispetto alle capsule attuali (es. PillCam™)</div>
      <table class="table-comp">
        <thead>
          <tr>
            <th style="width:22%">Caratteristica</th>
            <th style="width:38%">Capsule tradizionali esistenti (es. PillCam™)</th>
            <th style="width:40%">Vantaggi e Innovazione ARGO-GIM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Preparazione intestinale</strong></td>
            <td><span class="badge-tag tag-trad">Obbligatoria e invasiva</span> Lassativi intensivi e digiuno stretto, necessari per pulire l'ottica.</td>
            <td class="argo"><span class="badge-tag tag-argo">Non invasiva</span> I biosensori operano anche nel contenuto fisiologico per una prevenzione senza barriere.</td>
          </tr>
          <tr>
            <td><strong>Tipologia di dati</strong></td>
            <td><span class="badge-tag tag-trad">Solo video ottico</span> Fotografie superficiali; non rileva parametri chimico-fisici né infiammazione sub-visiva.</td>
            <td class="argo"><span class="badge-tag tag-argo">Multimodale</span> Video + Biosensori biochimici: pH, stress ossidativo (ROS), emoglobina e temperatura.</td>
          </tr>
          <tr>
            <td><strong>Gestione fotogrammi</strong></td>
            <td><span class="badge-tag tag-trad">Fino a 50.000 frame non filtrati</span> Ore di revisione manuale per il gastroenterologo.</td>
            <td class="argo"><span class="badge-tag tag-argo">Edge-AI a bordo</span> Filtraggio locale dei frame ripetuti: trasmette solo alterazioni rilevanti, risparmiando tempo e batteria.</td>
          </tr>
          <tr>
            <td><strong>Destinazione d'uso</strong></td>
            <td>Procedura diagnostica ospedaliera specialistica una tantum.</td>
            <td class="argo">Monitoraggio periodico domiciliare (Lite) e supporto clinico ospedaliero avanzato (Dx).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Due Versioni -->
    <div class="grid-2" style="margin-top:10px;">
      <div class="card" style="border-left:3px solid var(--azzurro)">
        <div class="card-title">ARGO-GIM Lite · Prevenzione Domiciliare</div>
        <p>Studiata per la persona che desidera monitorare la salute intestinale nel tempo. L'AI segnala alterazioni precoci orientando verso il medico di base o lo specialista prima della comparsa di lesioni avanzate.</p>
      </div>
      <div class="card" style="border-left:3px solid var(--violet)">
        <div class="card-title">ARGO-GIM Dx · Dispositivo Clinico Specialistico</div>
        <p>Dotata di spettro NBI (Narrow-Band Imaging) e visione 3D con luce strutturata. Assistenza AI per la classificazione delle lesioni (Paris, Kudo, NICE) e interoperabilità FHIR con i sistemi ospedalieri.</p>
      </div>
    </div>
  </div>

  <div class="footer-legal">
    ARGO-GIM è un concept tecnologico e scientifico in fase di sviluppo, non un dispositivo medico certificato in commercio. I parametri indicati rappresentano specifiche e obiettivi di progetto da validare clinicamente.<br>
    Fonti: [1] Osservatorio Nazionale Screening (ONS), Rapporto 2024 · [2] American Cancer Society, dati SEER · © 2026 ARGO-GIM · info@argogim.com
  </div>
</div>

<!-- ================= PAGE 2 ================= -->
<div class="page">
  <div>
    <div class="header">
      <div class="logo-area">
        <h1>ARGO<span>-GIM</span></h1>
        <p>Executive Summary · 2/2 · Roadmap & Obiettivi di Sviluppo</p>
      </div>
      <div class="meta">
        <div>OTTOBRE 2026 · ARGO-GIM</div>
        <div>INFO@ARGOGIM.COM · WWW.ARGOGIM.COM</div>
      </div>
    </div>

    <!-- Milestones & Riconoscimenti -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Il Percorso Fatto · Riconoscimenti e Programmi di Sviluppo</div>
      <div class="grid-3" style="margin-top:4px;">
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--azzurro)">01 · ACCELERAZIONE & LAB</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">CAL.HUB.RIA - LAB</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Talento, idee, valore per il futuro: validazione scientifica e incubazione del modello biomedico.</p>
        </div>
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--violet-soft)">02 · COMPETIZIONE INNOVATION</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">Talentis · Maratea</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Selezione e presentazione del progetto nell'ambito del concorso nazionale per startup e progetti d'innovazione.</p>
        </div>
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:#FFD700">03 · FINALE NAZIONALE</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">Talentis · CAPRI 2026</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Ammissione tra i <strong>Best Runner-up</strong> per la finale nazionale di Capri del concorso Talentis.</p>
        </div>
      </div>
    </div>

    <!-- Obiettivi concreti e fabbisogno prototipo -->
    <div class="grid-2" style="margin-top:10px;">
      <div class="card" style="border-left:3px solid var(--azzurro)">
        <div class="card-title">Obiettivi Concreti · Prototipo da Banco (12 Mesi)</div>
        <p>Il piano operativo a 12 mesi è focalizzato sul raggiungimento del <strong>TRL 4 (prototipo funzionale validato in laboratorio)</strong>:</p>
        <ul class="checklist">
          <li><span class="num-b">A</span> <div><strong>Integrazione circuitale:</strong> layout miniaturizzato su PCB flessibile rigido-flessibile con microcontrollore Cortex-M e radio ultra-low-power.</div></li>
          <li><span class="num-b">B</span> <div><strong>Integrazione array biosensori:</strong> interfaccia funzionale per micro-elettrodi di pH, emoglobina e sensori di stress ossidativo (ROS).</div></li>
          <li><span class="num-b">C</span> <div><strong>Test in simulatore gastrointestinale:</strong> prove fluidodinamiche in-vitro per verificare galleggiamento, ottica e trasmissione RF attraverso tessuti simulati.</div></li>
          <li><span class="num-b">D</span> <div><strong>Proprietà Intellettuale:</strong> deposito della domanda di brevetto sull'architettura multimodale e sulla pipeline di selezione frame Edge-AI.</div></li>
        </ul>
      </div>

      <div class="card" style="border-left:3px solid var(--green)">
        <div class="card-title">Cosa Cerchiamo · Competenze e Partnership Tecniche</div>
        <p>Per completare la realizzazione del prototipo da banco, cerchiamo attivamente collaborazioni con figure chiave ed enti di ricerca:</p>
        <ul class="checklist">
          <li><span class="num-b">01</span> <div><strong>CO-FOUNDER TECNICO:</strong> Ingegneria Elettronica / Biomedica / Embedded Firmware per guidare l'hardware miniaturizzato e l'integrazione RF/sensori.</div></li>
          <li><span class="num-b">02</span> <div><strong>Reparti di Gastroenterologia:</strong> cliniche e centri universitari per la stesura dei protocolli di validazione e futuri studi pilota.</div></li>
          <li><span class="num-b">03</span> <div><strong>Mentor Regolatori MedTech:</strong> esperti in iter marcatura CE ai sensi del Regolamento UE 2017/745 (MDR) e conformità ISO 10993.</div></li>
          <li><span class="num-b">04</span> <div><strong>Laboratori di Microelettronica:</strong> partner con camere anecoiche e banchi di prova per test elettromagnetici.</div></li>
        </ul>
      </div>
    </div>

    <!-- Roadmap Regolatoria -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Iter Regolatorio e Fasi di Sviluppo (Regolamento UE 2017/745 MDR)</div>
      <div class="timeline">
        <div class="tl-step now">
          <div class="when">Fase 1 · Oggi</div>
          <h4>Concept & Design</h4>
          <p>Modellazione 3D, simulazioni e selezione biosensori.</p>
        </div>
        <div class="tl-step">
          <div class="when">Fase 2</div>
          <h4>Prototipo TRL 4</h4>
          <p>Hardware integrato, test in-vitro e brevetto.</p>
        </div>
        <div class="tl-step">
          <div class="when">Fase 3</div>
          <h4>Preclinica</h4>
          <p>Biocompatibilità ISO 10993 e sicurezza elettrica.</p>
        </div>
        <div class="tl-step">
          <div class="when">Fase 4</div>
          <h4>Trial Clinici</h4>
          <p>Studio di fattibilità e confronto clinico.</p>
        </div>
        <div class="tl-step">
          <div class="when">Fase 5</div>
          <h4>Marcatura CE</h4>
          <p>Omologazione dispositivo medico Lite e Dx.</p>
        </div>
      </div>
    </div>

    <!-- Team di Sviluppo -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Il Team di Sviluppo ARGO-GIM</div>
      <div class="team-list">
        <div class="team-member">
          <div class="avatar">NV</div>
          <div class="tm-info">
            <h4>Niccolò Vono · <span>Co-founder</span></h4>
            <p>Dottorando in Biotecnologie per la Medicina Molecolare · multi-omica del cancro colorettale</p>
          </div>
        </div>
        <div class="team-member">
          <div class="avatar">CV</div>
          <div class="tm-info">
            <h4>Cristina Vocca · <span>Co-founder</span></h4>
            <p>Dottoranda in Sanità Pubblica · specializzanda in Farmacologia e Tossicologia Clinica</p>
          </div>
        </div>
        <div class="team-member">
          <div class="avatar">GF</div>
          <div class="tm-info">
            <h4>Giuseppina Fruci · <span>Co-founder</span></h4>
            <p>Studentessa magistrale in Farmacia</p>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--line); border-radius:8px; padding:8px 14px;">
      <div>
        <span style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--azzurro); text-transform:uppercase;">Canale di contatto diretto</span>
        <div style="font-size:9pt; font-weight:600; color:#fff;">info@argogim.com · www.argogim.com</div>
      </div>
      <div style="font-size:7.5pt; color:var(--fg-2);">
        Sede di riferimento: Gasperina (CZ), Italia
      </div>
    </div>
  </div>

  <div class="footer-legal">
    ARGO-GIM è un progetto scientifico in fase di sviluppo. Questo documento è inteso esclusivamente a scopo informativo e di presentazione tecnica per potenziali partner di ricerca e sviluppo. Non costituisce sollecitazione al pubblico risparmio né offerta di investimento.<br>
    © 2026 ARGO-GIM · Tutti i diritti riservati · info@argogim.com
  </div>
</div>

</body>
</html>
"""

HTML_EN = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>ARGO-GIM · Executive Summary</title>
<style>{CSS_STYLES}</style>
</head>
<body>

<!-- ================= PAGE 1 ================= -->
<div class="page">
  <div>
    <div class="header">
      <div class="logo-area">
        <h1>ARGO<span>-GIM</span></h1>
        <p>Autonomous Real-time Gradient Overlay · Gastro Intestinal Monitor</p>
      </div>
      <div class="meta">
        <div>EXECUTIVE SUMMARY · 1/2</div>
        <div>OCTOBER 2026 · ARGO-GIM</div>
        <div class="status-badge">Concept & R&D · Talentis 2026 Best Runner-up</div>
      </div>
    </div>

    <div class="hero-box">
      <h2>Your gut, seen from the inside. At home, with no invasive preparation.</h2>
      <p>An ingestible capsule concept combining high-resolution optical cameras, biochemical biosensor arrays, and on-board Edge-AI for longitudinal gut health monitoring and colorectal cancer early prevention.</p>
    </div>

    <!-- Problem & Solution -->
    <div class="grid-2">
      <div class="card">
        <div class="card-title">Clinical & Epidemiological Problem</div>
        <h3>Current screening fails to reach those who need it most</h3>
        <p>Colorectal cancer is the second leading cause of cancer death in Europe. When diagnosed at a localized stage, 5-year survival reaches 91%, but plummets to 13% once metastases occur. In Italy, screening adherence averages only 35.8% (dropping to 21.1% in the South and Islands) due to fear of procedural invasiveness and demanding bowel preparation regimes.</p>
        <div class="stat-group">
          <div class="stat-item">
            <div class="stat-val">35.8%</div>
            <div class="stat-desc">Italian screening uptake (ONS 2024)</div>
          </div>
          <div class="stat-item">
            <div class="stat-val" style="color:var(--coral)">21.1%</div>
            <div class="stat-desc">Uptake in Southern Italy & Islands</div>
          </div>
          <div class="stat-item">
            <div class="stat-val">91% / 13%</div>
            <div class="stat-desc">5-year survival: localized vs metastatic</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">The ARGO-GIM Solution</div>
        <h3>Integrated 4-component system architecture</h3>
        <p><strong>ARGO-GIM (Autonomous Real-time Gradient Overlay - Gastro Intestinal Monitor)</strong> is designed to transform an invasive hospital procedure into a non-invasive, home-based examination:</p>
        <ul style="padding-left:14px; margin-top:6px; display:grid; gap:3px;">
          <li><strong>Miniaturized capsule (28 × 12 mm):</strong> dual-end cameras, biosensor array, ultra-low-power radio, and solid-state biocompatible battery.</li>
          <li><strong>Lightweight sensor vest:</strong> worn comfortably under daily clothes to track telemetry packets and anatomically localize the capsule.</li>
          <li><strong>Compact receiver unit:</strong> records physiological signals during normal daily activities.</li>
          <li><strong>Companion App & AI dashboard:</strong> computes a gut health index and compiles a structured clinical report.</li>
        </ul>
      </div>
    </div>

    <!-- Technological Differentiation from PillCam -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Technological Innovation · Differentiation from Conventional Capsules (e.g. PillCam™)</div>
      <table class="table-comp">
        <thead>
          <tr>
            <th style="width:22%">Feature</th>
            <th style="width:38%">Conventional Endoscopy Capsules (e.g. PillCam™)</th>
            <th style="width:40%">ARGO-GIM Innovation & Advantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Bowel Preparation</strong></td>
            <td><span class="badge-tag tag-trad">Mandatory & Demanding</span> Intensive laxatives and fasting required to clear optics.</td>
            <td class="argo"><span class="badge-tag tag-argo">Non-Invasive</span> Biosensors operate even within physiological contents, removing adoption barriers.</td>
          </tr>
          <tr>
            <td><strong>Data Modality</strong></td>
            <td><span class="badge-tag tag-trad">Optical video only</span> Surface photography; blind to biochemical shifts or sub-visual inflammation.</td>
            <td class="argo"><span class="badge-tag tag-argo">Multimodal</span> High-res optics + biochemical biosensors (pH, oxidative stress ROS, haemoglobin, temp).</td>
          </tr>
          <tr>
            <td><strong>Frame Processing</strong></td>
            <td><span class="badge-tag tag-trad">Up to 50,000 raw frames</span> Hours of manual physician frame-by-frame review.</td>
            <td class="argo"><span class="badge-tag tag-argo">On-board Edge-AI</span> Local filtering of repetitive frames: transmits only suspicious anomalies, saving time and power.</td>
          </tr>
          <tr>
            <td><strong>Setting of Use</strong></td>
            <td>Hospital specialist outpatient procedure.</td>
            <td class="argo">Home-based longitudinal monitoring (Lite) and advanced hospital diagnostics (Dx).</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Two Versions -->
    <div class="grid-2" style="margin-top:10px;">
      <div class="card" style="border-left:3px solid var(--azzurro)">
        <div class="card-title">ARGO-GIM Lite · Home Prevention</div>
        <p>Tailored for proactive individuals tracking gut health over time. On-board AI identifies baseline shifts, alerting users to seek timely medical consultation before macroscopic lesions develop.</p>
      </div>
      <div class="card" style="border-left:3px solid var(--violet)">
        <div class="card-title">ARGO-GIM Dx · Clinical Specialist Device</div>
        <p>Equipped with Narrow-Band Imaging (NBI) and structured-light 3D depth mapping. AI-assisted lesion classification (Paris, Kudo, NICE) and native FHIR hospital EHR interoperability.</p>
      </div>
    </div>
  </div>

  <div class="footer-legal">
    ARGO-GIM is an early-stage technological and scientific concept, not an approved medical device. Specifications represent design targets to be clinically validated.<br>
    Sources: [1] Italian National Screening Observatory (ONS 2024) · [2] American Cancer Society, SEER data · © 2026 ARGO-GIM · info@argogim.com
  </div>
</div>

<!-- ================= PAGE 2 ================= -->
<div class="page">
  <div>
    <div class="header">
      <div class="logo-area">
        <h1>ARGO<span>-GIM</span></h1>
        <p>Executive Summary · 2/2 · Development Roadmap & Requirements</p>
      </div>
      <div class="meta">
        <div>OCTOBER 2026 · ARGO-GIM</div>
        <div>INFO@ARGOGIM.COM · WWW.ARGOGIM.COM</div>
      </div>
    </div>

    <!-- Milestones -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Track Record · Recognitions & Acceleration Programs</div>
      <div class="grid-3" style="margin-top:4px;">
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--azzurro)">01 · ACCELERATION & LAB</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">CAL.HUB.RIA - LAB</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Talent, ideas, value for the future: biomedical incubation and scientific validation program.</p>
        </div>
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--violet-soft)">02 · INNOVATION CONTEST</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">Talentis · Maratea</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Competitive selection and pitch presentation at the national innovation competition.</p>
        </div>
        <div style="background:rgba(4,8,23,0.5); padding:8px 10px; border-radius:6px; border:1px solid var(--line);">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:#FFD700">03 · NATIONAL FINALS</div>
          <h4 style="font-size:8.5pt; color:#fff; margin:2px 0;">Talentis · CAPRI 2026</h4>
          <p style="font-size:7.2pt; color:var(--fg-2)">Awarded as <strong>Best Runner-up</strong>, securing qualification for the national finals in Capri.</p>
        </div>
      </div>
    </div>

    <!-- Prototype Objectives & Requirements -->
    <div class="grid-2" style="margin-top:10px;">
      <div class="card" style="border-left:3px solid var(--azzurro)">
        <div class="card-title">Concrete Targets · Benchtop Prototype (12 Months)</div>
        <p>Our 12-month operational plan targets achieving <strong>TRL 4 (functional benchtop prototype validated in lab)</strong>:</p>
        <ul class="checklist">
          <li><span class="num-b">A</span> <div><strong>Circuit Integration:</strong> rigid-flex PCB layout integrating ultra-low-power Cortex-M MCU and RF transceiver.</div></li>
          <li><span class="num-b">B</span> <div><strong>Biosensor Interface:</strong> functional micro-electrodes for pH, haemoglobin, and oxidative stress (ROS) detection.</div></li>
          <li><span class="num-b">C</span> <div><strong>In-vitro Gut Simulator:</strong> fluidic testing in anatomical phantoms to evaluate buoyancy, optics, and RF transmission through tissue.</div></li>
          <li><span class="num-b">D</span> <div><strong>Intellectual Property:</strong> patent filing covering the integrated multimodal sensing architecture and Edge-AI filtering pipeline.</div></li>
        </ul>
      </div>

      <div class="card" style="border-left:3px solid var(--green)">
        <div class="card-title">What We Seek · Technical Partnerships</div>
        <p>To advance the prototype development, we actively seek collaborations with key technical profiles and research partners:</p>
        <ul class="checklist">
          <li><span class="num-b">01</span> <div><strong>TECHNICAL CO-FOUNDER:</strong> Electronic & Biomedical Engineering / Embedded Firmware to lead hardware integration and sensor design.</div></li>
          <li><span class="num-b">02</span> <div><strong>Gastroenterology Units:</strong> clinical partners to co-develop validation protocols and participate in pilot studies.</div></li>
          <li><span class="num-b">03</span> <div><strong>MedTech Regulatory Mentors:</strong> guidance for EU MDR 2017/745 pathway and ISO 10993 biocompatibility standards.</div></li>
          <li><span class="num-b">04</span> <div><strong>Microelectronic Laboratories:</strong> research partners offering testing benches and anechoic chambers.</div></li>
        </ul>
      </div>
    </div>

    <!-- Regulatory Pathway -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">Regulatory Pathway & Development Phases (EU MDR 2017/745)</div>
      <div class="timeline">
        <div class="tl-step now">
          <div class="when">Phase 1 · Today</div>
          <h4>Concept & Design</h4>
          <p>3D CAD, simulations, and sensor selection.</p>
        </div>
        <div class="tl-step">
          <div class="when">Phase 2</div>
          <h4>TRL 4 Prototype</h4>
          <p>Hardware integration, in-vitro testing, and patent.</p>
        </div>
        <div class="tl-step">
          <div class="when">Phase 3</div>
          <h4>Preclinical</h4>
          <p>ISO 10993 biocompatibility & electrical safety.</p>
        </div>
        <div class="tl-step">
          <div class="when">Phase 4</div>
          <h4>Clinical Trials</h4>
          <p>Feasibility and comparative clinical validation.</p>
        </div>
        <div class="tl-step">
          <div class="when">Phase 5</div>
          <h4>CE Marking</h4>
          <p>Medical device clearance for Lite & Dx.</p>
        </div>
      </div>
    </div>

    <!-- Team -->
    <div class="card" style="margin-top:10px;">
      <div class="card-title">The ARGO-GIM Development Team</div>
      <div class="team-list">
        <div class="team-member">
          <div class="avatar">NV</div>
          <div class="tm-info">
            <h4>Niccolò Vono · <span>Co-founder</span></h4>
            <p>PhD Student in Molecular Medicine Biotechnology · colorectal cancer multi-omics</p>
          </div>
        </div>
        <div class="team-member">
          <div class="avatar">CV</div>
          <div class="tm-info">
            <h4>Cristina Vocca · <span>Co-founder</span></h4>
            <p>PhD Student in Public Health · resident in Clinical Pharmacology and Toxicology</p>
          </div>
        </div>
        <div class="team-member">
          <div class="avatar">GF</div>
          <div class="tm-info">
            <h4>Giuseppina Fruci · <span>Co-founder</span></h4>
            <p>Master's Student in Pharmacy</p>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--line); border-radius:8px; padding:8px 14px;">
      <div>
        <span style="font-family:'IBM Plex Mono',monospace; font-size:6.8pt; color:var(--azzurro); text-transform:uppercase;">Direct Contact Channel</span>
        <div style="font-size:9pt; font-weight:600; color:#fff;">info@argogim.com · www.argogim.com</div>
      </div>
      <div style="font-size:7.5pt; color:var(--fg-2);">
        Location: Gasperina (CZ), Italy
      </div>
    </div>
  </div>

  <div class="footer-legal">
    ARGO-GIM is an early-stage scientific research project. This document is intended solely for technical presentation to potential R&D partners and does not constitute any financial promotion, investment offering, or public solicitation.<br>
    © 2026 ARGO-GIM · All rights reserved · info@argogim.com
  </div>
</div>

</body>
</html>
"""

def generate_pdf(html_content, output_pdf_path):
    temp_html = output_pdf_path.replace('.pdf', '.html')
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    cmd = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--print-to-pdf={output_pdf_path}",
        "--print-to-pdf-no-header",
        temp_html
    ]
    subprocess.run(cmd, check=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Generated: {output_pdf_path} (size: {os.path.getsize(output_pdf_path)} bytes)")

if __name__ == '__main__':
    base_dir = os.path.abspath("public/assets")
    generate_pdf(HTML_IT, os.path.join(base_dir, "ARGO-GIM_executive-summary_IT.pdf"))
    generate_pdf(HTML_EN, os.path.join(base_dir, "ARGO-GIM_executive-summary_EN.pdf"))
    print("Done!")

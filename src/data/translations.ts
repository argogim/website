export type Lang = 'it' | 'en';

export interface Translations {
  nav: {
    capsule: string;
    comparison: string;
    routine: string;
    milestones: string;
    versions: string;
    faq: string;
    project: string;
    waitlist: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    lead: string;
    ctaPrimary: string;
    ctaGhost: string;
    scrollCue: string;
  };
  statement: {
    headingDim: string;
    headingBold: string;
    lead: string;
  };
  acronym: {
    eyebrow: string;
    title: string;
    fullName: string;
    lead: string;
    items: Array<{
      letter: string;
      word: string;
      meaning: string;
      tag: string;
      desc: string;
      deepDive: string;
    }>;
  };
  explorer: {
    eyebrow: string;
    title: string;
    dimLength: { value: string; label: string };
    dimDiameter: { value: string; label: string };
    dimUse: { value: string; label: string };
    renderNote: string;
    parts: Array<{
      num: string;
      title: string;
      desc: string;
      isDx?: boolean;
      tag?: string;
    }>;
  };
  comparison: {
    eyebrow: string;
    title: string;
    lead: string;
    badgePillcam: string;
    badgeArgo: string;
    viewCardsLabel: string;
    viewTableLabel: string;
    filterAll: string;
    filterComfort: string;
    filterSensors: string;
    filterAi: string;
    stats: {
      invasiveness: { label: string; trad: string; argo: string };
      modalities: { label: string; trad: string; argo: string };
      frameAnalysis: { label: string; trad: string; argo: string };
    };
    headers: {
      feature: string;
      traditional: string;
      argo: string;
    };
    rows: Array<{
      id: string;
      category: 'comfort' | 'sensors' | 'ai' | 'routine';
      feature: string;
      traditional: string;
      traditionalBadge: string;
      argo: string;
      argoBadge: string;
      deepDive: string;
      highlight?: boolean;
    }>;
  };
  film: {
    caption: string;
    badge: string;
  };
  routine: {
    eyebrow: string;
    title: string;
    moments: Array<{
      when: string;
      title: string;
      desc: string;
    }>;
    appExample: string;
    giIndexLabel: string;
  };
  journey: {
    simBadge: string;
    title: string;
    lead: string;
    labels: string[];
    elapsed: string;
    readings: {
      ph: string;
      temperature: string;
      hb: string;
      ros: string;
      normal: string;
      phChartTitle: string;
    };
    framesTemplate: (seen: string, sent: string) => string;
  };
  milestones: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Array<{
      step: string;
      title: string;
      desc: string;
      linkText?: string;
      linkUrl?: string;
      badge?: string;
    }>;
  };
  versions: {
    eyebrow: string;
    title: string;
    lite: {
      who: string;
      title: string;
      claim: string;
      features: string[];
    };
    dx: {
      who: string;
      title: string;
      claim: string;
      features: string[];
    };
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Array<{
      q: string;
      a: string;
      defaultOpen?: boolean;
    }>;
  };
  waitlist: {
    eyebrow: string;
    title: string;
    lead: string;
    placeholder: string;
    button: string;
    submitting: string;
    success: string;
    errorInvalid: string;
    errorPrivacy: string;
    errorGeneric: string;
    privacyConsent: string;
    privacyLinkText: string;
    disclaimer: string;
  };
  project: {
    eyebrow: string;
    title: string;
    openPdf: string;
    pdfDesc: string;
  };
  why: {
    stat1: {
      value: string;
      desc: string;
      source: string;
      north: string;
      centre: string;
      south: string;
    };
    stat2: {
      desc: string;
      source: string;
    };
  };
  roadmap: {
    title: string;
    lead: string;
    steps: Array<{
      when: string;
      title: string;
      desc: string;
      isCurrent?: boolean;
    }>;
  };
  team: {
    eyebrow: string;
    title: string;
    subtitleRole: string;
    members: Array<{
      initials: string;
      name: string;
      role: string;
      linkedin?: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    email: string;
    copyBtn: string;
    copiedBtn: string;
    areas: Array<{
      num: string;
      title: string;
    }>;
  };
  footer: {
    disclaimer: string;
    sources: string[];
    copyright: string;
    privacyPolicy: string;
    cookiePolicy: string;
  };
}

export const translations: Record<Lang, Translations> = {
  it: {
    nav: {
      capsule: "La capsula",
      comparison: "Innovazione",
      routine: "Come funzionerà",
      milestones: "Il percorso",
      versions: "Lite e Dx",
      faq: "Domande",
      project: "Il progetto",
      waitlist: "Resta aggiornato",
    },
    hero: {
      titlePrefix: "Il tuo intestino, ",
      titleHighlight: "visto da dentro.",
      lead: "Un concept di capsula ingeribile progettato per monitorare nel tempo la salute dell'intestino, combinando immagini ad alta risoluzione e biosensori senza preparazione invasiva.",
      ctaPrimary: "Scopri la capsula",
      ctaGhost: "Il progetto e la roadmap",
      scrollCue: "Scorri",
    },
    statement: {
      headingDim: "Il controllo che molti tendono a rimandare.",
      headingBold: "L'obiettivo è permetterti di farlo a casa, senza code e senza timori.",
      lead: "Oggi si deve spesso scegliere tra esami poco informativi e procedure ospedaliere invasive. Il concept ARGO-GIM è studiato per superare questo compromesso, aprendo la strada a una prevenzione accessibile e precoce.",
    },
    acronym: {
      eyebrow: "Architettura del Nome",
      title: "Cosa significa l'acronimo ARGO-GIM",
      fullName: "Autonomous Real-time Gradient Overlay — Gastro Intestinal Monitor",
      lead: "Ogni termine dell'acronimo sintetizza una precisa scelta scientifica e ingegneristica volta a superare i limiti storici dell'endoscopia capsulare e ospedaliera.",
      items: [
        {
          letter: "A",
          word: "Autonomous",
          meaning: "Navigazione e decisione locale",
          tag: "Motilità fisiologica & Edge-AI",
          desc: "La capsula avanza lungo il tratto digerente sfruttando la naturale motilità peristaltica, senza propulsioni robotiche invasive né cateteri.",
          deepDive: "L'Edge-AI a bordo prende decisioni computazionali autonome in locale: valuta istante per istante i parametri biochimici ed ottici, scartando la ridondanza e massimizzando l'autonomia energetica della batteria.",
        },
        {
          letter: "R",
          word: "Real-time",
          meaning: "Telemetria e trasmissione continua",
          tag: "Zero latenze & Low-Power RF",
          desc: "Campionamento istantaneo e trasmissione wireless a bassissimo consumo energetico dei pacchetti fisiologici verso il gilet ricevitore indossato.",
          deepDive: "Nessun ritardo diagnostico né necessità di estrarre fisicamente memorie di massa a fine esame: i dati di telemetria e gli eventi critici vengono registrati e correlati dinamicamente durante la vita quotidiana.",
        },
        {
          letter: "G / O",
          word: "Gradient Overlay",
          meaning: "Mappatura biochimica multidimensionale",
          tag: "Oltre la fotografia superficiale",
          desc: "Sovrapposizione dinamica dei gradienti chimico-fisici (acidità/pH, stress ossidativo ROS, micro-tracce di emoglobina e temperatura) alle immagini visive.",
          deepDive: "Le capsule tradizionali si limitano a foto superficiali cieche alla biochimica. ARGO-GIM crea un vero 'overlay' a strati che correla l'immagine alla variazione biochimica continua, rivelando micro-focolai infiammatori e displasie prima che diventino polipi visibili.",
        },
        {
          letter: "GIM",
          word: "Gastro Intestinal Monitor",
          meaning: "Monitoraggio continuo domiciliare",
          tag: "Screening preventivo accessibile",
          desc: "La missione clinica: trasformare lo screening del colon-retto e il follow-up delle patologie intestinali da procedura temuta a controllo domiciliare periodico.",
          deepDive: "Un ecosistema integrato (capsula, gilet indossabile, app e referto strutturato per il medico) pensato per abbattere le barriere psicologiche e cliniche che oggi escludono oltre il 64% dei cittadini dagli screening salvavita.",
        },
      ],
    },
    explorer: {
      eyebrow: "Architettura del concept",
      title: "Non solo vedere. Capire a fondo.",
      dimLength: { value: "28 mm", label: "lunghezza stimata" },
      dimDiameter: { value: "12 mm", label: "diametro" },
      dimUse: { value: "monouso", label: "un esame, una capsula" },
      renderNote: "Render e architettura di concept. Seleziona un componente per approfondire.",
      parts: [
        {
          num: "01",
          title: "Fotocamere miniaturizzate alle due estremità",
          desc: "Progettate per registrare la parete intestinale lungo il transito, con illuminazione LED integrata e sincronizzata.",
        },
        {
          num: "02",
          title: "Array di biosensori integrati",
          desc: "Misureranno temperatura, pH, specie reattive dell'ossigeno (ROS) ed emoglobina: parametri biochimici non visibili alle sole telecamere.",
        },
        {
          num: "03",
          title: "Microcontrollore con Edge-AI a bordo",
          desc: "Pensato per selezionare i fotogrammi con alterazioni e scartare quelli ridondanti, preservando l'autonomia della batteria e accelerando la refertazione medica.",
        },
        {
          num: "04",
          title: "Modulo radio a bassissimo consumo",
          desc: "Trasmetterà i pacchetti telemetrici al gilet ricevitore indossato, che traccerà la posizione e l'avanzamento della capsula.",
        },
        {
          num: "05",
          title: "Batteria a stato solido biocompatibile",
          desc: "Studiata per garantire l'autonomia necessaria per l'intero transito fisiologico con elevati standard di sicurezza chimica.",
        },
        {
          num: "06",
          title: "Visione 3D e NBI",
          tag: "Dx · in fase di R&D",
          desc: "Luce strutturata per la stima volumetrica delle lesioni e spettro Narrow-Band Imaging per la vascolarizzazione mucosa nella variante clinica.",
          isDx: true,
        },
      ],
    },
    comparison: {
      eyebrow: "Confronto Tecnologico",
      title: "Cosa fa in più rispetto a PillCam™ e alle capsule tradizionali.",
      lead: "Le capsule endoscopiche commerciali (come PillCam™) hanno aperto la strada all'endoscopia non robotica, ma presentano limiti procedurali e sensoriali stringenti. Ecco come il concept ARGO-GIM è pensato per superarle.",
      badgePillcam: "Capsule tradizionali (es. PillCam™)",
      badgeArgo: "Concept ARGO-GIM",
      viewCardsLabel: "Schede a Confronto",
      viewTableLabel: "Matrice Tecnica",
      filterAll: "Tutti i parametri",
      filterComfort: "Comfort Paziente",
      filterSensors: "Sensori & Diagnostica",
      filterAi: "Intelligenza Artificiale",
      stats: {
        invasiveness: { label: "Invasività preparazione", trad: "Lassativi intensivi e digiuno", argo: "Zero lassativi o preparazione" },
        modalities: { label: "Canali di rilevamento", trad: "1 (Solo video ottico)", argo: "5 (Video + pH + ROS + Hb + °C)" },
        frameAnalysis: { label: "Elaborazione immagini", trad: "Fino a 50.000 frame grezzi", argo: "Edge-AI locale a bordo" },
      },
      headers: {
        feature: "Parametro di confronto",
        traditional: "Capsule tradizionali (es. PillCam™)",
        argo: "Progetto ARGO-GIM",
      },
      rows: [
        {
          id: "prep",
          category: "comfort",
          feature: "Preparazione intestinale",
          traditional: "Obbligatoria e fortemente invasiva: richiede l'assunzione di litri di lassativi osmotici e digiuno rigoroso per pulire il campo ottico.",
          traditionalBadge: "Lassativi intensivi obbligatori",
          argo: "Non invasiva: i biosensori elettrochimici e gli algoritmi di filtraggio operano anche in presenza di contenuto fisiologico naturale.",
          argoBadge: "Zero preparazione traumatica",
          deepDive: "La preparazione intestinale è la prima causa (oltre il 45% dei casi) di rifiuto degli screening colorettali. Superare questo limite permette di raggiungere chi oggi evita l'esame per timore dei lassativi.",
          highlight: true,
        },
        {
          id: "data",
          category: "sensors",
          feature: "Tipologia di dati raccolti",
          traditional: "Esclusivamente video ottico: fotografie superficiali della mucosa che rilevano solo lesioni già visibili e macroscopiche.",
          traditionalBadge: "Solo fotografia superficiale",
          argo: "Multimodale: dual-end camera ad alta risoluzione + array di biosensori chimico-fisici (pH luminale, stress ossidativo ROS, emoglobina e temperatura).",
          argoBadge: "Multimodale: Video + 4 Biosensori",
          deepDive: "La progressione verso la lesione precancerosa o la ricaduta infiammatoria si manifesta a livello biochimico prima che la parete epiteliale mostri polipi o ulcerazioni evidenti.",
          highlight: true,
        },
        {
          id: "ai",
          category: "ai",
          feature: "Elaborazione e selezione fotogrammi",
          traditional: "Registrazione passiva indifferenziata di oltre 50.000 frame; richiede ore di revisione manuale fotogramma per fotogramma da parte dello specialista.",
          traditionalBadge: "Fino a 50.000 frame grezzi",
          argo: "Edge-AI integrata a bordo: selezione locale istantanea dei frame con alterazioni anomale e scarto delle ripetizioni identiche.",
          argoBadge: "Edge-AI a bordo & referto rapido",
          deepDive: "L'inferenza locale riduce fino all'80% i pacchetti radio trasmessi, estendendo la durata della batteria e offrendo al medico un referto pre-strutturato focalizzato sui soli eventi salienti.",
          highlight: true,
        },
        {
          id: "setting",
          category: "comfort",
          feature: "Ambiente e modalità di utilizzo",
          traditional: "Procedura specialistica ospedaliera o ambulatoriale, programmata con mesi di anticipo e con monitoraggio dedicato.",
          traditionalBadge: "Procedura ospedaliera programmata",
          argo: "Progettato per la routine domiciliare (Lite per prevenzione periodica) e per supporto diagnostico specialistico avanzato (Dx).",
          argoBadge: "Domiciliare (Lite) / Ospedaliero (Dx)",
          deepDive: "Eseguire il controllo a casa, durante la giornata normale e senza alterare i ritmi lavorativi o personali, trasforma l'esame da evento traumatico a check-up periodico.",
          highlight: false,
        },
        {
          id: "inflam",
          category: "sensors",
          feature: "Rilevamento infiammatorio e lesioni precoci",
          traditional: "Cieco agli stati infiammatori sub-visivi; rileva la patologia solo quando l'epitelio è già macroscopicamente ulcerato.",
          traditionalBadge: "Solo lesioni visibili ad occhio nudo",
          argo: "Sensibilità molecolare precoce: rileva cali di pH anomali, accumulo di radicali liberi e micro-sanguinamento occulto.",
          argoBadge: "Biomarcatori precoci sub-visivi",
          deepDive: "La correlazione tra gradienti chimici (Gradient Overlay) e posizione anatomica consente di allertare il medico tempestivamente, aprendo la strada a interventi preventivi mininvasivi.",
          highlight: true,
        },
      ],
    },
    film: {
      caption: "Ingegnerizzazione miniaturizzata con dimensioni analoghe alle capsule endoscopiche approvate per uso umano.",
      badge: "Animazione 3D di concept",
    },
    routine: {
      eyebrow: "La visione d'uso",
      title: "Come funzionerà la routine domiciliare.",
      moments: [
        {
          when: "Mattina",
          title: "Assunzione a casa",
          desc: "Pensata per essere ingerita con un bicchiere d'acqua, senza necessità di lassativi intensivi né sedativi.",
        },
        {
          when: "Subito dopo",
          title: "Indossare il gilet sensori",
          desc: "Un indumento leggero e confortevole sotto gli abiti, con antenne per rilevare i dati e stimare la posizione.",
        },
        {
          when: "Durante il giorno",
          title: "Normale routine quotidiana",
          desc: "Il ricevitore compatto memorizza la telemetria permettendo di svolgere le proprie attività quotidiane in totale libertà.",
        },
        {
          when: "A fine transito",
          title: "Quadro sintetico nell'app",
          desc: "L'applicazione elaborerà un indice di salute intestinale e un report strutturato da condividere con il proprio medico.",
        },
      ],
      appExample: "Concept interfaccia",
      giIndexLabel: "INDICE GI",
    },
    journey: {
      simBadge: "Simulazione dimostrativa · parametri matematici simulati",
      title: "Simulazione del transito nel colon.",
      lead: "Scorrendo la pagina, la capsula avanza lungo il tratto colico e i biosensori simulano l'aggiornamento dei parametri biochimici.",
      labels: ["CIECO", "ASCENDENTE", "TRASVERSO", "DISCENDENTE", "SIGMA", "RETTO"],
      elapsed: "Tempo stimato",
      readings: {
        ph: "pH",
        temperature: "Temperatura",
        hb: "Emoglobina",
        ros: "ROS",
        normal: "normale",
        phChartTitle: "Andamento del pH lungo il transito",
      },
      framesTemplate: (seen, sent) => `${seen} fotogrammi analizzati a bordo · ${sent} trasmessi tramite AI`,
    },
    milestones: {
      eyebrow: "Il percorso",
      title: "I traguardi raggiunti dal progetto.",
      lead: "ARGO-GIM nasce dalla ricerca e dal confronto con il mondo dell'innovazione biomedica. Ecco i principali riconoscimenti e programmi di sviluppo:",
      items: [
        {
          step: "01",
          title: "CAL.HUB.RIA - LAB",
          desc: "Talento, idee, valore per il futuro: programma di accelerazione e validazione scientifica.",
          linkText: "Approfondisci il programma",
          linkUrl: "https://biotecnomed.it/calhubria-lab/",
          badge: "Accelerazione & Lab",
        },
        {
          step: "02",
          title: "Concorso Talentis — Tappa di Maratea",
          desc: "Selezione e presentazione del progetto nell'ambito del contest nazionale per startup e progetti d'innovazione.",
          badge: "Selezione Competitiva",
        },
        {
          step: "03",
          title: "Next Up: Finale Talentis — CAPRI 2026",
          desc: "Ammissione tra i Best Runner-up per la finale nazionale di Capri del concorso Talentis.",
          badge: "Best Runner-up",
        },
      ],
    },
    versions: {
      eyebrow: "Due versioni previste",
      title: "Per la prevenzione personale e per la clinica specialistica.",
      lite: {
        who: "Prevenzione & Benessere",
        title: "Monitoraggio longitudinale domiciliare.",
        claim: "Studiato per seguire nel tempo lo stato dell'intestino, segnalando deviazioni precoci e suggerendo il confronto con il medico.",
        features: [
          "Fotocamera integrata e biosensori biochimici",
          "Algoritmo per indice di salute intestinale",
          "Report telemetrico e storico esami su app",
        ],
      },
      dx: {
        who: "Dispositivo Clinico Specialistico",
        title: "Uno strumento potenziato per il gastroenterologo.",
        claim: "Pensato per velocizzare l'analisi medica: lesioni pre-evidenziate dall'AI, con refertazione guidata e decisione finale al medico.",
        features: [
          "Doppia fotocamera RGB + NBI e visione 3D",
          "Supporto a classificazioni Paris, Kudo e NICE",
          "Integrazione standard FHIR con cartelle ospedaliere",
        ],
      },
    },
    faq: {
      eyebrow: "Domande frequenti",
      title: "Chiarezza sullo stato del progetto.",
      lead: "Trasparenza scientifica e regolatoria: tutto ciò che c'è da sapere oggi.",
      items: [
        {
          q: "ARGO-GIM è già acquistabile o utilizzabile?",
          a: "No. ARGO-GIM è un progetto scientifico e tecnologico attualmente in fase di concept, design architetturale e prototipazione. Prima di poter essere commercializzato dovrà completare lo sviluppo del prototipo da banco, i test preclinici di biocompatibilità (ISO 10993), gli studi clinici formali e ottenere la marcatura CE come dispositivo medico ai sensi del Regolamento UE 2017/745.",
          defaultOpen: true,
        },
        {
          q: "In cosa differisce dalle attuali capsule endoscopiche in commercio?",
          a: "Le capsule oggi in commercio (come PillCam™) sono puramente ottiche e richiedono una preparazione intestinale con lassativi pesanti per pulire il colon, altrimenti le immagini risultano inutilizzabili. ARGO-GIM affianca alle fotocamere un array di biosensori (pH, ROS, emoglobina, temperatura) capaci di estrarre biomarcatori funzionali anche in presenza di contenuto fisiologico, riducendo l'invasività per il paziente.",
        },
        {
          q: "Ingerire una capsula di queste dimensioni comporta rischi?",
          a: "Le capsule endoscopiche hanno un profilo di sicurezza documentato da oltre vent'anni di utilizzo clinico nel mondo. Il concept di ARGO-GIM rispetta le dimensioni standard (28 × 12 mm) e prevede scocche biocompatibili a norma ISO 10993 e batterie a stato solido, prive di elettroliti liquidi infiammabili.",
        },
        {
          q: "Cosa accade alla capsula al termine dell'esame?",
          a: "Viene espulsa per via naturale con i movimenti peristaltici. Il gilet ricevitore ne monitora la traiettoria e avvisa l'utente quando il percorso è completato. Il dispositivo è concepito come monouso per garantire massima igiene ed evitare contaminazioni incrociate.",
        },
        {
          q: "ARGO-GIM sostituisce la colonscopia o gli screening del SSN?",
          a: "No, in nessun modo. ARGO-GIM Lite non è uno strumento diagnostico sostitutivo: ogni cittadino deve continuare a partecipare regolarmente ai programmi di screening regionali e seguire i consigli del proprio medico curante. La versione Dx è pensata per assistere il medico specialista, non per sostituirlo.",
        },
        {
          q: "Come vengono gestiti i dati personali e telemetrici?",
          a: "Il trattamento rispetta rigorosamente il Regolamento UE GDPR (2016/679). I dati vengono elaborati a bordo con crittografia end-to-end e non vengono ceduti a terzi per scopi commerciali né impiegati per la ricerca senza esplicito consenso anonimizzato.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Resta aggiornato",
      title: "Vuoi seguire i progressi di ARGO-GIM?",
      lead: "Iscriviti per ricevere aggiornamenti sulle tappe di sviluppo del progetto, dai test sul prototipo ai futuri studi clinici.",
      placeholder: "Inserisci la tua email",
      button: "Iscriviti",
      submitting: "Invio in corso...",
      success: "Grazie! La tua email è stata registrata con successo.",
      errorInvalid: "Inserisci un indirizzo email valido.",
      errorPrivacy: "È necessario accettare l'Informativa sulla Privacy per proseguire.",
      errorGeneric: "Si è verificato un errore durante l'invio. Riprova più tardi.",
      privacyConsent: "Ho letto e accetto l'",
      privacyLinkText: "Informativa sulla Privacy",
      disclaimer: "Invieremo solo aggiornamenti rilevanti sul progetto. Puoi cancellare la tua iscrizione in qualsiasi momento.",
    },
    project: {
      eyebrow: "Documentazione e roadmap",
      title: "Obiettivi, tecnologia e percorso di sviluppo.",
      openPdf: "Apri l'executive summary (PDF)",
      pdfDesc: "Sintesi progettuale: architettura del concept, obiettivi per il prototipo da banco e fabbisogno tecnico.",
    },
    why: {
      stat1: {
        value: "35,8%",
        desc: "degli italiani invitati aderisce ai programmi di screening colorettale. Nessuna macro-area raggiunge la soglia minima raccomandata del 50%.",
        source: "Adesione screening 2024 (fascia 50–69 anni), linea tratteggiata = target 50%. Fonte: ONS [1]",
        north: "Nord",
        centre: "Centro",
        south: "Sud e Isole",
      },
      stat2: {
        desc: "sopravvivenza a 5 anni per il carcinoma colorettale se individuato in stadio localizzato, contro quello identificato in fase metastatica avanzata. Intercettare i segnali prima fa la differenza.",
        source: "Fonte: American Cancer Society / SEER [2]",
      },
    },
    roadmap: {
      title: "Dalla ricerca al prototipo e alla marcatura CE",
      lead: "Un dispositivo medico ingeribile richiede un iter rigoroso ai sensi del Regolamento UE 2017/745 (MDR). Ecco le fasi previste dal nostro piano di sviluppo:",
      steps: [
        {
          when: "Fase 1 · Oggi",
          title: "Concept e architettura",
          desc: "Modellazione 3D, simulazioni e selezione dei biosensori",
          isCurrent: true,
        },
        {
          when: "Fase 2",
          title: "Prototipo da banco (TRL 4)",
          desc: "Integrazione hardware, test in simulatore intestinale e deposito brevetto",
        },
        {
          when: "Fase 3",
          title: "Validazione preclinica",
          desc: "Test di biocompatibilità ISO 10993 e conformità elettromagnetica",
        },
        {
          when: "Fase 4",
          title: "Trial e studi clinici",
          desc: "Valutazione di fattibilità e studio comparativo con standard clinici",
        },
        {
          when: "Fase 5",
          title: "Certificazione CE (MDR)",
          desc: "Omologazione dispositivo medico per le versioni Lite e Dx",
        },
      ],
    },
    team: {
      eyebrow: "Il Team di sviluppo",
      title: "Competenze complementari tra biomedicina e farmacia.",
      subtitleRole: "Co-founder",
      members: [
        {
          initials: "NV",
          name: "Niccolò Vono",
          role: "Dottorando in Biotecnologie per la Medicina Molecolare · multi-omica del cancro colorettale",
          linkedin: "https://www.linkedin.com/in/niccolovono",
        },
        {
          initials: "CV",
          name: "Cristina Vocca",
          role: "Dottoranda in Sanità Pubblica · specializzanda in Farmacologia e Tossicologia Clinica",
          linkedin: "https://www.linkedin.com/in/cristina-vocca",
        },
        {
          initials: "GF",
          name: "Giuseppina Fruci",
          role: "Studentessa magistrale in Farmacia",
          linkedin: "https://www.linkedin.com/in/giuseppina-fruci",
        },
      ],
    },
    contact: {
      eyebrow: "Collabora con noi",
      title: "Cerchiamo i partner giusti e un Co-founder Tecnico per realizzare il prototipo.",
      lead: "Per trasformare il concept in un prototipo funzionale testato, siamo aperti a collaborazioni con figure chiave ed enti di ricerca:",
      email: "info@argogim.com",
      copyBtn: "Copia indirizzo",
      copiedBtn: "Copiato",
      areas: [
        { num: "01", title: "Co-founder Tecnico: Ingegneria Elettronica, Biomedica, Embedded Firmware ed Edge-AI" },
        { num: "02", title: "Reparti di Gastroenterologia e cliniche per definire i protocolli di validazione" },
        { num: "03", title: "Mentor ed esperti di regolatorio MedTech (MDR UE 2017/745 e ISO 10993)" },
        { num: "04", title: "Laboratori di ricerca specialistici in biosensori e microelettronica flessibile" },
      ],
    },
    footer: {
      disclaimer:
        "ARGO-GIM è un progetto e concept tecnologico in fase di ricerca e sviluppo. Non è un dispositivo medico certificato né è attualmente disponibile in commercio. Le informazioni contenute in questa pagina illustrano finalità progettuali e obiettivi scientifici e non costituiscono in alcun modo indicazioni diagnostiche o pareri clinici: per lo screening colorettale fare sempre riferimento ai programmi regionali del Servizio Sanitario Nazionale e alle raccomandazioni del proprio medico curante.",
      sources: [
        "Osservatorio Nazionale Screening (ONS), Rapporto screening colorettale 2024.",
        "American Cancer Society, 5-year survival rates by stage (dati SEER).",
      ],
      copyright: "© 2026 ARGO-GIM · info@argogim.com",
      privacyPolicy: "Informativa sulla Privacy",
      cookiePolicy: "Informativa sui Cookie",
    },
  },
  en: {
    nav: {
      capsule: "The capsule",
      comparison: "Innovation",
      routine: "How it will work",
      milestones: "Milestones",
      versions: "Lite and Dx",
      faq: "FAQ",
      project: "The project",
      waitlist: "Stay updated",
    },
    hero: {
      titlePrefix: "Your gut, ",
      titleHighlight: "seen from the inside.",
      lead: "An ingestible capsule concept designed for longitudinal gut health monitoring at home, combining high-resolution imaging and biosensors with no invasive preparation.",
      ctaPrimary: "Explore the capsule",
      ctaGhost: "Project & Roadmap",
      scrollCue: "Scroll",
    },
    statement: {
      headingDim: "The check-up so many people put off.",
      headingBold: "Our goal is to make it possible at home, with no queues and no dread.",
      lead: "Today individuals must choose between tests with limited insight and invasive hospital procedures. The ARGO-GIM concept is engineered to overcome this compromise, paving the way for accessible, early-stage prevention.",
    },
    acronym: {
      eyebrow: "Name Architecture",
      title: "What the ARGO-GIM Acronym Stands For",
      fullName: "Autonomous Real-time Gradient Overlay — Gastro Intestinal Monitor",
      lead: "Every element of the acronym reflects a deliberate scientific and engineering design aimed at overcoming the traditional barriers of capsule and hospital endoscopy.",
      items: [
        {
          letter: "A",
          word: "Autonomous",
          meaning: "Natural motility & local decision-making",
          tag: "Physiological motility & Edge-AI",
          desc: "The capsule advances naturally through the digestive tract driven by peristalsis, with no invasive robotic propulsion or external maneuvers.",
          deepDive: "On-board Edge-AI makes autonomous computational decisions locally: it evaluates optical and biochemical signals instant by instant, discarding redundancy and optimizing battery life.",
        },
        {
          letter: "R",
          word: "Real-time",
          meaning: "Continuous telemetry with no latency",
          tag: "Low-Power RF streaming",
          desc: "Instantaneous sampling and continuous wireless streaming of physiological packets to the lightweight wearable receiver vest.",
          deepDive: "Eliminates hospital post-exam download delays and offline storage constraints: telemetry packets and abnormal events are captured and correlated dynamically during daily life.",
        },
        {
          letter: "G / O",
          word: "Gradient Overlay",
          meaning: "Multidimensional biochemical mapping",
          tag: "Beyond surface photography",
          desc: "Dynamic correlation and overlay of continuous physicochemical gradients (pH/acidity, oxidative stress ROS, trace haemoglobin, temperature) onto visual imaging.",
          deepDive: "Conventional capsules capture surface photographs blind to biochemical status. ARGO-GIM creates a true multi-layered 'overlay' mapping continuous biochemical gradients against anatomical location, spotting sub-visual inflammation and cellular shifts before macroscopic lesions appear.",
        },
        {
          letter: "GIM",
          word: "Gastro Intestinal Monitor",
          meaning: "Longitudinal home-based monitoring",
          tag: "Accessible preventive screening",
          desc: "The clinical mission: transforming colorectal cancer screening and IBD management from a feared, sporadic ordeal into an accessible, periodic home routine.",
          deepDive: "An integrated ecosystem (capsule, sensor vest, mobile app, and structured physician report) conceived to break down the adherence barrier that leaves over 64% of eligible individuals unscreened.",
        },
      ],
    },
    explorer: {
      eyebrow: "Concept Architecture",
      title: "Not just seeing. Understanding.",
      dimLength: { value: "28 mm", label: "estimated length" },
      dimDiameter: { value: "12 mm", label: "diameter" },
      dimUse: { value: "single-use", label: "one exam, one capsule" },
      renderNote: "Concept render and architecture. Select a component to explore details.",
      parts: [
        {
          num: "01",
          title: "Miniaturized dual-end cameras",
          desc: "Engineered to film the intestinal lumen along the transit, with synchronized integrated LED illumination.",
        },
        {
          num: "02",
          title: "Integrated biosensor array",
          desc: "Will measure temperature, pH, reactive oxygen species (ROS), and haemoglobin: biochemical indicators invisible to optical imaging alone.",
        },
        {
          num: "03",
          title: "Microcontroller with on-board Edge-AI",
          desc: "Designed to detect abnormal frames and discard redundant ones locally, extending battery autonomy and accelerating medical review.",
        },
        {
          num: "04",
          title: "Ultra-low-power telemetry radio",
          desc: "Will transmit telemetry packets to the wearable vest, estimating the position and progression of the capsule.",
        },
        {
          num: "05",
          title: "Biocompatible solid-state battery",
          desc: "Engineered to deliver reliable autonomy throughout full physiological transit with high chemical safety standards.",
        },
        {
          num: "06",
          title: "3D Vision & NBI",
          tag: "Dx · R&D Stage",
          desc: "Structured lighting for volumetric lesion depth estimation and Narrow-Band Imaging for mucosal vasculature in the clinical model.",
          isDx: true,
        },
      ],
    },
    comparison: {
      eyebrow: "Technology Comparison",
      title: "How it advances beyond PillCam™ and conventional endoscopy capsules.",
      lead: "Commercial endoscopic capsules (such as PillCam™) pioneered wireless gastrointestinal imaging, but suffer from rigid procedural and sensory constraints. Here is how the ARGO-GIM concept is engineered to leap forward.",
      badgePillcam: "Conventional capsules (e.g. PillCam™)",
      badgeArgo: "ARGO-GIM Concept",
      viewCardsLabel: "Interactive Duel Cards",
      viewTableLabel: "Technical Matrix",
      filterAll: "All Dimensions",
      filterComfort: "Patient Experience",
      filterSensors: "Sensors & Diagnostics",
      filterAi: "Artificial Intelligence",
      stats: {
        invasiveness: { label: "Preparation burden", trad: "Intensive laxatives & fasting", argo: "Zero laxatives or preparation" },
        modalities: { label: "Detection channels", trad: "1 (Optical video only)", argo: "5 (Video + pH + ROS + Hb + °C)" },
        frameAnalysis: { label: "Frame processing", trad: "Up to 50,000 raw frames", argo: "On-board Edge-AI filtering" },
      },
      headers: {
        feature: "Comparison Dimension",
        traditional: "Conventional capsules (e.g. PillCam™)",
        argo: "ARGO-GIM Project",
      },
      rows: [
        {
          id: "prep",
          category: "comfort",
          feature: "Bowel Preparation",
          traditional: "Mandatory and demanding: requires drinking large volumes of osmotic laxatives and strict fasting to clear the optical field.",
          traditionalBadge: "Intensive laxatives required",
          argo: "Non-invasive: electrochemical biosensors and filtering algorithms operate even within natural physiological contents.",
          argoBadge: "Zero traumatic preparation",
          deepDive: "Bowel prep is the single leading deterrent (responsible for >45% of screening refusals). Eliminating it removes the primary barrier stopping at-risk patients from getting tested.",
          highlight: true,
        },
        {
          id: "data",
          category: "sensors",
          feature: "Captured Data Modalities",
          traditional: "Optical video only: surface mucosal photography that detects lesions only when already macroscopically visible to the naked eye.",
          traditionalBadge: "Surface imagery only",
          argo: "Multimodal: high-resolution dual-end optics + electrochemical biosensor array (luminal pH, oxidative stress ROS, trace haemoglobin, temperature).",
          argoBadge: "Multimodal: Video + 4 Biosensors",
          deepDive: "Malignant transformation and mucosal inflammation start biochemically months before visible anatomical protrusions or ulcers appear. ARGO-GIM spots these sub-visual shifts.",
          highlight: true,
        },
        {
          id: "ai",
          category: "ai",
          feature: "Frame Processing & Curation",
          traditional: "Undifferentiated recording of up to 50,000 raw frames; requires hours of manual frame-by-frame review by a gastroenterologist.",
          traditionalBadge: "Up to 50,000 raw frames",
          argo: "On-board Edge-AI: instantaneous local anomaly classification and automatic pruning of redundant frames.",
          argoBadge: "On-board Edge-AI & rapid report",
          deepDive: "Local inference trims transmitted RF packets by up to 80%, preserving battery reserves and enabling an AI-assisted structured report in minutes.",
          highlight: true,
        },
        {
          id: "setting",
          category: "comfort",
          feature: "Setting & Routine of Use",
          traditional: "Hospital or specialist outpatient procedure, scheduled weeks or months ahead with dedicated staff oversight.",
          traditionalBadge: "Hospital specialist procedure",
          argo: "Engineered for home routines (Lite for periodic check-ups) and advanced clinical hospital workflows (Dx).",
          argoBadge: "Home routine (Lite) / Hospital (Dx)",
          deepDive: "Allowing check-ups at home without altering daily life normalizes preventive screening, transforming it into an unburdensome, repeatable wellness routine.",
          highlight: false,
        },
        {
          id: "inflam",
          category: "sensors",
          feature: "Early Inflammation & Lesion Detection",
          traditional: "Blind to microscopic inflammation; detects disease only after the epithelium is macroscopically ulcerated or bleeding visibly.",
          traditionalBadge: "Only visible established lesions",
          argo: "Sub-visual molecular sensitivity: detects abnormal pH dips, free radical accumulation (ROS), and occult trace blood.",
          argoBadge: "Early biochemical detection",
          deepDive: "Correlating multi-parameter gradients (Gradient Overlay) with anatomical coordinates alerts physicians to early mucosal dysbiosis and dysplasia before malignant degeneration.",
          highlight: true,
        },
      ],
    },
    film: {
      caption: "Miniaturized engineering with dimensions aligned with approved human endoscopic capsules.",
      badge: "3D Concept Animation",
    },
    routine: {
      eyebrow: "Future User Journey",
      title: "How the home routine will work.",
      moments: [
        {
          when: "Morning",
          title: "Ingestion at home",
          desc: "Designed to be swallowed with a glass of water, without aggressive laxatives or sedation.",
        },
        {
          when: "Right after",
          title: "Put on the sensor vest",
          desc: "A lightweight, comfortable garment worn under everyday clothes, equipped with tracking antennas.",
        },
        {
          when: "Throughout the day",
          title: "Regular daily activities",
          desc: "The compact receiver records telemetry while you carry out your normal daily routine in complete freedom.",
        },
        {
          when: "Post-transit",
          title: "App synthesis & report",
          desc: "The companion app computes an overall gut health score and compiles a report ready to share with your physician.",
        },
      ],
      appExample: "Interface Concept",
      giIndexLabel: "GI INDEX",
    },
    journey: {
      simBadge: "Demonstrative simulation · mathematical model data",
      title: "Simulated colon transit journey.",
      lead: "As you scroll, the capsule moves through the colonic tract while biosensors illustrate simulated biochemical readings.",
      labels: ["CAECUM", "ASCENDING", "TRANSVERSE", "DESCENDING", "SIGMOID", "RECTUM"],
      elapsed: "Estimated time",
      readings: {
        ph: "pH",
        temperature: "Temperature",
        hb: "Haemoglobin",
        ros: "ROS",
        normal: "normal",
        phChartTitle: "pH trend over transit",
      },
      framesTemplate: (seen, sent) => `${seen} frames evaluated on-board · ${sent} transmitted via AI`,
    },
    milestones: {
      eyebrow: "Milestones",
      title: "Recognitions and path so far.",
      lead: "ARGO-GIM stems from biomedical research and active engagement with startup and medtech ecosystems. Key milestones include:",
      items: [
        {
          step: "01",
          title: "CAL.HUB.RIA - LAB",
          desc: "Talent, ideas, value for the future: acceleration and scientific validation program.",
          linkText: "Learn about the program",
          linkUrl: "https://biotecnomed.it/calhubria-lab/",
          badge: "Acceleration & Lab",
        },
        {
          step: "02",
          title: "Talentis Competition — Maratea Stage",
          desc: "Competitive selection and pitch presentation at the national Talentis innovation stage.",
          badge: "Competitive Selection",
        },
        {
          step: "03",
          title: "Next Up: Talentis National Finals — CAPRI 2026",
          desc: "Selected as Best Runner-up for the prestigious national finals in Capri.",
          badge: "Best Runner-up",
        },
      ],
    },
    versions: {
      eyebrow: "Planned Product Versions",
      title: "Designed for personal health monitoring and clinical practice.",
      lite: {
        who: "Personal Health",
        title: "Home-based longitudinal insight.",
        claim: "Engineered to track gut health indicators over time, pointing users to timely medical advice when changes occur.",
        features: [
          "Dual-end imaging and biochemical biosensors",
          "AI-driven gut health index",
          "Telemetry history and exportable doctor report",
        ],
      },
      dx: {
        who: "Specialist Clinical Device",
        title: "An enhanced diagnostic tool for gastroenterologists.",
        claim: "Designed to reduce review hours to minutes, highlighting suspect lesions with the physician maintaining full diagnostic oversight.",
        features: [
          "Dual RGB + NBI optics and 3D depth mapping",
          "Integrated Paris, Kudo, and NICE classification aids",
          "Native FHIR protocol hospital EHR integration",
        ],
      },
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Clear facts on the project stage.",
      lead: "Scientific and regulatory transparency regarding our current status.",
      items: [
        {
          q: "Is ARGO-GIM available for purchase or use today?",
          a: "No. ARGO-GIM is currently in the conceptual design, architectural engineering, and benchtop prototyping phase. Prior to market launch, it must complete benchtop prototype validation, ISO 10993 biocompatibility testing, formal clinical trials, and obtain CE marking under EU MDR 2017/745.",
          defaultOpen: true,
        },
        {
          q: "How does it differ from existing endoscopy capsules on the market?",
          a: "Existing devices (like PillCam™) are purely visual and require exhaustive bowel preparation with laxatives to clear the field. ARGO-GIM combines cameras with biochemical biosensors (pH, ROS, haemoglobin, temperature) designed to capture diagnostic telemetry even within physiological contents.",
        },
        {
          q: "Are there risks involved in swallowing a capsule of this size?",
          a: "Ingestible endoscopy capsules have an established clinical safety track record spanning over twenty years. ARGO-GIM adheres to standard dimensions (28 × 12 mm) and incorporates ISO 10993 compliant biocompatible casings with solid-state battery chemistry free of flammable liquid electrolytes.",
        },
        {
          q: "What happens to the capsule after the examination?",
          a: "It is naturally expelled via normal peristalsis. The sensor vest tracks its transit path and notifies the user once the exam has concluded. The capsule is single-use to ensure optimal hygiene and eliminate cross-contamination.",
        },
        {
          q: "Does ARGO-GIM replace colonoscopy or national screening programs?",
          a: "No. ARGO-GIM Lite is not a diagnostic replacement for colonoscopy: individuals must continue participating in regional colorectal screening programs and consult their doctors. The Dx variant is engineered to assist specialist physicians, not replace them.",
        },
        {
          q: "How are personal and telemetry data handled?",
          a: "Data processing fully complies with the EU General Data Protection Regulation (GDPR 2016/679). Telemetry is processed on-board with end-to-end encryption, and no personal data is shared with third parties without explicit, anonymized consent.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Stay Updated",
      title: "Follow ARGO-GIM's development journey.",
      lead: "Leave your email to receive updates on major project milestones, from benchtop prototype tests to future clinical trials.",
      placeholder: "Enter your email address",
      button: "Stay updated",
      submitting: "Submitting...",
      success: "Thank you! Your email has been registered.",
      errorInvalid: "Please enter a valid email address.",
      errorPrivacy: "You must accept the Privacy Policy to proceed.",
      errorGeneric: "An error occurred while submitting. Please try again later.",
      privacyConsent: "I have read and agree to the ",
      privacyLinkText: "Privacy Policy",
      disclaimer: "We only send meaningful development updates. You can unsubscribe at any time.",
    },
    project: {
      eyebrow: "Documentation & Roadmap",
      title: "Objectives, technology, and development path.",
      openPdf: "Open the Executive Summary (PDF)",
      pdfDesc: "Project overview: concept architecture, benchtop prototype goals, and technical requirements.",
    },
    why: {
      stat1: {
        value: "35.8%",
        desc: "of invited citizens participate in colorectal screening in Italy. No geographical area reaches the recommended 50% target.",
        source: "2024 Screening Uptake (ages 50–69), dashed line = 50% target. Source: ONS [1]",
        north: "North",
        centre: "Centre",
        south: "South & Islands",
      },
      stat2: {
        desc: "5-year colorectal cancer survival rate when detected at a localized stage, versus advanced metastatic stage. Early detection fundamentally changes outcomes.",
        source: "Source: American Cancer Society / SEER [2]",
      },
    },
    roadmap: {
      title: "From research to prototype and CE marking",
      lead: "An ingestible medical device requires a rigorous pathway under EU Regulation 2017/745 (MDR). Here is our development roadmap:",
      steps: [
        {
          when: "Phase 1 · Today",
          title: "Concept & Architecture",
          desc: "3D CAD modeling, simulations, and biosensor selection",
          isCurrent: true,
        },
        {
          when: "Phase 2",
          title: "Benchtop Prototype (TRL 4)",
          desc: "Hardware integration, in-vitro simulated gut transit tests, and patent filing",
        },
        {
          when: "Phase 3",
          title: "Preclinical Validation",
          desc: "ISO 10993 biocompatibility testing and EMC electrical safety",
        },
        {
          when: "Phase 4",
          title: "Clinical Trials",
          desc: "Feasibility evaluations and comparative clinical studies",
        },
        {
          when: "Phase 5",
          title: "CE Mark Certification (MDR)",
          desc: "Medical device approval for Lite and Dx versions",
        },
      ],
    },
    team: {
      eyebrow: "Development Team",
      title: "Complementary expertise across biomedicine and pharmacy.",
      subtitleRole: "Co-founder",
      members: [
        {
          initials: "NV",
          name: "Niccolò Vono",
          role: "PhD student in Biotechnology for Molecular Medicine · colorectal cancer multi-omics",
          linkedin: "https://www.linkedin.com/in/niccolovono",
        },
        {
          initials: "CV",
          name: "Cristina Vocca",
          role: "PhD student in Public Health · resident in Clinical Pharmacology and Toxicology",
          linkedin: "https://www.linkedin.com/in/cristina-vocca",
        },
        {
          initials: "GF",
          name: "Giuseppina Fruci",
          role: "Master's student in Pharmacy",
          linkedin: "https://www.linkedin.com/in/giuseppina-fruci",
        },
      ],
    },
    contact: {
      eyebrow: "Collaborate With Us",
      title: "We are seeking partners and a Technical Co-founder to build the working prototype.",
      lead: "To advance from concept to an experimentally validated working prototype, we welcome collaborations with key technical profiles and research entities:",
      email: "info@argogim.com",
      copyBtn: "Copy address",
      copiedBtn: "Copied",
      areas: [
        { num: "01", title: "Technical Co-founder: Electronic & Biomedical Engineering, Embedded Firmware & Edge-AI" },
        { num: "02", title: "Gastroenterology departments and clinics to define clinical protocols" },
        { num: "03", title: "MedTech regulatory mentors (EU MDR 2017/745 and ISO 10993)" },
        { num: "04", title: "Research laboratories specializing in biosensors and flexible microelectronics" },
      ],
    },
    footer: {
      disclaimer:
        "ARGO-GIM is an early-stage technological concept and research project. It is not an approved medical device and is not commercially available. The content on this website illustrates scientific and design objectives and does not constitute medical advice or diagnostic evaluation. For colorectal cancer screening, always adhere to national healthcare recommendations and consult your physician.",
      sources: [
        "Italian National Screening Observatory (ONS), 2024 Colorectal Screening Report.",
        "American Cancer Society, 5-year survival rates by stage (SEER data).",
      ],
      copyright: "© 2026 ARGO-GIM · info@argogim.com",
      privacyPolicy: "Privacy Policy",
      cookiePolicy: "Cookie Policy",
    },
  },
};

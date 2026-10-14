export type Lang = 'it' | 'en';

export interface Translations {
  nav: {
    capsule: string;
    routine: string;
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
    errorGeneric: string;
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
    members: Array<{
      initials: string;
      name: string;
      role: string;
      linkedin?: string;
    }>;
    partnerTitle: string;
    partnerUrl: string;
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
  };
}

export const translations: Record<Lang, Translations> = {
  it: {
    nav: {
      capsule: "La capsula",
      routine: "Come si usa",
      versions: "Lite e Dx",
      faq: "Domande",
      project: "Il progetto",
      waitlist: "Lista d'attesa",
    },
    hero: {
      titlePrefix: "Il tuo intestino, ",
      titleHighlight: "visto da dentro.",
      lead: "Una capsula da ingerire a casa. Immagini e biosensori in un unico esame, senza preparazione intestinale.",
      ctaPrimary: "Scopri la capsula",
      ctaGhost: "Per partner e investitori",
      scrollCue: "Scorri",
    },
    statement: {
      headingDim: "Il controllo che tutti rimandiamo.",
      headingBold: "Adesso puoi farlo a casa, senza code e senza paura.",
      lead: "Oggi devi scegliere tra un test semplice che vede poco e un esame completo che spaventa. ARGO-GIM nasce per non dover più scegliere.",
    },
    explorer: {
      eyebrow: "La capsula",
      title: "Non solo vedere. Capire.",
      dimLength: { value: "28 mm", label: "lunghezza" },
      dimDiameter: { value: "12 mm", label: "diametro" },
      dimUse: { value: "monouso", label: "un esame, una capsula" },
      renderNote: "Render di concept. Tocca un numero o scorri l'elenco.",
      parts: [
        {
          num: "01",
          title: "Fotocamere alle due estremità",
          desc: "Riprendono la parete intestinale lungo tutto il percorso, con l'illuminazione integrata.",
        },
        {
          num: "02",
          title: "Biosensori",
          desc: "Misurano temperatura, pH, specie reattive dell'ossigeno ed emoglobina: quello che le immagini non possono vedere.",
        },
        {
          num: "03",
          title: "Intelligenza artificiale a bordo",
          desc: "Il microcontrollore tiene i fotogrammi utili e scarta quelli ripetuti. Si trasmette meno, la batteria dura di più.",
        },
        {
          num: "04",
          title: "Radio a basso consumo",
          desc: "Invia i dati al gilet indossato, che riceve il segnale e stima la posizione della capsula.",
        },
        {
          num: "05",
          title: "Batteria allo stato solido",
          desc: "Pensata per durare tutto il transito, con una chimica più sicura di quelle a elettrolita liquido.",
        },
        {
          num: "06",
          title: "Visione 3D",
          tag: "Dx · in sviluppo",
          desc: "Luce strutturata per stimare la profondità e doppia fotocamera RGB e NBI per la versione clinica.",
          isDx: true,
        },
      ],
    },
    film: {
      caption: "Tutto dentro una capsula dalle dimensioni simili alle capsule endoscopiche già in uso.",
      badge: "Animazione di concept",
    },
    routine: {
      eyebrow: "Come si usa",
      title: "Una giornata normale. Nessuna sala d'attesa.",
      moments: [
        {
          when: "Mattina",
          title: "Ingerisci la capsula",
          desc: "A casa, con un bicchiere d'acqua. Senza lassativi né sedazione.",
        },
        {
          when: "Subito dopo",
          title: "Indossa il gilet",
          desc: "Leggero, sotto i vestiti. Le antenne seguono la capsula lungo il percorso.",
        },
        {
          when: "Durante il giorno",
          title: "Vivi la tua giornata",
          desc: "Il ricevitore registra tutto e ti mostra in tempo reale a che punto sei.",
        },
        {
          when: "Alla fine",
          title: "Leggi il tuo report",
          desc: "L'app riassume l'esame in un indice di salute intestinale e lo confronta con i precedenti.",
        },
      ],
      appExample: "Esempio",
      giIndexLabel: "INDICE GI",
    },
    journey: {
      simBadge: "Simulazione dimostrativa · dati non reali",
      title: "Segui il viaggio della capsula.",
      lead: "Scorri: la capsula attraversa il colon e i biosensori aggiornano le letture, tratto dopo tratto.",
      labels: ["CIECO", "ASCENDENTE", "TRASVERSO", "DISCENDENTE", "SIGMA", "RETTO"],
      elapsed: "Trascorse",
      readings: {
        ph: "pH",
        temperature: "Temperatura",
        hb: "Emoglobina",
        ros: "ROS",
        normal: "nella norma",
        phChartTitle: "Andamento del pH",
      },
      framesTemplate: (seen, sent) => `${seen} fotogrammi analizzati a bordo · ${sent} trasmessi`,
    },
    versions: {
      eyebrow: "Due versioni",
      title: "Per te. E per il tuo medico.",
      lite: {
        who: "Personal health",
        title: "Conosci il tuo intestino, nel tempo.",
        claim: "Se qualcosa cambia, te lo segnala e ti accompagna dal medico al momento giusto.",
        features: [
          "Fotocamera e biosensori",
          "Indice di salute intestinale con IA",
          "Report e storico nell'app",
        ],
      },
      dx: {
        who: "Uso clinico",
        title: "Un secondo sguardo, accanto al medico.",
        claim: "Ore di video diventano pochi minuti di revisione, con le lesioni già evidenziate e classificate. L'ultima parola resta al medico.",
        features: [
          "Doppia fotocamera RGB e NBI, visione 3D",
          "Classificazione Paris, Kudo e NICE",
          "Integrazione FHIR con i sistemi ospedalieri",
        ],
      },
    },
    faq: {
      eyebrow: "Domande frequenti",
      title: "Quello che ti stai chiedendo.",
      lead: "Se la tua domanda non è qui, scrivici.",
      items: [
        {
          q: "Posso già usare ARGO-GIM?",
          a: "Non ancora. ARGO-GIM è un progetto in sviluppo: oggi siamo alla fase di concept e design, e il prossimo passo è il prototipo funzionale. Prima di arrivare a te dovrà superare test preclinici, studi clinici e la marcatura CE come dispositivo medico.",
          defaultOpen: true,
        },
        {
          q: "Ingerire una capsula è sicuro?",
          a: "Le capsule endoscopiche si usano in clinica da oltre vent'anni. ARGO-GIM è progettata con materiali biocompatibili secondo la norma ISO 10993, radio a bassa potenza e una batteria allo stato solido. La sicurezza andrà comunque dimostrata nei test preclinici e clinici previsti dalla roadmap.",
        },
        {
          q: "Si sente mentre attraversa l'intestino?",
          a: "Ha dimensioni simili alle capsule endoscopiche già in uso, 28 × 12 mm, e si ingerisce con un po' d'acqua. Con le capsule attuali la maggior parte delle persone non avverte il transito.",
        },
        {
          q: "Cosa succede alla capsula dopo l'esame?",
          a: "Viene espulsa naturalmente. Il gilet ne segue il percorso fino all'espulsione, così sai quando l'esame è concluso. È monouso: ogni esame usa una capsula nuova.",
        },
        {
          q: "Sostituisce lo screening o la colonscopia?",
          a: "No. ARGO-GIM Lite ti aiuta a conoscere e seguire nel tempo la salute del tuo intestino, ma non fa diagnosi: continua a seguire il programma di screening della tua regione e le indicazioni del tuo medico. Se qualcosa cambia, l'app te lo segnala e ti invita a parlarne con un medico. ARGO-GIM Dx è pensata per l'uso clinico, sempre sotto la guida del medico.",
        },
        {
          q: "Che fine fanno i miei dati?",
          a: "La capsula elabora i dati a bordo e trasmette solo ciò che serve, con cifratura dalla capsula all'app. Il progetto segue il GDPR: i dati si usano per la ricerca solo in forma anonima e con il tuo consenso.",
        },
        {
          q: "Quanto costerà?",
          a: "Il prezzo verrà definito insieme al prototipo e ai primi partner. Il nostro obiettivo è un esame accessibile, che si possa ripetere nel tempo.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Lista d'attesa",
      title: "Vuoi sapere quando sarà pronta?",
      lead: "Lasciaci la tua email: ti scriviamo solo per i passi importanti, dal primo prototipo agli studi clinici.",
      placeholder: "La tua email",
      button: "Iscriviti",
      submitting: "Invio in corso...",
      success: "Grazie! La tua email è stata registrata con successo.",
      errorInvalid: "Inserisci un indirizzo email valido.",
      errorGeneric: "Si è verificato un errore. Riprova più tardi.",
      disclaimer: "Nessun invio frequente o spam. Puoi cancellarti in qualsiasi momento.",
    },
    project: {
      eyebrow: "Per partner e investitori",
      title: "Perché lo stiamo costruendo, e come.",
      openPdf: "Apri l'executive summary (PDF)",
      pdfDesc: "Due pagine: problema, soluzione, mercato, modello, roadmap e team.",
    },
    why: {
      stat1: {
        value: "35,8%",
        desc: "degli italiani invitati fa lo screening del colon-retto. Nessuna area raggiunge l'obiettivo del 50%.",
        source: "Adesione 2024, 50–69 anni; linea tratteggiata = obiettivo 50%. Fonte [1]",
        north: "Nord",
        centre: "Centro",
        south: "Sud e Isole",
      },
      stat2: {
        desc: "sopravvivenza a 5 anni del cancro del colon scoperto in fase localizzata, contro quello scoperto in fase metastatica. Arrivare prima cambia tutto.",
        source: "Fonte [2]",
      },
    },
    roadmap: {
      title: "Dal concept alla marcatura CE",
      lead: "Una capsula ingeribile è un dispositivo medico ai sensi del Regolamento UE 2017/745: per entrambe le versioni il percorso passa dalla marcatura CE.",
      steps: [
        {
          when: "Oggi",
          title: "Concept e design",
          desc: "Architettura, render, modelli 3D",
          isCurrent: true,
        },
        {
          when: "Fase 2",
          title: "Prototipo funzionale",
          desc: "Biosensori e radio su banco, brevetto",
        },
        {
          when: "Fase 3",
          title: "Test preclinici",
          desc: "Biocompatibilità e sicurezza elettrica",
        },
        {
          when: "Fase 4",
          title: "Studi clinici",
          desc: "Fattibilità, poi confronto con la colonscopia",
        },
        {
          when: "Fase 5",
          title: "Marcatura CE",
          desc: "Prima Lite, poi Dx",
        },
      ],
    },
    team: {
      eyebrow: "Team New-tale",
      title: "Tra laboratorio e clinica.",
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
          role: "Dottoranda in Sanità pubblica · specializzanda in Farmacologia e Tossicologia Clinica",
          linkedin: "https://www.linkedin.com/in/cristina-vocca",
        },
        {
          initials: "GF",
          name: "Giuseppina Fruci",
          role: "Studentessa di Farmacia",
          linkedin: "https://www.linkedin.com/in/giuseppina-fruci",
        },
      ],
      partnerTitle: "Partner tecnico e tecnologico",
      partnerUrl: "https://www.biotecnomed.it",
    },
    contact: {
      eyebrow: "Costruiamolo insieme",
      title: "Cerchiamo i partner giusti per arrivare al prototipo.",
      lead: "Se lavori in uno di questi ambiti, scrivici. Anche chi non investe può aiutarci.",
      email: "info@argogim.com",
      copyBtn: "Copia indirizzo",
      copiedBtn: "Copiato",
      areas: [
        { num: "01", title: "Ingegneria elettronica e biomedica" },
        { num: "02", title: "Reparti di gastroenterologia per gli studi clinici" },
        { num: "03", title: "Mentor e investitori del settore medtech" },
        { num: "04", title: "Aziende sanitarie per progetti pilota" },
      ],
    },
    footer: {
      disclaimer:
        "ARGO-GIM è un concept in fase di sviluppo. Non è un dispositivo medico certificato né disponibile in commercio. Le informazioni descrivono obiettivi di progetto e non costituiscono indicazioni cliniche: per lo screening del colon-retto segui le indicazioni del tuo medico e del programma regionale. Immagini, animazioni e schermate sono di concept.",
      sources: [
        "Osservatorio Nazionale Screening, adesione allo screening colorettale 2024.",
        "American Cancer Society, sopravvivenza a 5 anni per stadio (dati SEER 2014–2020).",
      ],
      copyright: "© 2026 New-tale · ARGO-GIM",
    },
  },
  en: {
    nav: {
      capsule: "The capsule",
      routine: "How it works",
      versions: "Lite and Dx",
      faq: "FAQ",
      project: "The project",
      waitlist: "Waitlist",
    },
    hero: {
      titlePrefix: "Your gut, ",
      titleHighlight: "seen from the inside.",
      lead: "A capsule you swallow at home. Imaging and biosensors in a single exam, with no bowel preparation.",
      ctaPrimary: "Discover the capsule",
      ctaGhost: "For partners and investors",
      scrollCue: "Scroll",
    },
    statement: {
      headingDim: "The check-up we all put off.",
      headingBold: "Now you can do it at home, with no queues and no fear.",
      lead: "Today you have to choose between a simple test that sees little and a complete exam that scares people. ARGO-GIM is built so you no longer have to choose.",
    },
    explorer: {
      eyebrow: "The capsule",
      title: "Not just seeing. Understanding.",
      dimLength: { value: "28 mm", label: "length" },
      dimDiameter: { value: "12 mm", label: "diameter" },
      dimUse: { value: "single-use", label: "one exam, one capsule" },
      renderNote: "Concept render. Tap a number or scroll the list.",
      parts: [
        {
          num: "01",
          title: "Cameras at both ends",
          desc: "They film the intestinal wall along the whole journey, with built-in lighting.",
        },
        {
          num: "02",
          title: "Biosensors",
          desc: "They measure temperature, pH, reactive oxygen species and haemoglobin: what images cannot see.",
        },
        {
          num: "03",
          title: "On-board artificial intelligence",
          desc: "The microcontroller keeps the useful frames and discards repeated ones. Less is transmitted, the battery lasts longer.",
        },
        {
          num: "04",
          title: "Low-power radio",
          desc: "Sends the data to the vest, which receives the signal and estimates where the capsule is.",
        },
        {
          num: "05",
          title: "Solid-state battery",
          desc: "Designed to last the whole transit, with a safer chemistry than liquid-electrolyte cells.",
        },
        {
          num: "06",
          title: "3D vision",
          tag: "Dx · in development",
          desc: "Structured light to estimate depth, plus dual RGB and NBI cameras for the clinical version.",
          isDx: true,
        },
      ],
    },
    film: {
      caption: "All inside a capsule about the size of the endoscopy capsules already in use.",
      badge: "Concept animation",
    },
    routine: {
      eyebrow: "How it works",
      title: "An ordinary day. No waiting room.",
      moments: [
        {
          when: "Morning",
          title: "Swallow the capsule",
          desc: "At home, with a glass of water. No laxatives, no sedation.",
        },
        {
          when: "Right after",
          title: "Put on the vest",
          desc: "Light, under your clothes. Its antennas follow the capsule along the way.",
        },
        {
          when: "During the day",
          title: "Go about your day",
          desc: "The receiver records everything and shows you in real time how far along you are.",
        },
        {
          when: "At the end",
          title: "Read your report",
          desc: "The app sums up the exam in a gut health index and compares it with your previous ones.",
        },
      ],
      appExample: "Example",
      giIndexLabel: "GI INDEX",
    },
    journey: {
      simBadge: "Demo simulation · not real data",
      title: "Follow the capsule's journey.",
      lead: "Scroll: the capsule travels through the colon and the biosensors update their readings, section by section.",
      labels: ["CAECUM", "ASCENDING", "TRANSVERSE", "DESCENDING", "SIGMOID", "RECTUM"],
      elapsed: "Elapsed",
      readings: {
        ph: "pH",
        temperature: "Temperature",
        hb: "Haemoglobin",
        ros: "ROS",
        normal: "normal",
        phChartTitle: "pH over the journey",
      },
      framesTemplate: (seen, sent) => `${seen} frames analysed on board · ${sent} transmitted`,
    },
    versions: {
      eyebrow: "Two versions",
      title: "For you. And for your doctor.",
      lite: {
        who: "Personal health",
        title: "Know your gut, over time.",
        claim: "If something changes, it tells you and points you to a doctor at the right moment.",
        features: [
          "Camera and biosensors",
          "AI-based gut health index",
          "Reports and history in the app",
        ],
      },
      dx: {
        who: "Clinical use",
        title: "A second look, alongside the doctor.",
        claim: "Hours of video become a few minutes of review, with lesions already highlighted and classified. The doctor always has the final word.",
        features: [
          "Dual RGB and NBI cameras, 3D vision",
          "Paris, Kudo and NICE classification",
          "FHIR integration with hospital systems",
        ],
      },
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What you are probably wondering.",
      lead: "If your question is not here, write to us.",
      items: [
        {
          q: "Can I use ARGO-GIM yet?",
          a: "Not yet. ARGO-GIM is a project in development: today we are at the concept and design stage, and the next step is a working prototype. Before it reaches you it must pass preclinical tests, clinical studies and CE marking as a medical device.",
          defaultOpen: true,
        },
        {
          q: "Is swallowing a capsule safe?",
          a: "Endoscopy capsules have been used in clinical practice for more than twenty years. ARGO-GIM is designed with biocompatible materials under ISO 10993, low-power radio and a solid-state battery. Its safety still has to be demonstrated in the preclinical and clinical tests on the roadmap.",
        },
        {
          q: "Will I feel it moving through my gut?",
          a: "It is about the size of the endoscopy capsules already in use, 28 × 12 mm, and you swallow it with a little water. With current capsules most people do not feel the transit.",
        },
        {
          q: "What happens to the capsule after the exam?",
          a: "It passes naturally. The vest follows it until it leaves the body, so you know when the exam is over. It is single-use: every exam uses a new capsule.",
        },
        {
          q: "Does it replace screening or colonoscopy?",
          a: "No. ARGO-GIM Lite helps you understand and follow your gut health over time, but it does not diagnose: keep following your regional screening programme and your doctor's advice. If something changes, the app tells you and suggests you talk to a doctor. ARGO-GIM Dx is designed for clinical use, always under a doctor's guidance.",
        },
        {
          q: "What happens to my data?",
          a: "The capsule processes data on board and transmits only what is needed, encrypted from capsule to app. The project follows the GDPR: data is used for research only when anonymised and with your consent.",
        },
        {
          q: "How much will it cost?",
          a: "The price will be set together with the prototype and our first partners. Our goal is an affordable exam that can be repeated over time.",
        },
      ],
    },
    waitlist: {
      eyebrow: "Waitlist",
      title: "Want to know when it is ready?",
      lead: "Leave us your email: we will only write for the big steps, from the first prototype to clinical studies.",
      placeholder: "Your email address",
      button: "Join",
      submitting: "Submitting...",
      success: "Thank you! You're now on the waitlist.",
      errorInvalid: "Please enter a valid email address.",
      errorGeneric: "An error occurred. Please try again later.",
      disclaimer: "No spam, ever. You can unsubscribe at any time.",
    },
    project: {
      eyebrow: "For partners and investors",
      title: "Why we are building it, and how.",
      openPdf: "Open the executive summary (PDF)",
      pdfDesc: "Two pages: problem, solution, market, business model, roadmap and team.",
    },
    why: {
      stat1: {
        value: "35.8%",
        desc: "of the Italians invited take part in colorectal screening. No area reaches the 50% target.",
        source: "Uptake 2024, ages 50–69; dashed line = 50% target. Source [1]",
        north: "North",
        centre: "Centre",
        south: "South and islands",
      },
      stat2: {
        desc: "5-year survival for colon cancer found at a localized stage, versus at a metastatic stage. Getting there earlier changes everything.",
        source: "Source [2]",
      },
    },
    roadmap: {
      title: "From concept to CE marking",
      lead: "An ingestible capsule is a medical device under EU Regulation 2017/745: for both versions the path goes through CE marking.",
      steps: [
        {
          when: "Today",
          title: "Concept and design",
          desc: "Architecture, renders, 3D models",
          isCurrent: true,
        },
        {
          when: "Phase 2",
          title: "Working prototype",
          desc: "Biosensors and radio on the bench, patent",
        },
        {
          when: "Phase 3",
          title: "Preclinical tests",
          desc: "Biocompatibility and electrical safety",
        },
        {
          when: "Phase 4",
          title: "Clinical studies",
          desc: "Feasibility, then comparison with colonoscopy",
        },
        {
          when: "Phase 5",
          title: "CE marking",
          desc: "Lite first, then Dx",
        },
      ],
    },
    team: {
      eyebrow: "The New-tale team",
      title: "Between the lab and the clinic.",
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
          role: "Pharmacy student",
          linkedin: "https://www.linkedin.com/in/giuseppina-fruci",
        },
      ],
      partnerTitle: "Technical and technology partner",
      partnerUrl: "https://www.biotecnomed.it",
    },
    contact: {
      eyebrow: "Let's build it together",
      title: "We are looking for the right partners to reach the prototype.",
      lead: "If you work in one of these fields, write to us. You can help even if you are not investing.",
      email: "info@argogim.com",
      copyBtn: "Copy address",
      copiedBtn: "Copied",
      areas: [
        { num: "01", title: "Electronic and biomedical engineering" },
        { num: "02", title: "Gastroenterology units for clinical studies" },
        { num: "03", title: "Medtech mentors and investors" },
        { num: "04", title: "Healthcare providers for pilot projects" },
      ],
    },
    footer: {
      disclaimer:
        "ARGO-GIM is a concept in development. It is not a certified medical device and is not on the market. This page describes design goals and is not clinical advice: for colorectal screening, follow your doctor and your regional programme. Images, animations and screens are concepts.",
      sources: [
        "Italian National Screening Observatory, colorectal screening uptake 2024.",
        "American Cancer Society, 5-year survival by stage (SEER data 2014–2020).",
      ],
      copyright: "© 2026 New-tale · ARGO-GIM",
    },
  },
};

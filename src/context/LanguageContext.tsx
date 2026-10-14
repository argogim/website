"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Lang, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "it",
  setLang: () => {},
  t: translations.it,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("argo-lang") as Lang | null;
      if (saved && (saved === "it" || saved === "en")) {
        setLangState(saved);
        document.documentElement.lang = saved;
      } else if (
        typeof navigator !== "undefined" &&
        /^en\b/i.test(navigator.language || "") &&
        !/^it/i.test(navigator.language || "")
      ) {
        setLangState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
    try {
      localStorage.setItem("argo-lang", newLang);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

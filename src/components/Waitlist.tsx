"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export const Waitlist: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMsg(t.waitlist.errorInvalid);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || t.waitlist.errorGeneric);
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || t.waitlist.errorGeneric);
    }
  };

  return (
    <section className="waitlist" id="lista">
      <div className="wrap">
        <div className="wl">
          <div>
            <span className="eyebrow">{t.waitlist.eyebrow}</span>
            <h2 style={{ marginTop: 14 }}>{t.waitlist.title}</h2>
            <p className="lead">{t.waitlist.lead}</p>
          </div>

          <div className="wl-act">
            {status === "success" ? (
              <div className="wl-success">
                <CheckCircle2 size={24} color="#3D8BFF" />
                <span>{t.waitlist.success}</span>
              </div>
            ) : (
              <form className="wl-form" onSubmit={handleSubmit} noValidate>
                <div className="wl-input-wrap">
                  <input
                    type="email"
                    className="wl-input"
                    placeholder={t.waitlist.placeholder}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    required
                    aria-label={t.waitlist.placeholder}
                    disabled={status === "loading"}
                  />
                  <button
                    type="submit"
                    className="wl-btn"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>{t.waitlist.submitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.waitlist.button}</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <div className="wl-error">{errorMsg}</div>
                )}
              </form>
            )}
            <span className="src">{t.waitlist.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

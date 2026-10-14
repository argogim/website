import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Indirizzo email non valido / Invalid email address" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || "info@argogim.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing in environment variables.");
      return NextResponse.json(
        {
          error:
            "Chiave RESEND_API_KEY non trovata su Vercel. Aggiungila nelle Environment Variables di Vercel.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // 1. If audienceId is set, add to Resend Audience
    if (audienceId) {
      try {
        const contactRes = await resend.contacts.create({
          email,
          unsubscribed: false,
          audienceId,
        });
        if (contactRes.error) {
          console.warn("Resend contact warning:", contactRes.error);
        }
      } catch (err) {
        console.warn("Error adding contact to Resend Audience:", err);
      }
    }

    // 2. Since argogim.com is verified on Resend, send from waitlist@argogim.com
    const fromAddress = "ARGO-GIM <waitlist@argogim.com>";

    const sendPromises = [];

    // Notification email to team (info@argogim.com)
    sendPromises.push(
      resend.emails.send({
        from: fromAddress,
        to: notifyEmail,
        subject: `[ARGO-GIM] Nuova iscrizione alla Waitlist: ${email}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #08112D; background: #F8FAFC; border-radius: 12px;">
            <h2 style="color: #0066CC; margin-top: 0;">Nuova iscrizione alla Waitlist ARGO-GIM</h2>
            <p style="font-size: 16px;">Un nuovo utente ha richiesto di entrare nella lista d'attesa:</p>
            <div style="background: #ffffff; border: 1px solid #E2E8F0; padding: 16px 20px; border-radius: 8px; font-size: 18px; font-weight: 600; color: #040817; margin: 20px 0;">
              ${email}
            </div>
            <p style="font-size: 13px; color: #64748B; margin-top: 24px;">Data: ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}</p>
          </div>
        `,
      })
    );

    // Confirmation email to user
    sendPromises.push(
      resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "Benvenuto nella waitlist di ARGO-GIM",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #08112D; background: #ffffff;">
            <h1 style="color: #0066CC; font-size: 24px; margin-bottom: 16px;">ARGO-GIM · Inside insight</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #2D3748;">
              Grazie per il tuo interesse verso <strong>ARGO-GIM</strong>: la capsula ingeribile per conoscere e seguire nel tempo la salute del tuo intestino, a casa e senza preparazione.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #2D3748;">
              La tua email è stata registrata con successo. Ti scriveremo solo per condividere i traguardi importanti del progetto, dallo sviluppo del primo prototipo ai test clinici.
            </p>
            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />
            <p style="font-size: 13px; color: #718096; line-height: 1.5;">
              © 2026 New-tale · ARGO-GIM<br />
              <a href="https://www.argogim.com" style="color: #0066CC; text-decoration: none;">www.argogim.com</a> · <a href="mailto:info@argogim.com" style="color: #0066CC; text-decoration: none;">info@argogim.com</a>
            </p>
          </div>
        `,
      })
    );

    const emailResults = await Promise.allSettled(sendPromises);

    // If both failed, return an error
    const anySuccess = emailResults.some((r) => r.status === "fulfilled" && !(r.value as any)?.error);
    if (!anySuccess) {
      const firstError = emailResults.find((r) => r.status === "rejected" || (r.status === "fulfilled" && (r.value as any)?.error));
      const errMsg = firstError?.status === "rejected" ? firstError.reason?.message : (firstError as any)?.value?.error?.message;
      if (errMsg) {
        console.error("Resend error:", errMsg);
        return NextResponse.json({ error: `Errore Resend: ${errMsg}` }, { status: 400 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: err?.message || "Si è verificato un errore durante l'iscrizione." },
      { status: 500 }
    );
  }
}

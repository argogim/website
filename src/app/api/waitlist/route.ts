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
    const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL || "niccolo.vono@unicz.it";

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured. Email logged:", email);
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Iscrizione registrata con successo (modalità test).",
      });
    }

    const resend = new Resend(apiKey);

    // 1. If audienceId is set, add to Resend Audience
    if (audienceId) {
      try {
        await resend.contacts.create({
          email,
          unsubscribed: false,
          audienceId,
        });
      } catch (err) {
        console.error("Error adding contact to Resend Audience:", err);
      }
    }

    // 2. Send notification to site owner
    try {
      await resend.emails.send({
        from: "ARGO-GIM Waitlist <onboarding@resend.dev>",
        to: notifyEmail,
        subject: `[ARGO-GIM] Nuova iscrizione alla Waitlist: ${email}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #08112D; background: #F8FAFC; border-radius: 12px;">
            <h2 style="color: #0066CC; margin-top: 0;">Nuova iscrizione alla Waitlist ARGO-GIM</h2>
            <p style="font-size: 16px;">Un nuovo utente ha richiesto di entrare nella lista d'attesa:</p>
            <div style="background: #ffffff; border: 1px solid #E2E8F0; padding: 16px 20px; border-radius: 8px; font-size: 18px; font-weight: 600; color: #040817; margin: 20px 0;">
              ${email}
            </div>
            <p style="font-size: 13px; color: #64748B; margin-top: 24px;">Data iscrizione: ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}</p>
          </div>
        `,
      });
    } catch (emailErr) {
      console.error("Error sending notification email via Resend:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Si è verificato un errore durante l'iscrizione. Riprova più tardi." },
      { status: 500 }
    );
  }
}

import { createHash } from "node:crypto";

import { Resend } from "resend";

import { siteConfig } from "@/lib/site-config";

const SUBJECTS = {
  tourist: "Transport touristique",
  personnel: "Transport du personnel",
  school: "Transport scolaire",
  disposal: "Mise à disposition VIP",
  other: "Autre demande d'information",
} as const;

type SubjectKey = keyof typeof SUBJECTS;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: SubjectKey;
  message: string;
  locale?: string;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;
  const input = body as Record<string, unknown>;
  const name = clean(input.name, 120);
  const email = clean(input.email, 160);
  const phone = clean(input.phone, 40);
  const subject = clean(input.subject, 40);
  const message = clean(input.message, 4000);
  const locale = clean(input.locale, 8);

  if (name.length < 2 || message.length < 1 || phone.length < 6) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!(subject in SUBJECTS)) return null;

  return {
    name,
    email,
    phone,
    subject: subject as SubjectKey,
    message,
    locale: locale || undefined,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e6eef8;width:120px;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#0070e0;vertical-align:top;">${label}</td>
    <td style="padding:10px 0 10px 12px;border-bottom:1px solid #e6eef8;font-size:15px;line-height:1.45;color:#07246b;font-weight:600;">${value}</td>
  </tr>`;
}

function contactEmailHtml(input: {
  subject: string;
  name: string;
  email: string;
  phone: string;
  locale: string;
  message: string;
}) {
  const replyHref = `mailto:${encodeURIComponent(input.email)}`;
  const phoneHref = `tel:${input.phone.replace(/[^\d+]/g, "")}`;

  return `<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f3f7fc;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f7fc;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e3ebf5;">
            <tr>
              <td style="background:#07246b;padding:22px 28px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.16em;text-transform:uppercase;color:#8ec5ff;font-weight:700;">ERRACHDY Travel</p>
                <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.25;color:#ffffff;font-weight:700;">Nouvelle demande</p>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 28px 8px;">
                <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;">
                  <span style="display:inline-block;background:#e8f3ff;color:#0070e0;border-radius:999px;padding:6px 12px;font-size:13px;font-weight:700;">${input.subject}</span>
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;">
                  ${row("Nom", input.name)}
                  ${row("Email", `<a href="${replyHref}" style="color:#0070e0;text-decoration:none;">${input.email}</a>`)}
                  ${row("Téléphone", `<a href="${phoneHref}" style="color:#07246b;text-decoration:none;">${input.phone}</a>`)}
                  ${row("Langue", input.locale)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 24px;">
                <p style="margin:16px 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#0070e0;">Message</p>
                <div style="font-family:Arial,Helvetica,sans-serif;background:#f7fbff;border:1px solid #d7e6f8;border-radius:12px;padding:16px 18px;font-size:15px;line-height:1.6;color:#1e3358;">${input.message}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 26px;">
                <a href="${replyHref}" style="display:inline-block;background:#0070e0;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;border-radius:999px;padding:12px 18px;">Répondre au client</a>
              </td>
            </tr>
            <tr>
              <td style="background:#f7fbff;padding:14px 28px;border-top:1px solid #e6eef8;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#5d7294;">Message envoyé depuis le formulaire du site ERRACHDY Travel.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 500 });
  }

  let payload: ContactPayload | null;
  try {
    payload = parsePayload(await request.json());
  } catch {
    payload = null;
  }

  if (!payload) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const subjectLabel = SUBJECTS[payload.subject];
  const inbox = process.env.CONTACT_INBOX || siteConfig.email;
  const from = process.env.RESEND_FROM || "ERRACHDY Travel <onboarding@resend.dev>";
  const localeLabel = payload.locale === "ar" ? "العربية" : "Français";
  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    message: escapeHtml(payload.message).replaceAll("\n", "<br>"),
    locale: escapeHtml(localeLabel),
    subject: escapeHtml(subjectLabel),
  };

  const text = [
    "ERRACHDY Travel — Nouvelle demande",
    `Sujet : ${subjectLabel}`,
    `Nom : ${payload.name}`,
    `Email : ${payload.email}`,
    `Téléphone : ${payload.phone}`,
    `Langue : ${localeLabel}`,
    "",
    "Message :",
    payload.message,
  ].join("\n");

  const html = contactEmailHtml(safe);

  const idempotencyKey = `contact-form/${createHash("sha256")
    .update(`${payload.email}|${payload.phone}|${payload.subject}|${payload.message}`)
    .digest("hex")
    .slice(0, 40)}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send(
    {
      from,
      to: [inbox],
      replyTo: payload.email,
      subject: `Contact site — ${subjectLabel}`,
      html,
      text,
    },
    { idempotencyKey }
  );

  if (error) {
    console.error("Contact email failed:", error.message);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

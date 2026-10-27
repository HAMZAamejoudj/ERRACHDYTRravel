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
  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    message: escapeHtml(payload.message).replaceAll("\n", "<br>"),
    locale: escapeHtml(payload.locale || "fr"),
  };

  const text = [
    `Nouvelle demande — ${subjectLabel}`,
    `Nom : ${payload.name}`,
    `Email : ${payload.email}`,
    `Téléphone : ${payload.phone}`,
    `Langue : ${payload.locale || "fr"}`,
    "",
    payload.message,
  ].join("\n");

  const html = `<p><strong>Nouvelle demande — ${escapeHtml(subjectLabel)}</strong></p>
<p>Nom : ${safe.name}<br>Email : ${safe.email}<br>Téléphone : ${safe.phone}<br>Langue : ${safe.locale}</p>
<p>${safe.message}</p>`;

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

"use server";

import { render } from "@react-email/render";
import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "@/components/email-template";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Invalid form submission");
  }

  const { name, email, subject, message } = parsed.data;

  const html = await render(
    <EmailTemplate
      name={name}
      email={email}
      subject={subject}
      message={message}
    />,
  );

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "dustinwalkup@gmail.com",
    subject: `Contact: ${subject}`,
    html,
    replyTo: email,
  });

  return { success: true };
}

"use server";

import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function sendMessage(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(raw);

  console.log("parsed", parsed);

  if (!parsed.success) {
    throw new Error("Invalid form submission");
  }

  const { name, email, subject, message } = parsed.data;

  // TODO: integrate email service
  console.log("📩 Message received:", { name, email, subject, message });

  return { success: true };
}

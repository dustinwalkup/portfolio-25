import { Resend } from "resend";
import { render } from "@react-email/render";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  const html = await render(
    <EmailTemplate
      name="Steve"
      email="steve@example.com"
      subject="Testing from script"
      message="This is a test email.\nNew line here."
    />,
  );

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "dustinwalkup@gmail.com",
    subject: "Test contact email",
    html,
  });

  console.log("✅ Test email sent!");
}

sendTestEmail();

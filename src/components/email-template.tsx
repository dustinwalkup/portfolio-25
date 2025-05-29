import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
} from "@react-email/components";

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        <Container>
          <Heading as="h2">📬 New Contact Message</Heading>
          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text style={{ whiteSpace: "pre-line" }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

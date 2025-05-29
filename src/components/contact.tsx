"use client";

import type React from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/lib/actions";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [pending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    startTransition(() => {
      console.log("sending message", formData);
      sendEmail(formData)
        .then(() => {
          toast.success("Message sent!", {
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          reset();
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again.");
        });
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#280040]/60 py-24 backdrop-blur-md md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="section-title text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-white">
              Have a project in mind or want to chat? Reach out to me!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Card className="psychedelic-card">
                <CardHeader>
                  <CardTitle className="section-title text-primary">
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-white">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="drop-shadow-glow-fuchsia text-primary h-5 w-5" />
                    <a
                      href="mailto:dustinwalkup@gmail.com"
                      className="hover:text-tertiary text-white"
                    >
                      dustinwalkup@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="drop-shadow-glow-cyan text-secondary h-5 w-5" />
                    <a
                      href="tel:+1234567890"
                      className="hover:text-tertiary text-white"
                    >
                      (913) 302-0071
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="drop-shadow-glow-yellow text-tertiary h-5 w-5" />
                    <span className="text-white">Kansas City, MO</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="psychedelic-card">
                <CardHeader>
                  <CardTitle className="section-title text-secondary">
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">
                    I&apos;m currently available for freelance work and
                    interesting projects. My typical response time is within 24
                    hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="psychedelic-card">
              <CardHeader>
                <CardTitle className="section-title text-tertiary">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-white">
                  Fill out this form and I&apos;ll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-primary" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      className="shadow-glow-fuchsia border-primary placeholder:text-primary/50 bg-[#280040]/70 text-white"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-secondary" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Your email"
                      className="border-secondary placeholder:text-secondary/50 shadow-glow-cyan bg-[#280040]/70 text-white"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-tertiary" htmlFor="subject">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      {...register("subject")}
                      className="shadow-glow-yellow border-tertiary placeholder:text-tertiary/50 bg-[#280040]/70 text-white"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-primary" htmlFor="message">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      {...register("message")}
                      className="shadow-glow-fuchsia border-primary placeholder:text-primary/50 bg-[#280040]/70 text-white"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="glow-border from-primary to-secondary hover:from-secondary hover:to-primary w-full bg-gradient-to-r via-[#AA00FF] font-bold text-white hover:via-[#AA00FF]"
                    disabled={pending}
                  >
                    {pending ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

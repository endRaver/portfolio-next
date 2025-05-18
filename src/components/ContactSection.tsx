"use client";

import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Loader2Icon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      toast.success("Message sent");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to new opportunities and exciting challenges.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MailIcon className="text-primary h-6 w-6" />
                </div>

                <div className="w-[200px] text-center">
                  <h4 className="text-center font-medium">Email</h4>
                  <a
                    href="mailto:tungthanh254@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tungthanh254@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <PhoneIcon className="text-primary h-6 w-6" />
                </div>

                <div className="w-[200px] text-center">
                  <h4 className="text-center font-medium">Phone</h4>
                  <a
                    href="tel:+84325333684"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +84 325 333 684
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPinIcon className="text-primary h-6 w-6" />
                </div>

                <div className="w-[200px] text-center">
                  <h4 className="text-center font-medium">Location</h4>
                  <a
                    href="mailto:tungthanh254@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Hanoi, Vietnam
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="mb-4 text-center font-medium">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/tungthanhngo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/endRaver"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/TungNgo254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/terence_ngo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-xs">
            <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group">
                <label
                  htmlFor="name"
                  className="text-muted-foreground group-focus-within:text-primary mb-2 block text-sm font-medium transition-colors"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  className="border-input bg-background/50 hover:bg-background/80 focus:bg-background focus:ring-primary/50 w-full rounded-lg px-4 py-3 transition-all duration-200 ease-in-out focus:ring-2 focus:outline-none"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="text-muted-foreground group-focus-within:text-primary mb-2 block text-sm font-medium transition-colors"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@gmail.com"
                  name="email"
                  className="border-input bg-background/50 hover:bg-background/80 focus:bg-background focus:ring-primary/50 w-full rounded-lg px-4 py-3 transition-all duration-200 ease-in-out focus:ring-2 focus:outline-none"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="text-muted-foreground group-focus-within:text-primary mb-2 block text-sm font-medium transition-colors"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hello, I'd like to talk about..."
                  name="message"
                  rows={4}
                  className="border-input bg-background/50 hover:bg-background/80 focus:bg-background focus:ring-primary/50 w-full resize-none rounded-lg px-4 py-3 transition-all duration-200 ease-in-out focus:ring-2 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]",
                  isLoading && "cursor-not-allowed opacity-80",
                )}
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <Loader2Icon className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

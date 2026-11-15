import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="animate-fade-up text-3xl font-bold text-ink">Contact us</h1>
      <p className="mt-2 text-ink/75">
        Found a bug, have a story idea, or need help? We&apos;d love to hear from you, and usually reply within 2 working days.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${site.supportEmail}`}
          className="animate-fade-up rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blush/60 transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <p className="font-bold text-ink">Support email</p>
          <p className="break-all font-semibold text-petal-deep">{site.supportEmail}</p>
        </a>
        <div className="animate-fade-up rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blush/60 [animation-delay:100ms]">
          <p className="font-bold text-ink">Developer</p>
          <p className="font-semibold text-petal-deep">{site.developer}</p>
        </div>
      </div>

      <ContactForm />

      <p className="mt-4 text-xs text-ink/60">
        Kids: please ask a grown-up before sending a message. The form opens your email app; nothing is stored on this website.
      </p>
    </div>
  );
}

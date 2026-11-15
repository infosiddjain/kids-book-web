"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const topics = ["Help using the app", "Report a problem", "Story or feature idea", "Privacy question", "Other"];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${site.name}: ${topic}`;
    const body = `${message}\n\n— ${name || "A Story Petals user"}`;
    window.location.href = `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field = "mt-1 w-full rounded-2xl border-2 border-blush bg-white px-4 py-3 text-ink outline-none focus:border-petal";

  return (
    <form onSubmit={submit} className="mt-8 animate-fade-up space-y-4 rounded-[2rem] [animation-delay:200ms] bg-champagne/50 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-ink">Send a message</h2>
      <label className="block text-sm font-semibold text-ink">
        Your name (optional)
        <input value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
      </label>
      <label className="block text-sm font-semibold text-ink">
        Topic
        <select value={topic} onChange={(e) => setTopic(e.target.value)} className={field}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold text-ink">
        Message
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
      </label>
      <button type="submit" className="btn-primary">Open email to send</button>
    </form>
  );
}

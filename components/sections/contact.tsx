"use client"
import { useState } from "react"
import Container from "@/components/ui/Container"
import SectionLabel from "@/components/ui/SectionLabel"

const contactLinks = [
  { icon: "✉", label: "ezekielvandaele1@gmail.com", href: "mailto:ezekielvandaele1@gmail.com" },
  { icon: "⌥", label: "GitHub", href: "https://github.com/DevZek" },
  { icon: "in", label: "LinkedIn", href: "https://www.linkedin.com/in/ezeki%C3%ABl-van-daele-558a5934b/" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="border-t border-zinc-800 py-28">
      <Container>
        <SectionLabel number="04" title="Contact" />

        <div className="grid grid-cols-2 gap-24 items-start">

          {/* Left */}
          <div>
            <h2 className="font-display text-6xl font-extrabold tracking-tighter leading-none mb-6">
              Let's <span className="text-green-400">work</span>
              <br />together.
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Open to freelance, full-time, and interesting projects. Drop me a
              message or reach out on any of these platforms.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="flex items-center justify-between px-5 py-4 border border-zinc-800 text-sm text-zinc-200 hover:border-green-400 hover:text-green-400 transition-all duration-200 cursor-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-zinc-500">{link.icon}</span>
                    {link.label}
                  </span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-zinc-500">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 text-sm font-mono outline-none focus:border-green-400 transition-colors duration-200 placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-zinc-500">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 text-sm font-mono outline-none focus:border-green-400 transition-colors duration-200 placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-zinc-500">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 text-sm font-mono outline-none focus:border-green-400 transition-colors duration-200 placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="self-start px-8 py-3 bg-green-400 text-black text-sm font-medium tracking-wide hover:bg-green-300 hover:-translate-y-0.5 transition-all duration-200 cursor-none disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message →"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </div>

        </div>
      </Container>
    </section>
  )
}
import Container from "@/components/ui/Container"

const footerLinks = [
  { label: "GitHub", href: "https://github.com/DevZek" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ezeki%C3%ABl-van-daele-558a5934b/" },
  { label: "Email", href: "mailto:ezekielvandaele1@gmail.com" },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <Container className="flex items-center justify-between">
        <span className="font-display font-extrabold text-green-400 tracking-tight">
          EZ.
        </span>

        <p className="text-zinc-600 text-xs tracking-widest">
          © {new Date().getFullYear()} Ezekiël Van Daele
        </p>

        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="text-zinc-600 text-xs uppercase tracking-widest hover:text-green-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
export default function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-green-400 mb-8">
      {number} — {title}
      <span className="w-12 h-px bg-green-400 opacity-40" />
    </p>
  )
}
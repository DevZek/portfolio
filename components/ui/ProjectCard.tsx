import Image from "next/image"

interface ProjectCardProps {
  number: string
  title: string
  description: string
  tags: string[]
  image: string
  live: string
  github: string
}

export default function ProjectCard({ number, title, description, tags, image, live, github }: ProjectCardProps) {
  return (
    <div className="group grid grid-cols-[3rem_1fr_auto] items-center gap-8 px-8 py-6 bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900 transition-all duration-200">
      <span className="text-xs text-green-400 tracking-widest">{number}</span>

      <div className="flex items-center gap-8">
        {/* Screenshot */}
        <div className="relative w-32 h-20 shrink-0 border border-zinc-800 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>

        {/* Info */}
        <div>
          <h3 className="font-display text-lg font-bold tracking-tight mb-1">{title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-3">{description}</p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs border border-zinc-800 text-zinc-500 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 shrink-0">
        <a
          href={live}
          target="_blank"
          className="text-xs uppercase tracking-widest text-zinc-500 hover:text-green-400 transition-colors duration-200"
        >
          Live ↗
        </a>
        <a
          href={github}
          target="_blank"
          className="text-xs uppercase tracking-widest text-zinc-500 hover:text-green-400 transition-colors duration-200"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  )
}
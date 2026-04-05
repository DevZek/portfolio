interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  tags,
  link = "#",
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="group grid grid-cols-[3rem_1fr_auto] items-center gap-8 px-8 py-6 bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900 transition-all duration-200 cursor-none"
    >
      <span className="text-xs text-green-400 tracking-widest">{number}</span>

      <div>
        <h3 className="font-display text-lg font-bold tracking-tight mb-1">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs border border-zinc-800 text-zinc-500 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className="text-green-400 text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
        ↗
      </span>
    </a>
  );
}

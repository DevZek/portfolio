// components/ui/Container.tsx
export default function Container({ children, className = "" }: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={`max-w-5xl mx-auto px-16 w-full ${className}`}>
      {children}
    </div>
  )
}
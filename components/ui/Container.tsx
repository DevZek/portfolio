export default function Container({ children, className = "" }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 w-full ${className}`}>
      {children}
    </div>
  )
}
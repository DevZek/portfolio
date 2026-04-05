import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Portfolio Ezekiel Van Daele",
  description: "Full stack and backend developer based near Gent.",
  icons: {
    icon: "/logo.svg",  
  },
}


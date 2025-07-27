import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alain Bruno - FRONT-END Developer',
  description: 'Portfolio website of Alain Bruno, a passionate full-stack developer specializing in modern web technologies.',
  icons: {
   icon: '/assets/my_profile.jpeg', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
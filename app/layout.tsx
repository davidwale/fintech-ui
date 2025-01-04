import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from './context/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simbrella Fintech Dashboard - David Oyewale',
  description: 'Dashboard UI assessment by David Oyewale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <div className="bg-gray-100">
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  )
}

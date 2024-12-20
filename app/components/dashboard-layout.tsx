'use client'

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-gray-100">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className={`transition-all duration-300 ml-16 ${expanded ? 'lg:ml-64' : ''}`}>
        <Navbar />
        <main className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
          {children}
        </main>
      </div>
    </div>
  )
}


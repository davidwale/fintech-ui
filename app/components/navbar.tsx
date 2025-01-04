'use client'

import { useState } from 'react'
import { LayoutDashboard, Receipt, Wallet, ChevronDown, Menu, X, CreditCard, User } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    const navItems = [
        { icon: LayoutDashboard, href: '/', label: 'Dashboard' },
        { icon: Wallet, href: '/loans', label: 'Loans' },
        { icon: Receipt, href: '/transactions', label: 'Transactions' },
        { icon: User, href: '/account', label: 'Accounts' },
    ] as const

    const quickActions = [
        { icon: CreditCard, label: 'Take Loan' },
    ]

    return (
        <div className="h-14 bg-white border-b border-gray-200 flex items-center shadow-lg rounded-2xl text-xs mt-4 mx-6 px-4 gap-2 relative">
            {/* Left section - Always visible */}
            <div className="flex items-center gap-2 min-w-[100px]">
                <span className="text-sm text-gray-500">My Accounts</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>

            {/* Mobile menu button */}
            <button
                className="lg:hidden ml-auto p-2 text-gray-500 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Menu className="h-5 w-5" />
                )}
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors
                            ${isActive
                                    ? 'text-blue-600 bg-blue-50 font-medium'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <item.icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </div>

            {/* Quick actions - Always visible on desktop */}
            <div className="hidden md:flex items-center gap-2">
                {quickActions.map((action) => (
                    <button
                        onClick={() => router.push('/loans/requests')}
                        key={action.label}
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-md border border-blue-200"
                    >
                        <action.icon className="h-4 w-4" />
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
                    <div className="p-2 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 w-full px-3 py-2 rounded-md transition-colors
                                ${pathname === item.href
                                        ? 'text-blue-600 bg-blue-50 font-medium'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </Link>
                        ))}
                        {quickActions.map((action) => (
                            <button
                                key={action.label}
                                className="flex items-center gap-2 w-full px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md border border-blue-200"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <action.icon className="h-4 w-4" />
                                <span
                                    onClick={() => router.push('/loans/requests')}
                                >{action.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

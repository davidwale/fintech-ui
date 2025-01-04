'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Wallet, Receipt, Menu, LogOut } from 'lucide-react'
import Image from 'next/image'
import { UserContext } from '../context/UserContext'

interface SidebarProps {
    expanded: boolean
    setExpanded: (expanded: boolean) => void
}

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Loans', href: '/loans', icon: Wallet },
    { name: 'Transactions', href: '/transactions', icon: Receipt },
]


export function Sidebar({ expanded, setExpanded }: SidebarProps) {
    const pathname = usePathname()
    const { user } = useContext(UserContext)

    return (
        <nav
            className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out z-50 flex flex-col
        ${expanded ? 'w-64 shadow-lg' : 'w-16'}`}
        >
            <div className="sticky top-0 bg-gray-50/75 border-b border-gray-200 p-3">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="p-1.5 hover:bg-gray-100 rounded-lg w-full flex items-center gap-2"
                >
                    <Menu className="h-6 w-6" />
                    {expanded && (
                        <span className="font-semibold text-gray-700">Simbrella</span>
                    )}
                </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 py-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center py-2 px-4 mb-1 text-sm transition-colors
                ${isActive
                                    ? 'text-blue-600 bg-blue-50 font-medium'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }
                ${!expanded && 'justify-center'}
              `}
                        >
                            <item.icon className={`h-5 w-5 ${expanded ? 'mr-3' : ''}`} />
                            {expanded && <span>{item.name}</span>}
                        </Link>
                    )
                })}
            </div>
            {user ? (
                <div className="mt-auto p-4 border-t border-gray-200">
                    <Link
                        href="/account"
                        className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors
            ${pathname === '/account' ? 'bg-gray-100' : ''}`}
                    >
                        <div className="relative">
                            <Image
                                src={user.avatar}
                                alt={user.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        {expanded && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-700 truncate">
                                    {user.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {user.email}
                                </p>
                            </div>
                        )}
                    </Link>
                    {expanded && (
                        <button
                            className="mt-2 w-full flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Sign out</span>
                        </button>
                    )}
                </div>
            ) : null}

        </nav>
    )
}


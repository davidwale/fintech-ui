'use client'

import { useState } from 'react'
import {
    ChartBarIcon,
    ViewColumnsIcon,
    PlusIcon,
    ArrowPathIcon,
    UsersIcon,
    TrashIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    AdjustmentsHorizontalIcon,
    TableCellsIcon,
    EllipsisVerticalIcon,
    ShareIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { icon: ChartBarIcon, label: 'Show chart' },
        { icon: ViewColumnsIcon, label: 'Focused view' },
        { icon: PlusIcon, label: 'New' },
        { icon: ArrowPathIcon, label: 'Refresh' },
        { icon: UsersIcon, label: 'Collaborate' },
        { icon: TrashIcon, label: 'Delete' },
        { icon: EllipsisVerticalIcon, label: `` },
        { icon: Cog8ToothIcon, label: 'Smart data' },
        { icon: AdjustmentsHorizontalIcon, label: 'Edit filters' },
        { icon: TableCellsIcon, label: 'Edit columns' },
    ] as const

    const borderedItems = ['Smart data', 'Edit filters', 'Edit columns']

    return (
        <div className="h-14 bg-white border-b border-gray-200 flex items-center shadow-lg rounded-2xl text-xs mt-4 mx-6 px-4 gap-2 relative">
            {/* Left section - Always visible */}
            <div className="flex items-center gap-2 min-w-[80px]">
                <span className="text-sm text-gray-500">My open leads</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
            </div>

            {/* Mobile menu button */}
            <button
                className="lg:hidden ml-auto p-2 text-gray-500 hover:bg-gray-100 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? (
                    <XMarkIcon className="h-5 w-5" />
                ) : (
                    <Bars3Icon className="h-5 w-5" />
                )}
            </button>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md ${borderedItems.includes(item.label) ? 'border border-gray-300' : ''
                            }`}
                    >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Share button - Always visible on desktop */}
            <div className="hidden md:flex items-center gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <ShareIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
                    <div className="p-2 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className={`flex items-center gap-2 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${borderedItems.includes(item.label) ? 'border border-gray-300' : ''
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <item.icon className="h-4 w-4" />
                                <span>{item.label}</span>
                            </button>
                        ))}
                        {/* Share button in mobile menu */}
                        <button
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <ShareIcon className="h-4 w-4" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

'use client'

import {
    ChartBarIcon, ChevronDownIcon, RocketLaunchIcon, Squares2X2Icon,
    ClipboardDocumentListIcon, UserGroupIcon, UserIcon,
    FlagIcon, BuildingOfficeIcon, CurrencyDollarIcon,
    DocumentIcon, ShoppingCartIcon, ReceiptPercentIcon,
    CubeIcon, NewspaperIcon, EnvelopeIcon,
    MegaphoneIcon as MegaphoneIconOutline, Bars3Icon
} from '@heroicons/react/24/outline'

interface SidebarProps {
    expanded: boolean
    setExpanded: (expanded: boolean) => void
}

const navItems = [
    { name: 'Home', isActive: true },
    { name: 'Recent', isActive: true, hasDropdown: true },
    { name: 'Pinned', isActive: true, hasDropdown: true },
    {
        name: 'My work', isActive: true,
        subItems: [
            { name: 'Sales accelerator', icon: RocketLaunchIcon },
            { name: 'Dashboards', icon: Squares2X2Icon },
            { name: 'Activities', icon: ClipboardDocumentListIcon },
        ]
    },
    {
        name: 'Customers', isActive: true,
        subItems: [
            { name: 'Accounts', icon: BuildingOfficeIcon },
            { name: 'Contacts', icon: UserIcon },
        ]
    },
    {
        name: 'Sales', isActive: true,
        subItems: [
            { name: 'Leads', icon: FlagIcon },
            { name: 'Opportunities', icon: CurrencyDollarIcon },
            { name: 'Competitors', icon: UserGroupIcon },
        ]
    },
    {
        name: 'Collateral', isActive: true,
        subItems: [
            { name: 'Quotes', icon: DocumentIcon },
            { name: 'Orders', icon: ShoppingCartIcon },
            { name: 'Invoices', icon: ReceiptPercentIcon },
            { name: 'Products', icon: CubeIcon },
            { name: 'Sales Literature', icon: NewspaperIcon },
        ]
    },
    {
        name: 'Marketing', isActive: true,
        subItems: [
            { name: 'Marketing lists', icon: EnvelopeIcon },
            { name: 'Quick Campaigns', icon: MegaphoneIconOutline },
        ]
    },
    {
        name: 'Performance', isActive: true,
        subItems: [
            { name: 'Sales', icon: ChartBarIcon },
        ]
    },
]

export function Sidebar({ expanded, setExpanded }: SidebarProps) {
    return (
        <>


            {/* Sidebar */}
            <nav
                className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 
          transition-all duration-300 ease-in-out z-50 overflow-y-auto
          ${expanded ? 'w-64 shadow-lg' : 'w-16'}`}
            >
                <div className="sticky top-0 bg-gray-50/75 border-b border-gray-200 p-3">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg w-full flex items-center gap-2"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>

                <div className="py-1">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <button
                                className={`flex items-center w-full py-1.5 pl-4 mb-3 text-sm
                                    ${item.isActive ? 'font-bold text-gray-700' : 'text-gray-700'}
                                    hover:bg-gray-100`}
                            >
                                {expanded && (
                                    <>
                                        <span className="ml-3">{item.name}</span>
                                        {item.hasDropdown && (
                                            <ChevronDownIcon className="h-4 w-4 mr-2" />
                                        )}
                                    </>
                                )}
                            </button>

                            {expanded && item.subItems && (
                                <div className="ml-3 py-1">
                                    {item.subItems.map((subItem) => (
                                        <button
                                            key={subItem.name}
                                            className={`flex items-center mb-3 w-full text-left py-1 px-3 text-sm rounded-sm
                                                text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <subItem.icon className="h-4 w-4 flex-shrink-0 mr-2" />
                                            <span>{subItem.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}


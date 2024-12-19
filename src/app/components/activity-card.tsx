interface ActivityCardProps {
    title: string
    company: string
    value: string
    daysToClose: number
    action: string
}

export function ActivityCard({ title, company, value, daysToClose, action }: ActivityCardProps) {
    return (
        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
                        <p className="text-sm text-gray-500">
                            {company} • {value} • {daysToClose} days to close
                        </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
                <button className="mt-2 inline-flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    {action}
                </button>
            </div>
        </div>
    )
}


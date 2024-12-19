interface LeadCardProps {
    name: string
    position: string
    company: string
    avatar: string
    action: string
    description: string
    tags: string[]
}

export function LeadCard({ name, position, company, avatar, action, description, tags }: LeadCardProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
                <div className="flex gap-3">
                    <img
                        src={avatar}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-medium">{name}</h3>
                        <p className="text-sm text-gray-500">{position} • {company}</p>
                    </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

            <div className="mt-4">
                <button className="inline-flex items-center text-sm font-medium text-gray-900">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {action}
                </button>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>

            <div className="mt-4 flex gap-2">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}


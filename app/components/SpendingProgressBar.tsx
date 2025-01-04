interface SegmentProps {
    label: string
    percentage: number
    color: string
}

interface ProgressBarProps {
    segments: SegmentProps[]
    className?: string
}

export function SpendingProgressBar({ segments, className = '' }: ProgressBarProps) {
    return (
        <div className={className}>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden flex">
                {segments.map((segment, index) => (
                    <div
                        key={index}
                        className={`${segment.color} transition-all duration-500`}
                        style={{ width: `${segment.percentage}%` }}
                    />
                ))}
            </div>
            <div className="mt-2 flex justify-between">
                {segments.map((segment, index) => (
                    <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${segment.color} mr-2`} />
                        <span className="text-sm text-gray-600">
                            {segment.label} ({segment.percentage}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}


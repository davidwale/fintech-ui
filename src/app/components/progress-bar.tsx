interface ProgressSegment {
    label: string
    value: string
    color: string
}

interface ProgressBarProps {
    segments: ProgressSegment[]
    className?: string
}

export function ProgressBar({ segments, className = '' }: ProgressBarProps) {
    const total = segments.reduce((acc, segment) => {
        const value = parseFloat(segment.value.replace(/[^0-9.]/g, ''))
        return acc + value
    }, 0)

    return (
        <div className={className}>
            <div className="flex justify-between mb-1 text-xs">
                {segments.map((segment, i) => (
                    <div key={i} className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${segment.color}`} />
                        <span>{segment.label} {segment.value}</span>
                    </div>
                ))}
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                {segments.map((segment, i) => {
                    const value = parseFloat(segment.value.replace(/[^0-9.]/g, ''))
                    const width = (value / total) * 100
                    return (
                        <div
                            key={i}
                            className={`h-full ${segment.color}`}
                            style={{ width: `${width}%` }}
                        />
                    )
                })}
            </div>
        </div>
    )
}


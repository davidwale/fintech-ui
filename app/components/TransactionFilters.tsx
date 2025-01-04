import { Filter } from 'lucide-react'

interface TransactionFiltersProps {
    sortBy: string
    filterType: string
    onSortChange: (value: string) => void
    onFilterChange: (value: string) => void
}

export function TransactionFilters({
    sortBy,
    filterType,
    onSortChange,
    onFilterChange
}: TransactionFiltersProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Filters</span>
                </div>
                <select
                    value={filterType}
                    onChange={(e) => onFilterChange(e.target.value)}
                    className="w-[140px] px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="all">All Transactions</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Sort by</span>
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="w-[140px] px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
            </div>
        </div>
    )
}


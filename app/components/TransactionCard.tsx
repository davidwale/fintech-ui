import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface TransactionCardProps {
    title: string
    amount: number
    type: string
    merchant: string
    category: string
    date: string
    status: string
}

export function TransactionCard({
    title,
    amount,
    type,
    merchant,
    category,
    date
}: TransactionCardProps) {
    return (
        <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{merchant}</p>
                </div>
                <div className="flex items-center">
                    <span className={`font-semibold ${type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                        {type === 'credit' ? '+' : '-'}₦{amount.toFixed(2)}
                    </span>
                    {type === 'credit' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600 ml-1" />
                    ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-600 ml-1" />
                    )}
                </div>
            </div>
            <div className="mt-2 flex justify-between items-center">
                <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-700">
                    {category}
                </span>
                <span className="text-xs text-gray-500">
                    {new Date(date).toLocaleDateString()}
                </span>
            </div>
        </div>
    )
}


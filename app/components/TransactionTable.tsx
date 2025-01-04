import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface Transaction {
    id: number
    date: string
    description: string
    amount: number
    type: string
    category: string
    status: string
}

interface TransactionTableProps {
    transactions: Transaction[]
}

export function TransactionTable({ transactions }: TransactionTableProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            case 'failed':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Date & Time</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Description</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Category</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Amount</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="bg-white hover:bg-gray-50">
                            <td className="p-4">
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm">
                                        {new Date(transaction.date).toLocaleDateString()}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        {new Date(transaction.date).toLocaleTimeString()}
                                    </span>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                                        }`}>
                                        {transaction.type === 'credit' ? (
                                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                                        ) : (
                                            <ArrowDownRight className="w-4 h-4 text-red-600" />
                                        )}
                                    </div>
                                    <span className="font-medium text-sm">{transaction.description}</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                                    {transaction.category}
                                </span>
                            </td>
                            <td className="p-4">
                                <span className={`font-medium text-sm ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {transaction.type === 'credit' ? '+' : '-'}
                                    ₦{transaction.amount.toFixed(2)}
                                </span>
                            </td>
                            <td className="p-4">
                                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${getStatusColor(transaction.status)}`}>
                                    {transaction.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


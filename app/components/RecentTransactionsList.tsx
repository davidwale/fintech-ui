import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    date: string
    category: string
}

interface RecentTransactionsListProps {
    transactions: Transaction[]
}

export function RecentTransactionsList({ transactions }: RecentTransactionsListProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                    View all transactions
                </button>
            </div>
            <div className="divide-y divide-gray-100">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="py-3 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                                }`}>
                                {transaction.type === 'credit' ? (
                                    <ArrowUpRight className="w-4 h-4 text-green-600" />
                                ) : (
                                    <ArrowDownRight className="w-4 h-4 text-red-600" />
                                )}
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{transaction.title}</p>
                                <p className="text-sm text-gray-500">{transaction.category}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                {transaction.type === 'credit' ? '+' : '-'}₦{transaction.amount.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-500">
                                {new Date(transaction.date).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


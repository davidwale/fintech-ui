'use client'

import { useState } from 'react'
import { TransactionFilters } from '../components/TransactionFilters'
import { TransactionTable } from '../components/TransactionTable'
import DashboardLayout from '../components/dashboard-layout'

const mockTransactions = [
    {
        id: 1,
        date: '2024-01-03T10:30:00',
        description: 'Grocery Shopping',
        amount: 85.50,
        type: 'debit',
        category: 'Groceries',
        status: 'completed'
    },
    {
        id: 2,
        date: '2024-01-02T15:45:00',
        description: 'Salary Deposit',
        amount: 3500.00,
        type: 'credit',
        category: 'Income',
        status: 'completed'
    },
    {
        id: 3,
        date: '2024-01-02T12:30:00',
        description: 'Online Transfer',
        amount: 150.00,
        type: 'debit',
        category: 'Transfer',
        status: 'pending'
    },
    {
        id: 4,
        date: '2024-01-01T09:15:00',
        description: 'Netflix Subscription',
        amount: 14.99,
        type: 'debit',
        category: 'Entertainment',
        status: 'failed'
    },
] as const

export default function TransactionHistory() {
    const [sortBy, setSortBy] = useState('date')
    const [filterType, setFilterType] = useState('all')

    const sortedTransactions = [...mockTransactions].sort((a, b) => {
        if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
        if (sortBy === 'amount') return b.amount - a.amount
        return 0
    })

    const filteredTransactions = sortedTransactions.filter(
        (transaction) => filterType === 'all' || transaction.type === filterType
    )

    return (
        <DashboardLayout>
            <div className="p-6 w-full space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900">Transaction History</h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    View and manage your recent transactions
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                    <span className="text-sm text-gray-500">Income</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <span className="text-sm text-gray-500">Expense</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <TransactionFilters
                                sortBy={sortBy}
                                filterType={filterType}
                                onSortChange={setSortBy}
                                onFilterChange={setFilterType}
                            />
                            <TransactionTable transactions={filteredTransactions} />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}


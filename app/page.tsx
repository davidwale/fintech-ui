'use client'

import { useContext } from 'react'
import { mockFinanceData, mockTransactions, mockActivities, mockRecentTransactions } from './lib/data'
import { TransactionCard } from './components/TransactionCard'
import { LoanActivityCard } from './components/LoanActivityCard'
import { SpendingProgressBar } from './components/SpendingProgressBar'
import { RecentTransactionsList } from './components/RecentTransactionsList'
import DashboardLayout from './components/dashboard-layout'
import { UserContext } from './context/UserContext'

export default function Home() {
  const { user } = useContext(UserContext)

  return (
    <DashboardLayout>
      <div className="p-6 w-full space-y-6">
        <div className="bg-white rounded-lg shadow-sm border w-full border-gray-200 p-4">
          <div className="flex flex-col md:flex-row items-start justify-between mb-6">
            <div className="flex items-start gap-3">
              <div>
                <h1 className="text-base md:text-xl font-semibold">
                  Hi {user?.name}, <span className="text-blue-600"> {mockFinanceData.achieved}% </span> of spending goal reached
                </h1>
                <p className="text-gray-500 text-sm md:text-lg mt-1">
                  You&apos;re maintaining good financial health
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">{mockFinanceData.timeline}</div>
              <div>
                <div className="text-sm text-gray-500">Monthly Budget</div>
                <div className="text-sm md:text-lg font-semibold">
                  ₦{(mockFinanceData.target / 1000).toFixed(0)}K
                </div>
              </div>
            </div>
          </div>

          <SpendingProgressBar segments={mockFinanceData.segments} className="mt-4" />

          <p className="mt-6 text-sm text-gray-600">
            Your spending patterns show You&apos;re on track with your financial goals. Here are your recent transactions.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {mockTransactions.map(transaction => (
              <TransactionCard key={transaction.id} {...transaction} />
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Recent Financial Activities</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View all activities
              </button>
            </div>
            <div className="space-y-2">
              {mockActivities.map(activity => (
                <LoanActivityCard key={activity.id} {...activity} />
              ))}
            </div>
          </div>
        </div>
        <RecentTransactionsList transactions={mockRecentTransactions} />
      </div>
    </DashboardLayout>
  )
}


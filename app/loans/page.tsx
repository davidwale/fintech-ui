'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Clock, CheckCircle, AlertCircle, ChevronRight } from 'lucide-react'
import DashboardLayout from '../components/dashboard-layout'
import { mockLoans } from '../lib/data'


export default function Loans() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('active')

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'active':
                return <Clock className="w-5 h-5 text-blue-500" />
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-500" />
            case 'pending':
                return <AlertCircle className="w-5 h-5 text-yellow-500" />
            default:
                return null
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-blue-100 text-blue-800'
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const filteredLoans = mockLoans.filter(loan => {
        if (activeTab === 'active') return loan.status === 'active'
        if (activeTab === 'completed') return loan.status === 'completed'
        if (activeTab === 'pending') return loan.status === 'pending'
        return true
    })

    return (
        <DashboardLayout>
            <div className="p-6 w-full space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-2xl font-semibold text-gray-900">Loans</h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    View and manage your loans
                                </p>
                            </div>
                            <button
                                onClick={() => router.push('/loans/requests')}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Request New Loan
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-6">
                            <nav className="flex gap-0 md:gap-4">
                                {['all', 'active', 'pending', 'completed'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Loans Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {filteredLoans.map((loan) => (
                                <div
                                    key={loan.id}
                                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-2">
                                            {getStatusIcon(loan.status)}
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${getStatusColor(loan.status)}`}>
                                                {loan.status}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => router.push(`/loans/${loan.id}`)}
                                            className="text-blue-600 hover:text-blue-700"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-sm text-gray-500">Loan Amount</div>
                                            <div className="text-lg font-semibold">₦{loan.amount.toLocaleString()}</div>
                                        </div>

                                        <div className="flex justify-between">
                                            <div>
                                                <div className="text-sm text-gray-500">Tenure</div>
                                                <div className="font-medium">{loan.tenure} months</div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-500">Interest Rate</div>
                                                <div className="font-medium">{loan.interestRate}%</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-sm text-gray-500">Purpose</div>
                                            <div className="font-medium">{loan.purpose}</div>
                                        </div>

                                        {loan.status === 'active' && (
                                            <div className="pt-2 border-t border-gray-100">
                                                <div className="text-sm text-gray-500">Next Payment</div>
                                                <div className="font-medium">
                                                    ₦{(loan.amount / loan.tenure).toFixed(2)} on {new Date(loan.nextPayment!).toLocaleDateString()}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}


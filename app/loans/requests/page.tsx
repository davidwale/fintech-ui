'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import DashboardLayout from '@/app/components/dashboard-layout'

interface FormData {
    amount: string
    tenure: string
    purpose: string
    income: string
    employment: string
}

interface FormErrors {
    amount?: string
    tenure?: string
    purpose?: string
    income?: string
    employment?: string
}

export default function RequestLoan() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        amount: '',
        tenure: '',
        purpose: '',
        income: '',
        employment: ''
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Amount validation
        if (!formData.amount) {
            newErrors.amount = 'Amount is required'
        } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
            newErrors.amount = 'Please enter a valid amount'
        } else if (Number(formData.amount) > 50000) {
            newErrors.amount = 'Maximum loan amount is ₦50,000'
        }

        // Tenure validation
        if (!formData.tenure) {
            newErrors.tenure = 'Tenure is required'
        } else if (isNaN(Number(formData.tenure)) || Number(formData.tenure) <= 0) {
            newErrors.tenure = 'Please enter a valid tenure'
        } else if (Number(formData.tenure) > 60) {
            newErrors.tenure = 'Maximum tenure is 60 months'
        }

        // Purpose validation
        if (!formData.purpose) {
            newErrors.purpose = 'Purpose is required'
        } else if (formData.purpose.length < 10) {
            newErrors.purpose = 'Please provide more details about the purpose'
        }

        // Income validation
        if (!formData.income) {
            newErrors.income = 'Income is required'
        } else if (isNaN(Number(formData.income)) || Number(formData.income) <= 0) {
            newErrors.income = 'Please enter a valid income amount'
        }

        // Employment validation
        if (!formData.employment) {
            newErrors.employment = 'Employment status is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Replace with your actual API call
            await new Promise(resolve => setTimeout(resolve, 1500))
            router.push('/loans')
        } catch (error) {
            console.error('Error submitting loan request:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    return (
        <DashboardLayout>
            <div className="p-6 w-full">
                <div className="max-w-2xl mx-auto">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                    </button>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Request a Loan</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Loan Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className={`pl-7 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.amount
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                            }`}
                                        placeholder="Enter loan amount"
                                    />
                                </div>
                                {errors.amount && (
                                    <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Loan Tenure (months)
                                </label>
                                <input
                                    type="number"
                                    name="tenure"
                                    value={formData.tenure}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.tenure
                                        ? 'border-red-300 focus:ring-red-200'
                                        : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    placeholder="Enter loan tenure"
                                />
                                {errors.tenure && (
                                    <p className="mt-1 text-sm text-red-600">{errors.tenure}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Loan Purpose
                                </label>
                                <textarea
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleChange}
                                    rows={3}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.purpose
                                        ? 'border-red-300 focus:ring-red-200'
                                        : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                    placeholder="Describe the purpose of your loan"
                                />
                                {errors.purpose && (
                                    <p className="mt-1 text-sm text-red-600">{errors.purpose}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Monthly Income
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                                    <input
                                        type="number"
                                        name="income"
                                        value={formData.income}
                                        onChange={handleChange}
                                        className={`pl-7 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.income
                                            ? 'border-red-300 focus:ring-red-200'
                                            : 'border-gray-300 focus:ring-blue-200'
                                            }`}
                                        placeholder="Enter your monthly income"
                                    />
                                </div>
                                {errors.income && (
                                    <p className="mt-1 text-sm text-red-600">{errors.income}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Employment Status
                                </label>
                                <select
                                    name="employment"
                                    value={formData.employment}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.employment
                                        ? 'border-red-300 focus:ring-red-200'
                                        : 'border-gray-300 focus:ring-blue-200'
                                        }`}
                                >
                                    <option value="">Select employment status</option>
                                    <option value="full-time">Full-time employed</option>
                                    <option value="part-time">Part-time employed</option>
                                    <option value="self-employed">Self-employed</option>
                                    <option value="unemployed">Unemployed</option>
                                </select>
                                {errors.employment && (
                                    <p className="mt-1 text-sm text-red-600">{errors.employment}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Loan Request'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}


import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function LoanManagement() {
    const { user, loans, requestLoan } = useContext(UserContext)
    const [amount, setAmount] = useState('')
    const [tenure, setTenure] = useState('')
    const [purpose, setPurpose] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (amount && tenure && purpose) {
            requestLoan({ amount: parseFloat(amount), tenure: parseInt(tenure), purpose })
            setAmount('')
            setTenure('')
            setPurpose('')
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Loan Management</h2>
            {loans.length > 0 ? (
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Current Loan</h3>
                    <p>
                        Amount: ₦{loans[0].amount.toFixed(2)} | Tenure: {loans[0].tenure} months | Purpose: {loans[0].purpose}
                    </p>
                </div>
            ) : (
                <p className="mb-4">No active loans</p>
            )}
            <h3 className="text-lg font-semibold mb-2">Request New Loan</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="amount" className="block mb-1">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tenure" className="block mb-1">
                        Tenure (months)
                    </label>
                    <input
                        type="number"
                        id="tenure"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="purpose" className="block mb-1">
                        Purpose
                    </label>
                    <input
                        type="text"
                        id="purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Request Loan
                </button>
            </form>
        </div>
    )
}


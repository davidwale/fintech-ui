"use client";

import React, { createContext, useState, useEffect } from 'react'
import { fetchUserData, fetchTransactions, postLoanRequest } from '../lib/api'

interface User {
    id: number
    name: string
    avatar: string
    email: string
    phone: string
    address: string
    accountType: string
    joinDate: string
    kycStatus: string
    twoFactorEnabled: boolean,
    notificationPreferences: {
        email: boolean,
        push: boolean,
        sms: boolean
    }
    accountBalance: number
    recentTransactions: Transaction[]
}

interface Loan {
    amount: number
    tenure: number
    purpose: string
}

interface Transaction {
    id: number
    date: string
    description: string
    amount: number
    type: string
}

interface UserContextType {
    user: User | null
}

export const UserContext = createContext<UserContextType>({
    user: null,
})

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loans, setLoans] = useState<Loan[]>([])
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const loadUserData = async () => {
            const userData = await fetchUserData()
            setUser(userData)
        }

        const loadTransactions = async () => {
            const transactionData = await fetchTransactions()
            setTransactions(transactionData)
        }

        loadUserData()
        loadTransactions()
    }, [])

    const requestLoan = async (loan: Loan) => {
        const newLoan = await postLoanRequest(loan)
        setLoans([...loans, newLoan])
    }

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}


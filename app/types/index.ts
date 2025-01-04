export interface User {
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

export interface Loan {
    id?: number
    amount: number
    tenure: number
    purpose: string
    status?: string
}

export interface Transaction {
    id: number
    date: string
    description: string
    amount: number
    type: string
}


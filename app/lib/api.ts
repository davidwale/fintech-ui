import { User, Loan, Transaction } from '../types/index'


export const fetchUserData = async (): Promise<User> => {
    return {
        id: 1,
        name: 'David Oyewale',
        email: 'davidwale2003@gmail.com',
        phone: '+234 916 987 5556',
        address: 'Ogombo-Ajah, Lagos State',
        avatar: 'https://i.postimg.cc/rFc1h4mJ/me.jpg',
        accountType: 'Premium',
        joinDate: '2023-01-15',
        kycStatus: 'verified',
        twoFactorEnabled: true,
        notificationPreferences: {
            email: true,
            push: true,
            sms: false
        },
        accountBalance: 10000000,
        recentTransactions: [
            { id: 1, date: '2023-05-01', description: 'Salary', amount: 30000, type: 'credit' },
            { id: 2, date: '2023-05-02', description: 'Rent', amount: 10000, type: 'debit' },
            { id: 3, date: '2023-05-03', description: 'Groceries', amount: 10050, type: 'debit' },
        ],
    }
}

export const fetchTransactions = async (): Promise<Transaction[]> => {
    return [
        { id: 1, date: '2023-05-01', description: 'Salary', amount: 3000, type: 'credit' },
        { id: 2, date: '2023-05-02', description: 'Rent', amount: 1000, type: 'debit' },
        { id: 3, date: '2023-05-03', description: 'Groceries', amount: 150, type: 'debit' },
        { id: 4, date: '2023-05-04', description: 'Online Shopping', amount: 200, type: 'debit' },
        { id: 5, date: '2023-05-05', description: 'Freelance Work', amount: 500, type: 'credit' },
    ]
}

export const postLoanRequest = async (loan: Loan): Promise<Loan> => {
    return {
        ...loan,
        id: Math.floor(Math.random() * 1000),
        status: 'pending',
    }
}


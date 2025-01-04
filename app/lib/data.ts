export const mockFinanceData = {
    target: 10000,
    achieved: 65,
    timeline: 'May 2024',
    segments: [
        { label: 'Savings', percentage: 30, color: 'bg-blue-500' },
        { label: 'Investments', percentage: 20, color: 'bg-green-500' },
        { label: 'Spending', percentage: 15, color: 'bg-yellow-500' },
    ]
}

export const mockUserData = {
    id: 1,
    name: 'David Oyewale',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Financial District, New York, NY 10004',
    avatar: '/placeholder.svg',
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

export const mockTransactions = [
    {
        id: 1,
        title: 'Online Purchase',
        amount: 299.99,
        type: 'debit',
        merchant: 'Amazon',
        category: 'Shopping',
        date: '2024-01-02',
        status: 'completed'
    },
    {
        id: 2,
        title: 'Salary Deposit',
        amount: 5000.00,
        type: 'credit',
        merchant: 'Employer Inc',
        category: 'Income',
        date: '2024-01-01',
        status: 'completed'
    }
]

export const mockActivities = [
    {
        id: 1,
        type: 'loan_approved',
        title: 'Personal Loan Approved',
        amount: 5000,
        date: '2024-01-03',
        status: 'approved'
    },
    {
        id: 2,
        type: 'investment_matured',
        title: 'Investment Matured',
        amount: 1000,
        date: '2024-01-02',
        status: 'completed'
    }
]

export const mockRecentTransactions = [
    {
        id: 1,
        title: 'Grocery Shopping',
        amount: 85.50,
        type: 'debit',
        date: '2024-01-03',
        category: 'Groceries'
    },
    {
        id: 2,
        title: 'Freelance Payment',
        amount: 750.00,
        type: 'credit',
        date: '2024-01-02',
        category: 'Income'
    }
]

export const mockLoans = [
    {
        id: 1,
        amount: 5000,
        tenure: 12,
        purpose: 'Home Renovation',
        status: 'active',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        interestRate: 8.5,
        remainingAmount: 4583.33,
        nextPayment: '2024-02-01',
    },
    {
        id: 2,
        amount: 2000,
        tenure: 6,
        purpose: 'Education',
        status: 'completed',
        startDate: '2023-06-01',
        endDate: '2023-12-31',
        interestRate: 7.5,
        remainingAmount: 0,
        nextPayment: null,
    },
    {
        id: 3,
        amount: 1500,
        tenure: 3,
        purpose: 'Medical Emergency',
        status: 'pending',
        startDate: null,
        endDate: null,
        interestRate: 9.0,
        remainingAmount: 1500,
        nextPayment: null,
    },
]
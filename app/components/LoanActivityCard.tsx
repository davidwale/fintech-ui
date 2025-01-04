import { Check, Clock, AlertCircle } from 'lucide-react'

interface LoanActivityCardProps {
    type: string
    title: string
    amount: number
    date: string
    status: string
}

export function LoanActivityCard({
    title,
    amount,
    date,
    status
}: LoanActivityCardProps) {
    const getStatusIcon = () => {
        switch (status) {
            case 'approved':
                return <Check className="w-4 h-4 text-green-500" />
            case 'pending':
                return <Clock className="w-4 h-4 text-yellow-500" />
            case 'rejected':
                return <AlertCircle className="w-4 h-4 text-red-500" />
            default:
                return null
        }
    }

    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
            <div className="flex items-center gap-3">
                {getStatusIcon()}
                <div>
                    <h4 className="text-sm font-medium text-gray-900">{title}</h4>
                    <p className="text-xs text-gray-500">
                        ₦{amount.toFixed(2)} • {new Date(date).toLocaleDateString()}
                    </p>
                </div>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full capitalize"
                style={{
                    backgroundColor: status === 'approved' ? '#dcfce7' :
                        status === 'pending' ? '#fef9c3' : '#fee2e2',
                    color: status === 'approved' ? '#166534' :
                        status === 'pending' ? '#854d0e' : '#991b1b'
                }}>
                {status}
            </span>
        </div>
    )
}


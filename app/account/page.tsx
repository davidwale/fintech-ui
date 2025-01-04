'use client'

import { useState, useContext } from 'react'
import { User, Shield, Bell, CreditCard, Key, Mail, Phone, MapPin, Camera } from 'lucide-react'
import DashboardLayout from '../components/dashboard-layout'
import { UserContext } from '../context/UserContext'


export default function Account() {
    const [isEditing, setIsEditing] = useState(false)
    const { user } = useContext(UserContext)
    const [activeTab, setActiveTab] = useState('personal')

    const handleSave = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsEditing(false)
    }

    const tabs = [
        { id: 'personal', label: 'Personal Info', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'payment', label: 'Payment Methods', icon: CreditCard }
    ]

    return (
        <DashboardLayout>
            <div className="p-6 w-full space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {user ? (
                        <>
                            <div className="p-6">
                                {/* Profile Header */}
                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-6 border-b border-gray-200">
                                    <div className="relative">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-24 h-24 rounded-full"
                                        />
                                        <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
                                            <Camera className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
                                        <p className="text-gray-500">Account ID: #{user.id}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {user.accountType}
                                            </span>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                KYC {user.kycStatus}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="border-b border-gray-200 mt-6">
                                    <nav className="flex gap-6 sm:gap:4">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.id
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <tab.icon className="w-4 h-4" />
                                                <span className="hidden sm:inline">{tab.label}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>


                                {/* Tab Content */}
                                <div className="mt-6">
                                    {activeTab === 'personal' && (
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <User className="w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            value={user.name}
                                                            disabled={!isEditing}
                                                            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <Mail className="w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="email"
                                                            value={user.email}
                                                            disabled={!isEditing}
                                                            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <Phone className="w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="tel"
                                                            value={user.phone}
                                                            disabled={!isEditing}
                                                            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Address</label>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <MapPin className="w-5 h-5 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            value={user.address}
                                                            disabled={!isEditing}
                                                            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-50"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-4">
                                                {isEditing ? (
                                                    <>
                                                        <button
                                                            onClick={() => setIsEditing(false)}
                                                            className="px-4 py-2 text-gray-600 hover:text-gray-900"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={handleSave}
                                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        onClick={() => setIsEditing(true)}
                                                        className="px-4 py-2 text-blue-600 hover:text-blue-700"
                                                    >
                                                        Edit Profile
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'security' && (
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Add an extra layer of security to your account
                                                </p>
                                                <div className="mt-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Key className="w-5 h-5 text-gray-400" />
                                                        <span className="text-sm text-gray-700">
                                                            {user.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                                                        </span>
                                                    </div>
                                                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                                                        {user.twoFactorEnabled ? 'Disable' : 'Enable'}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-medium text-gray-900">Password</h3>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Change your password regularly to keep your account secure
                                                </p>
                                                <button className="mt-4 px-4 py-2 text-blue-600 hover:text-blue-700">
                                                    Change Password
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'notifications' && (
                                        <div className="space-y-6">
                                            {Object.entries(user.notificationPreferences).map(([key, value]) => (
                                                <div key={key} className="flex items-center justify-between py-4">
                                                    <div className="flex items-center gap-2">
                                                        {key === 'email' && <Mail className="w-5 h-5 text-gray-400" />}
                                                        {key === 'push' && <Bell className="w-5 h-5 text-gray-400" />}
                                                        {key === 'sms' && <Phone className="w-5 h-5 text-gray-400" />}
                                                        <div>
                                                            <p className="font-medium capitalize">{key} Notifications</p>
                                                            <p className="text-sm text-gray-500">
                                                                Receive notifications via {key}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={value}
                                                            className="sr-only peer"
                                                        />
                                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'payment' && (
                                        <div className="space-y-6">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="text-lg font-medium text-gray-900">Payment Methods</h3>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Manage your payment methods and billing information
                                                </p>
                                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                                    Add Payment Method
                                                </button>
                                            </div>
                                            <div className="border rounded-lg divide-y">
                                                {/* Example card */}
                                                <div className="p-4 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                                                            <CreditCard className="w-6 h-6 text-gray-500" />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">•••• •••• •••• 4242</p>
                                                            <p className="text-sm text-gray-500">Expires 12/24</p>
                                                        </div>
                                                    </div>
                                                    <button className="text-red-600 hover:text-red-700">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}


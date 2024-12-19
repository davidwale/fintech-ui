'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface AgentSkillModalProps {
    onClose: () => void
}

export function AgentSkillModal({ onClose }: AgentSkillModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                    <XMarkIcon className="h-5 w-5" />
                </button>

                <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14v4h2V6h-2zm0 6v2h2v-2h-2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold">Agent skill</h2>
                    </div>

                    {/* Main content */}
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <h3 className="font-medium mb-3">
                                Check if on-hand inventory will allow all sales orders to ship without delay
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                When <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">any vendor</span> sends
                                an email with changes to <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">confirmed purchase orders</span>,
                                check if the resulting <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">on-hand inventory</span> will
                                allow <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">all sales orders</span> to <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">ship without delay</span>.
                                If so, <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">update the purchase order</span> to reflect the change.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-medium flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                                </svg>
                                Enable email access
                            </h3>
                            <p className="text-gray-600">
                                Allow the agent to access email inboxes to read mail from known vendors
                            </p>
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <div className="absolute inset-y-0 left-3 flex items-center">
                                        <span className="h-6 w-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm">
                                            P
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="purchasing@contoso.com"
                                        className="w-full pl-12 pr-10 py-2 border border-gray-300 rounded-lg"
                                    />
                                    <button className="absolute inset-y-0 right-3 flex items-center">
                                        <XMarkIcon className="h-4 w-4 text-gray-400" />
                                    </button>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                    Allow access
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <button
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                            Activate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


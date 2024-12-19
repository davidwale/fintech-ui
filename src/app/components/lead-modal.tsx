'use client'

import { useState } from 'react'
import { XMarkIcon, PencilIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Lead } from '../types'
import { AgentSkillModal } from './agent-skill-modal'

interface LeadModalProps {
    lead: Lead
    onClose: () => void
}

export function LeadModal({ lead, onClose }: LeadModalProps) {
    const [showAgentSkill, setShowAgentSkill] = useState(false)

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white border-purple-600 border-4 bor shadow rounded-xl max-w-5xl w-full mx-4 relative overflow-auto max-h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>

                <div className="p-4 shadow-xl">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                        <img
                            src={lead.avatar || '/image.png'}
                            alt=""
                            className="h-12 w-12 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                {lead.name}
                                {lead.linkedIn && (
                                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                )}
                            </h2>
                            <p className="text-gray-500">
                                {lead.title} • {lead.company}
                            </p>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mt-4 bg-blue-50 rounded-lg p-3">
                        <div className="flex items-start justify-between">
                            <p className="text-blue-700">{lead.message}</p>
                            <div className="flex gap-2 ml-4">
                                <button className="p-1.5 text-gray-500 hover:text-gray-600 rounded">
                                    <PencilIcon className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setShowAgentSkill(true)}
                                    className="flex px-3 py-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-600 text-white rounded text-md">
                                    <PaperAirplaneIcon className='mr-2 h-5 w-5' />
                                    Approve and send
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Engage/Search Section */}
                    <div className="mt-4 flex gap-3">
                        <button className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded">
                            Engage
                        </button>
                        <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded border-b-2 border-blue-600">
                            Search
                        </button>
                    </div>

                    {/* Why I picked this lead */}
                    <div className="mt-4 bg-gray-50 rounded-lg p-3">
                        <h3 className="font-semibold text-gray-900 mb-3">Why I picked this lead</h3>
                        <ul className="space-y-2">
                            {lead.reasonsForPick.map((reason, index) => (
                                <li key={index} className="flex gap-2 text-gray-700">
                                    <span>•</span>
                                    <span>{reason}</span>
                                    <span className="ml-1 text-gray-400">{index + 1}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Status Cards */}
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Decision maker</div>
                                    <div className="font-semibold">Yes</div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                                <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <svg className="h-5 w-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Potential deal value</div>
                                    <div className="font-semibold">{lead.dealValue}</div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 flex items-center gap-3">
                                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="h-5 w-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Intent</div>
                                    <div className="font-semibold">{lead.intent}</div>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-4 flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <img src="/placeholder.svg?height=24&width=24" className="h-6 w-6 rounded-full ring-2 ring-white" />
                                <div className="h-6 w-6 rounded-full bg-blue-600 ring-2 ring-white flex items-center justify-center">
                                    <span className="text-xs text-white">+2</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="px-2 py-1 bg-gray-100 rounded">D365 Sales</span>
                            </div>
                            <span className="text-gray-400 text-xs">AI-generated content may be incorrect</span>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mt-4">
                        <button className="w-full text-left p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-900">About {lead.name.split(' ')[0]}</h3>
                                <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="mt-2 text-gray-600">{lead.about}</p>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                            <span>Showing 1 of 9</span>
                            <button className="text-blue-600 hover:text-blue-700">Show all</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                            <button className="p-1.5 hover:bg-gray-100 rounded-full">
                                <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                            </button>
                            <button className="p-1.5 hover:bg-gray-100 rounded-full">
                                <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showAgentSkill && (
                <AgentSkillModal onClose={() => setShowAgentSkill(false)} />
            )}
        </div>
    )
}


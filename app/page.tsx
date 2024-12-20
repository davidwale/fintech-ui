import { mockLeads, mockActivities, mockUsers, mockProgress } from './lib/data'
import { LeadCard } from './components/lead-card'
import { LeadsList } from './components/leads-list'
import { ActivityCard } from './components/activity-card'
import { ProgressBar } from './components/progress-bar'
import DashboardLayout from './components/dashboard-layout'
import Image from 'next/image'

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-6 w-full space-y-6">
        <div className="bg-white rounded-lg shadow-sm border w-full border-gray-200 p-4">
          <div className="flex flex-col md:flex-row items-start justify-between mb-6">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full flex items-center justify-center">
                <Image src="/Copilot-Logo.svg" alt="co-pilot" width={100} height={100} />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                  Hi Mona, <span className="text-blue-600">{mockProgress.achieved}%</span> of goal achieved
                </h1>
                <p className="text-gray-500 mt-1">
                  Rest can be achieved by focusing on 20 top leads
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">{mockProgress.timeline}</div>
              <div>
                <div className="text-sm text-gray-500">Target</div>
                <div className="text-sm md:text-lg font-semibold">
                  ${(mockProgress.target / 1000000).toFixed(0)}M
                </div>
              </div>
            </div>
          </div>

          <ProgressBar segments={mockProgress.segments} className="mt-4" />

          <p className="mt-6 text-sm text-gray-600">
            Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {mockLeads.map(lead => (
              <LeadCard key={lead.id} {...lead} />
            ))}
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Other key activities</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Show all key activities
              </button>
            </div>
            <div className="space-y-2">
              {mockActivities.map(activity => (
                <ActivityCard key={activity.id} {...activity} />
              ))}
            </div>
          </div>
        </div>
        <LeadsList leads={mockUsers} />
      </div>
    </DashboardLayout>
  )
}


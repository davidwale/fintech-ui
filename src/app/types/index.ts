export interface Lead {
    id: string
    name: string
    topic: string
    title: string
    company: string
    avatar?: string
    linkedIn?: boolean
    message: string
    reasonsForPick: string[]
    isDecisionMaker: boolean
    dealValue: string
    intent: string
    about: string
    status: string
    createdOn: string
    tags: Array<{
        icon: string
        label: string
        count?: number
    }>
}


export interface Activity {
    id: string
    title: string
    company: string
    value: string
    daysToClose: number
    type: string
}

export interface Goal {
    current: number
    target: number
    percentage: number
}

export interface navItems {
    icon: string
    label: string
    type: string
    isActive: Boolean
}

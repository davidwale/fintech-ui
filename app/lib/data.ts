export const mockLeads = [
    {
        id: '1',
        name: 'Jane Reyes',
        position: 'COO',
        company: 'Northwind Traders',
        avatar: '/image.png',
        action: 'Engage with Jane Reyes',
        description: 'Jane may be interested in upgrading espresso machines for her in-store coffee shops.',
        tags: ['Expand business', 'High buying intent'],
        createdOn: '2024-12-01T10:30:00.000Z',
    },
    {
        id: '2',
        name: 'Allan Munger',
        position: 'Head of Real Estate Development',
        company: 'Contoso Coffee',
        avatar: '/image.png',
        action: 'Prepare for meeting with Allan',
        description: 'Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.',
        tags: ['Upcoming meeting', 'Due today'],
        createdOn: '2024-12-05T14:15:00.000Z',
    },
    {
        id: '3',
        name: 'Carole Poland',
        position: 'Marketing Manager',
        company: 'Adventure Works',
        avatar: '/image.png',
        action: 'Follow up on marketing proposal',
        description: 'Carole showed interest in exploring social media marketing strategies for Q1.',
        tags: ['Marketing', 'Follow-up'],
        createdOn: '2024-12-03T09:45:00.000Z',
    },
];

export const mockUsers = [
    {
        id: '1',
        name: 'Jane Reyes',
        title: 'COO',
        company: 'Northwind Traders',
        avatar: '/image.png',
        linkedIn: true,
        message: 'Jane may be interested in upgrading espresso machines for her in-store coffee shops.',
        reasonsForPick: [
            'Jane is a key decision maker and was browsing "espresso machines" on First Coffee\'s website.',
            'Multiple people at her company have reported "slowness" during service requests.',
            'Northwind Traders currently see $200M in revenue from their in-store coffee shops.'
        ],
        isDecisionMaker: true,
        dealValue: '$1M',
        intent: 'High',
        about: 'Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders\' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane\'s commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops\' offerings, ensuring consistent, high-quality service.',
        tags: [
            { icon: 'user', label: 'D365 Sales', count: 1 },
            { icon: 'plus', label: '+2', count: 2 }
        ],
        createdOn: '2024-12-01T10:30:00.000Z',
        topic: 'Espresso Machine Upgrade Proposal',
        status: 'New',
    },
    {
        id: '2',
        name: 'Allan Munger',
        title: 'Head of Real Estate Development',
        company: 'Contoso Coffee',
        avatar: '/image.png',
        linkedIn: false,
        message: 'Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.',
        reasonsForPick: [
            'Allan has shown interest in expanding Contoso Coffee\'s real estate portfolio.',
            'Recent market analysis indicates potential for significant growth in Allan\'s target areas.',
            'Contoso Coffee has a history of successful partnerships with our company.'
        ],
        isDecisionMaker: true,
        dealValue: '$500K',
        intent: 'High',
        about: 'Allan Munger leads the real estate development efforts at Contoso Coffee, focusing on strategic expansion and optimization of their coffee shop locations. With a keen eye for prime locations and a deep understanding of the coffee industry, Allan plays a crucial role in Contoso\'s growth strategy. His approach to development aligns well with our service offerings, presenting a valuable opportunity for an upgraded service contract.',
        tags: [
            { icon: 'building', label: 'Real Estate', count: 1 },
            { icon: 'chart', label: 'High Value', count: 1 }
        ],
        createdOn: '2024-12-05T14:15:00.000Z',
        topic: 'Service Contract Renewal Meeting',
        status: 'New',
    },
    {
        id: '3',
        name: 'Emma Brown',
        title: 'CFO',
        company: 'Litware Corporation',
        avatar: '/image.png',
        linkedIn: true,
        message: 'Emma is evaluating cost-effective solutions for office supplies across multiple regions.',
        reasonsForPick: [
            'Emma has been reviewing our latest pricing model for bulk office supplies.',
            'Litware Corporation is undergoing a procurement restructuring process.',
            'Emma is actively engaging with multiple suppliers for cost comparisons.'
        ],
        isDecisionMaker: true,
        dealValue: '$750K',
        intent: 'Medium',
        about: 'Emma Brown is the Chief Financial Officer at Litware Corporation, overseeing financial strategies and procurement decisions. With a sharp focus on optimizing costs, she is steering the company through a transformation in its supply chain operations. Her interest in innovative, cost-efficient solutions makes her a strong candidate for collaboration.',
        tags: [
            { icon: 'finance', label: 'Procurement', count: 1 },
            { icon: 'chart', label: 'Cost Savings', count: 1 }
        ],
        createdOn: '2024-12-02T09:20:00.000Z',
        topic: 'Bulk Office Supplies Proposal',
        status: 'In Progress',
    },
    {
        id: '4',
        name: 'Sophia Green',
        title: 'Marketing Director',
        company: 'Fourth Coffee',
        avatar: '/image.png',
        linkedIn: true,
        message: 'Sophia is looking for innovative solutions to boost customer engagement.',
        reasonsForPick: [
            'Sophia attended our recent webinar on digital marketing solutions.',
            'Fourth Coffee has shown interest in our email campaign tools.',
            'Customer engagement metrics at Fourth Coffee have room for improvement.'
        ],
        isDecisionMaker: true,
        dealValue: '$300K',
        intent: 'High',
        about: 'Sophia Green leads marketing initiatives at Fourth Coffee, driving innovative campaigns that capture customer interest. Her focus on leveraging cutting-edge tools to enhance engagement makes her an excellent partner for our digital marketing solutions.',
        tags: [
            { icon: 'marketing', label: 'Engagement', count: 1 },
            { icon: 'campaign', label: 'Digital Campaigns', count: 1 }
        ],
        createdOn: '2024-12-06T11:45:00.000Z',
        topic: 'Customer Engagement Strategies',
        status: 'New',
    },
    {
        id: '5',
        name: 'Michael Johnson',
        title: 'Supply Chain Manager',
        company: 'Proseware Inc.',
        avatar: '/image.png',
        linkedIn: false,
        message: 'Michael is interested in streamlining supply chain operations with advanced tools.',
        reasonsForPick: [
            'Michael has inquired about our supply chain analytics solutions.',
            'Proseware is expanding its product distribution network.',
            'Supply chain inefficiencies have been a reported challenge for his team.'
        ],
        isDecisionMaker: false,
        dealValue: '$400K',
        intent: 'Medium',
        about: 'Michael Johnson oversees supply chain operations at Proseware Inc., focusing on efficiency and sustainability. His interest in data-driven tools aligns well with our offerings.',
        tags: [
            { icon: 'analytics', label: 'Supply Chain', count: 1 },
            { icon: 'tools', label: 'Efficiency', count: 1 }
        ],
        createdOn: '2024-12-03T16:10:00.000Z',
        topic: 'Streamlined Operations Proposal',
        status: 'In Progress',
    },
    {
        id: '6',
        name: 'Olivia Taylor',
        title: 'HR Manager',
        company: 'Adventure Works',
        avatar: '/image.png',
        linkedIn: true,
        message: 'Olivia is looking for talent management solutions for employee engagement.',
        reasonsForPick: [
            'Adventure Works has shown interest in our HR analytics tools.',
            'Olivia is working to improve employee satisfaction scores.',
            'Recent feedback indicates a need for better employee retention programs.'
        ],
        isDecisionMaker: false,
        dealValue: '$100K',
        intent: 'Low',
        about: 'Olivia Taylor is the HR Manager at Adventure Works, focusing on innovative solutions for enhancing employee engagement and satisfaction. Her interest in cutting-edge HR tools presents a unique opportunity for collaboration.',
        tags: [
            { icon: 'employee', label: 'Talent Management', count: 1 },
            { icon: 'chart', label: 'Retention', count: 1 }
        ],
        createdOn: '2024-12-07T10:00:00.000Z',
        topic: 'Employee Engagement Proposal',
        status: 'New',
    },
    {
        id: '7',
        name: 'Ethan Carter',
        title: 'Technical Lead',
        company: 'Fabrikam',
        avatar: '/image.png',
        linkedIn: false,
        message: 'Ethan is evaluating new software solutions to enhance project workflows.',
        reasonsForPick: [
            'Ethan has participated in webinars on agile project management.',
            'Fabrikam is adopting new DevOps practices.',
            'Recent surveys highlight bottlenecks in their current workflows.'
        ],
        isDecisionMaker: true,
        dealValue: '$600K',
        intent: 'Medium',
        about: 'Ethan Carter is a Technical Lead at Fabrikam, specializing in implementing efficient project workflows. His expertise in DevOps practices makes him a valuable collaborator for innovative software solutions.',
        tags: [
            { icon: 'tech', label: 'DevOps', count: 1 },
            { icon: 'agile', label: 'Agile', count: 1 }
        ],
        createdOn: '2024-12-04T15:30:00.000Z',
        topic: 'Agile Workflow Enhancements',
        status: 'In Progress',
    },

];



export const mockActivities = [
    {
        id: '1',
        title: 'Cafe A100 for Woodland Bank',
        company: 'Woodland Bank',
        value: '$180,000',
        daysToClose: 8,
        action: 'Review draft and reply to Chris Naido'
    },
    {
        id: '2',
        title: 'Partnership opportunity for Fabrikam',
        company: 'Fabrikam',
        value: '$5,000,000',
        daysToClose: 12,
        action: 'Prepare me for Fabrikam\'s key stakeholder meeting'
    }
]

export const mockProgress = {
    timeline: '1 month until Q4 ends',
    target: 45000000,
    achieved: 68,
    segments: [
        { label: 'Won', value: '$16m', color: 'bg-green-500' },
        { label: 'Committed', value: '$8m', color: 'bg-blue-500' },
        { label: 'Best case', value: '$7m', color: 'bg-purple-400' },
        { label: 'Qualified', value: '$5m', color: 'bg-orange-300' },
        { label: 'Leads', value: '$7.5m', color: 'bg-gray-300' }
    ]
}


// Simple, flat category structure - backend-ready
export const categories = [
  {
    id: 1,
    name: 'Oracle Administration',
    slug: 'oracle-administration',
    icon: 'Database',
    description: 'Core Oracle DBA tasks'
  },
  {
    id: 2,
    name: 'High Availability',
    slug: 'high-availability',
    icon: 'Layers',
    description: 'RAC, DataGuard & GoldenGate'
  },
  {
    id: 3,
    name: 'Monitoring & Tools',
    slug: 'monitoring-tools',
    icon: 'Activity',
    description: 'Database monitoring & OEM'
  },
  {
    id: 4,
    name: 'Troubleshooting',
    slug: 'troubleshooting',
    icon: 'AlertCircle',
    description: 'ORA errors & solutions'
  },
  {
    id: 5,
    name: 'Oracle 23ai',
    slug: 'oracle-23ai',
    icon: 'Sparkles',
    description: 'Latest features & AI'
  },
  {
    id: 6,
    name: 'Interview Prep',
    slug: 'interview-prep',
    icon: 'MessageSquare',
    description: 'Questions & career tips'
  }
]

// Helper functions (will work with API later)
export const getCategoryById = (id) => {
  return categories.find(cat => cat.id === id)
}

export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug)
}

// Mock blog data - backend-ready structure
export const mockBlogs = [
  {
    id: 1,
    title: 'Oracle 19c Installation on Linux',
    slug: 'oracle-19c-installation-linux',
    categoryId: 1,
    categoryName: 'Oracle Administration',
    categorySlug: 'oracle-administration',
    excerpt: 'Complete step-by-step guide to install Oracle Database 19c on Linux systems with best practices.',
    content: `
# Oracle 19c Installation on Linux

This comprehensive guide walks you through the installation process...

## Prerequisites
- Linux OS (Oracle Linux 7/8 or RHEL 7/8)
- Minimum 8GB RAM
- 50GB disk space

## Installation Steps
1. Download Oracle 19c software
2. Configure OS parameters
3. Create oracle user
4. Run installer

Complete installation guide with screenshots and troubleshooting tips.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-15',
    updatedDate: '2024-03-15',
    readTime: 12,
    views: 1250,
    likes: 85,
    tags: ['Oracle 19c', 'Installation', 'Linux', 'Database'],
    featured: true,
    thumbnail: '/blog-thumbnails/oracle-19c-installation.jpg',
    status: 'published'
  },
  {
    id: 2,
    title: 'Understanding ORA-00600 Internal Error',
    slug: 'understanding-ora-00600-error',
    categoryId: 4,
    categoryName: 'Troubleshooting',
    categorySlug: 'troubleshooting',
    excerpt: 'Deep dive into ORA-00600 internal errors, their causes, and resolution strategies.',
    content: `
# Understanding ORA-00600 Internal Error

ORA-00600 is an internal error code that indicates Oracle has encountered an unexpected condition...

## Common Causes
- Bug in Oracle code
- Corruption in database
- Hardware issues

## Resolution Steps
1. Check alert log
2. Review trace files
3. Contact Oracle Support

Detailed troubleshooting guide with examples.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-20',
    updatedDate: '2024-03-20',
    readTime: 8,
    views: 890,
    likes: 45,
    tags: ['ORA Errors', 'Troubleshooting', 'Database'],
    featured: false,
    thumbnail: '/blog-thumbnails/ora-00600.jpg',
    status: 'published'
  },
  {
    id: 3,
    title: 'Setting Up Oracle RAC 19c',
    slug: 'oracle-rac-19c-setup',
    categoryId: 2,
    categoryName: 'High Availability',
    categorySlug: 'high-availability',
    excerpt: 'Complete guide to configure Oracle Real Application Clusters for high availability.',
    content: `
# Setting Up Oracle RAC 19c

Oracle RAC provides high availability and scalability...

## Architecture Overview
- Shared storage
- Cluster interconnect
- Voting disks

## Setup Steps
1. Prepare infrastructure
2. Install Grid Infrastructure
3. Create RAC database

Comprehensive RAC setup guide.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-10',
    updatedDate: '2024-03-10',
    readTime: 15,
    views: 2100,
    likes: 150,
    tags: ['Oracle RAC', 'High Availability', 'Clustering'],
    featured: true,
    thumbnail: '/blog-thumbnails/rac-setup.jpg',
    status: 'published'
  },
  {
    id: 4,
    title: 'Database Performance Monitoring Tools',
    slug: 'database-performance-monitoring-tools',
    categoryId: 3,
    categoryName: 'Monitoring & Tools',
    categorySlug: 'monitoring-tools',
    excerpt: 'Essential tools and scripts for monitoring Oracle database performance.',
    content: `
# Database Performance Monitoring Tools

Learn about the essential tools for monitoring Oracle database performance...

## Key Tools
- AWR Reports
- ASH Reports
- SQL Monitoring
- OEM

## Best Practices
- Regular monitoring
- Performance baselines
- Proactive alerting

Complete monitoring guide.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-25',
    updatedDate: '2024-03-25',
    readTime: 10,
    views: 1450,
    likes: 92,
    tags: ['Monitoring', 'Performance', 'Tools'],
    featured: false,
    thumbnail: '/blog-thumbnails/monitoring-tools.jpg',
    status: 'published'
  },
  {
    id: 5,
    title: 'Oracle 23ai New Features Overview',
    slug: 'oracle-23ai-new-features',
    categoryId: 5,
    categoryName: 'Oracle 23ai',
    categorySlug: 'oracle-23ai',
    excerpt: 'Explore the groundbreaking new features in Oracle Database 23ai.',
    content: `
# Oracle 23ai New Features Overview

Oracle 23ai introduces revolutionary features...

## Key Features
- AI-powered query optimization
- Enhanced JSON support
- Automatic transaction rollback
- Vector search

## Benefits
- Improved performance
- Better AI integration
- Enhanced developer experience

Comprehensive feature overview.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-30',
    updatedDate: '2024-03-30',
    readTime: 14,
    views: 3200,
    likes: 210,
    tags: ['Oracle 23ai', 'New Features', 'AI'],
    featured: true,
    thumbnail: '/blog-thumbnails/23ai-features.jpg',
    status: 'published'
  },
  {
    id: 6,
    title: 'Top 50 Oracle DBA Interview Questions',
    slug: 'top-50-oracle-dba-interview-questions',
    categoryId: 6,
    categoryName: 'Interview Prep',
    categorySlug: 'interview-prep',
    excerpt: 'Comprehensive list of Oracle DBA interview questions with detailed answers.',
    content: `
# Top 50 Oracle DBA Interview Questions

Prepare for your Oracle DBA interview with these essential questions...

## Basic Questions
1. What is Oracle Database?
2. Explain tablespaces
3. What is an instance?

## Advanced Questions
1. Explain RMAN backup
2. How does RAC work?
3. Troubleshooting performance issues

Complete interview preparation guide.
    `,
    author: {
      name: 'Rupesh Ghubade',
      image: '/author.jpg',
      bio: 'Oracle DBA Expert'
    },
    publishedDate: '2024-03-05',
    updatedDate: '2024-03-05',
    readTime: 20,
    views: 4500,
    likes: 320,
    tags: ['Interview', 'Career', 'Questions'],
    featured: true,
    thumbnail: '/blog-thumbnails/interview-questions.jpg',
    status: 'published'
  }
]

// API-style functions
export const getAllBlogs = () => {
  return Promise.resolve(mockBlogs)
}

export const getBlogById = (id) => {
  return Promise.resolve(mockBlogs.find(blog => blog.id === id))
}

export const getBlogBySlug = (slug) => {
  return Promise.resolve(mockBlogs.find(blog => blog.slug === slug))
}

export const getBlogsByCategory = (categorySlug) => {
  return Promise.resolve(
    mockBlogs.filter(blog => blog.categorySlug === categorySlug)
  )
}

export const getFeaturedBlogs = () => {
  return Promise.resolve(mockBlogs.filter(blog => blog.featured))
}

export const searchBlogs = (query) => {
  const lowerQuery = query.toLowerCase()
  return Promise.resolve(
    mockBlogs.filter(
      blog =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.excerpt.toLowerCase().includes(lowerQuery) ||
        blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  )
}

export const getBlogsWithPagination = (page = 1, limit = 9) => {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedBlogs = mockBlogs.slice(startIndex, endIndex)
  
  return Promise.resolve({
    blogs: paginatedBlogs,
    total: mockBlogs.length,
    page,
    totalPages: Math.ceil(mockBlogs.length / limit)
  })
}

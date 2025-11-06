import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Blog</span> Articles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            In-depth tutorials, guides, and insights on Oracle Database administration
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-14 pr-6 py-5 bg-dark-card border border-dark-border rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

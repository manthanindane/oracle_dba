import BlogCard from '../components/BlogCard'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'
import { Search, Loader } from 'lucide-react'
import BlogAPI from '../services/api'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      try {
        const data = await BlogAPI.getAllBlogs()
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Layout showSidebar={true}>
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">All</span> Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {filteredBlogs.length} articles available
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-14 pr-6 py-4 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red/50 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader className="w-8 h-8 text-oracle-red animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} post={blog} />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 dark:text-gray-400 text-xl">No articles found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  )
}

export default Blog

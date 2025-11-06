import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Calendar, Clock, User, ArrowLeft, Tag, Heart, Share2 } from 'lucide-react'
import BlogAPI from '../services/api'

const BlogPost = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const data = await BlogAPI.getBlogBySlug(slug)
        setBlog(data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
    window.scrollTo(0, 0)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Blog not found</h2>
          <Link to="/blog" className="text-oracle-red hover:text-oracle-red-light">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Articles
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <Link 
            to={`/category/${blog.categorySlug}`}
            className="inline-block bg-oracle-red/10 text-oracle-red px-4 py-2 rounded-full text-sm font-semibold hover:bg-oracle-red/20 transition-colors"
          >
            {blog.categoryName}
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <img 
              src={blog.author.image} 
              alt={blog.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-oracle-red"
            />
            <div>
              <div className="text-white font-semibold">{blog.author.name}</div>
              <div className="text-sm text-gray-500">{blog.author.bio}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(blog.publishedDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {blog.readTime} min read
            </span>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-400 hover:text-oracle-red transition-colors">
              <Heart size={20} />
              {blog.likes}
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-oracle-red transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Tag size={20} className="text-oracle-red" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-dark-card text-gray-400 px-4 py-2 rounded-full text-sm border border-dark-border hover:border-oracle-red/50 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="card-premium">
          <h3 className="text-white font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <img 
              src={blog.author.image} 
              alt={blog.author.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-oracle-red"
            />
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{blog.author.name}</h4>
              <p className="text-gray-400">{blog.author.bio}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost

import { Calendar, Clock, ArrowRight, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <article className="card-premium interactive-card group">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-4 h-4 text-oracle-red" />
        <span className="text-xs font-semibold text-oracle-red uppercase tracking-wider">
          {post.categoryName}
        </span>
      </div>
      
      <Link to={`/blog/${post.slug}`}>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
          {post.title}
        </h3>
      </Link>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center text-sm text-gray-500 mb-6 gap-4">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} />
          {new Date(post.publishedDate).toLocaleDateString('en-US', { 
            month: 'short', day: 'numeric', year: 'numeric' 
          })}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} />
          {post.readTime} min read
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 dark:bg-dark-hover text-gray-600 dark:text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-dark-border hover:border-oracle-red/50 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center text-oracle-red font-semibold group-hover:gap-2 transition-all duration-300 hover:text-oracle-red-light"
      >
        Read Article
        <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-oracle-red/0 via-oracle-gold/0 to-transparent group-hover:from-oracle-red/10 group-hover:via-oracle-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  )
}

export default BlogCard

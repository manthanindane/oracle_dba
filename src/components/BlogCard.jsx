import { Calendar, Clock, ArrowRight, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <article className="card-premium interactive-card group">
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        <Flame className="w-4 h-4 text-oracle-red" />
        <span className="text-xs font-semibold text-oracle-red uppercase tracking-wider">
          {post.categoryName}
        </span>
      </div>
      
      {/* Title */}
      <Link to={`/blog/${post.slug}`}>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
          {post.title}
        </h3>
      </Link>
      
      {/* Excerpt */}
      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
      
      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-6 gap-4">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} className="text-gray-600" />
          {new Date(post.publishedDate).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} className="text-gray-600" />
          {post.readTime} min read
        </span>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-dark-hover text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full border border-dark-border hover:border-oracle-red/30 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Read More Link */}
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center text-oracle-red font-semibold group-hover:gap-2 transition-all duration-300 hover:text-oracle-red-light"
      >
        Read Article
        <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-oracle-red/0 via-oracle-gold/0 to-accent-orange/0 group-hover:from-oracle-red/20 group-hover:via-oracle-gold/20 group-hover:to-accent-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </article>
  )
}

export default BlogCard

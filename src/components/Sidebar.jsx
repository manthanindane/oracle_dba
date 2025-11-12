import { 
  Award, Eye, Users, TrendingUp, Clock, 
  Github, Twitter, Linkedin, Mail, ExternalLink, Flame, MapPin
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const author = {
    name: 'Rupesh Anant Ghubade',
    title: 'Oracle DBA Expert',
    image: '/author.jpg',
    bio: 'Passionate about Oracle Database technologies with 10+ years of experience.',
    location: 'Navi Mumbai, MH'
  }

  const stats = { pageviews: 712922, followers: 1250, posts: 156, rating: 4.8 }
  const award = {
    title: 'Top 60 Oracle Blogs',
    year: '2024',
    badgeUrl: 'https://feedspot.com',
    description: 'Recognized as one of the top Oracle Database blogs worldwide'
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Email', icon: Mail, url: 'mailto:your@email.com' }
  ]

  const popularPosts = [
    { id: 1, title: 'Oracle 19c Installation on Linux', slug: 'oracle-19c-installation-linux', views: 15420 },
    { id: 2, title: 'Understanding ORA-00600 Error', slug: 'understanding-ora-00600-error', views: 12350 },
    { id: 3, title: 'Oracle RAC Setup Guide', slug: 'oracle-rac-19c-setup', views: 10890 },
    { id: 4, title: 'Performance Tuning Tips', slug: 'performance-tuning-tips', views: 9750 },
    { id: 5, title: 'Oracle 23ai New Features', slug: 'oracle-23ai-new-features', views: 8920 }
  ]

  const recentPosts = [
    { id: 1, title: 'Automatic Transaction Rollback in 23ai', slug: 'automatic-transaction-rollback-23ai', date: '2024-11-10' },
    { id: 2, title: 'Database Monitoring Scripts', slug: 'database-monitoring-scripts', date: '2024-11-08' },
    { id: 3, title: 'Data Guard Configuration Guide', slug: 'data-guard-configuration', date: '2024-11-05' },
    { id: 4, title: 'SQL Tuning Advisor Usage', slug: 'sql-tuning-advisor-usage', date: '2024-11-02' }
  ]

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <aside className="space-y-6">
      {/* Author Profile Card */}
      <div className="card-premium">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <img
              src={author.image}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-oracle-red"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150/C74634/FFFFFF?text=RA'}
            />
            <div className="absolute -bottom-2 -right-2 bg-oracle-red text-white p-2 rounded-full">
              <Flame className="w-4 h-4" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{author.name}</h3>
          <p className="text-sm text-oracle-red font-semibold mb-2">{author.title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 px-2">{author.bio}</p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <MapPin size={14} />
            <span>{author.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 dark:bg-dark-hover rounded-xl p-3">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats.posts}</div>
              <div className="text-xs text-gray-500">Articles</div>
            </div>
            <div className="bg-gray-50 dark:bg-dark-hover rounded-xl p-3">
              <div className="text-2xl font-bold text-oracle-gold">{stats.rating}</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-hover flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-oracle-red hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Award Badge */}
      <div className="card-premium border-oracle-gold/20">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-oracle-gold/20 p-3 rounded-xl flex-shrink-0">
            <Award className="w-6 h-6 text-oracle-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{award.title}</h4>
            <p className="text-sm text-oracle-gold font-semibold mb-1">{award.year}</p>
            <p className="text-xs text-gray-600 dark:text-gray-500">{award.description}</p>
          </div>
        </div>
        <a
          href={award.badgeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-sm text-oracle-red hover:text-oracle-red-light transition-colors group mt-3 pt-3 border-t border-gray-200 dark:border-dark-border"
        >
          View Recognition
          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Statistics Card */}
      <div className="card-premium">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-oracle-red" />
          Blog Statistics
        </h4>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-oracle-red/10 p-3 rounded-lg flex-shrink-0">
              <Eye className="w-5 h-5 text-oracle-red" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Total Views</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(stats.pageviews)}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-oracle-gold/10 p-3 rounded-lg flex-shrink-0">
              <Users className="w-5 h-5 text-oracle-gold" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500">Followers</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(stats.followers)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="card-premium">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Flame className="w-5 h-5 text-oracle-red" />
          Popular Posts
        </h4>
        <div className="space-y-2">
          {popularPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-hover transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-oracle-red/10 flex items-center justify-center">
                <span className="text-sm font-bold text-oracle-red">{index + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-oracle-red transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h5>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Eye size={12} />
                  {formatNumber(post.views)} views
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="card-premium">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-oracle-red" />
          Recent Posts
        </h4>
        <div className="space-y-2">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-hover transition-all duration-300"
            >
              <h5 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-oracle-red transition-colors line-clamp-2 mb-2">
                {post.title}
              </h5>
              <div className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric'
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="card-premium bg-gradient-to-br from-oracle-red/10 to-oracle-gold/10 border-oracle-red/20">
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">📧 Stay Updated</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Get the latest Oracle DBA tips delivered to your inbox</p>
        <div className="space-y-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-xl text-gray-900 dark:text-white text-sm placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all"
          />
          <button className="btn-primary w-full text-sm py-2.5">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

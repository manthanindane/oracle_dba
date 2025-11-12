import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { BookOpen, TrendingUp, Users, Zap } from 'lucide-react'
import BlogAPI from '../services/api'

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await BlogAPI.getFeaturedBlogs()
        setLatestPosts(data.slice(0, 3))
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <Layout showSidebar={false}>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: BookOpen, label: 'Articles', value: '156+' },
              { icon: Users, label: 'Readers', value: '10K+' },
              { icon: Zap, label: 'Topics', value: '25+' },
              { icon: TrendingUp, label: 'Updated', value: 'Daily' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="card-glass text-center p-6 md:p-8">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 text-oracle-red" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our most recent articles on Oracle Database administration
            </p>
          </div>
          
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="card-glass text-center max-w-4xl mx-auto p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Ready to Level Up Your DBA Skills?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of database administrators learning the latest Oracle technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Start Learning
              </button>
              <button className="btn-secondary px-8 py-3">
                Browse Topics
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

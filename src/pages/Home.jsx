import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { BookOpen, TrendingUp, Users, Zap } from 'lucide-react'

const Home = () => {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div>
      <Hero />
      
      {/* Stats Section */}
      <section className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, label: 'Articles', value: '50+', color: 'primary' },
            { icon: Users, label: 'Readers', value: '10K+', color: 'purple' },
            { icon: Zap, label: 'Topics', value: '25+', color: 'cyan' },
            { icon: TrendingUp, label: 'Updated', value: 'Daily', color: 'emerald' }
          ].map((stat, index) => (
            <div key={index} className="card-glass text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 text-accent-${stat.color}`} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our most recent articles on Oracle Database administration and best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-container">
        <div className="card-glass text-center max-w-4xl mx-auto p-12 spotlight">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up Your DBA Skills?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of database administrators learning the latest Oracle technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Learning
            </button>
            <button className="btn-secondary">
              Browse Topics
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

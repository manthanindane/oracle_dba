import { Database, Award, Users, TrendingUp, Target, Lightbulb } from 'lucide-react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout showSidebar={true}>
      <div>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Oracle DBA ++</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive resource dedicated to empowering database administrators with cutting-edge knowledge, 
            advanced techniques, and expert insights on Oracle Database technologies.
          </p>
        </div>
        
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card-premium">
            <Target className="w-12 h-12 text-oracle-red mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To provide world-class educational content that helps database administrators master Oracle technologies, 
              stay current with the latest features like Oracle 23ai, and implement best practices in their organizations.
            </p>
          </div>
          
          <div className="card-premium">
            <Lightbulb className="w-12 h-12 text-oracle-gold mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              To become the premier destination for Oracle Database professionals seeking in-depth technical knowledge, 
              practical solutions, and a thriving community of like-minded database experts.
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                title: 'Expert Content',
                description: 'In-depth technical articles and tutorials written by experienced Oracle DBAs'
              },
              {
                icon: Award,
                title: 'Latest Features',
                description: 'Comprehensive coverage of Oracle 23ai and cutting-edge database innovations'
              },
              {
                icon: Users,
                title: 'Active Community',
                description: 'Connect with thousands of DBAs worldwide and share knowledge'
              },
              {
                icon: TrendingUp,
                title: 'Performance Focus',
                description: 'Proven optimization techniques and best practices for production environments'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card-glass group hover:border-oracle-red/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-oracle-red/10 p-3 rounded-xl group-hover:bg-oracle-red/20 transition-colors flex-shrink-0">
                      <Icon className="w-6 h-6 text-oracle-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-oracle-red transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* What We Cover */}
        <div className="card-premium">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Oracle 23ai New Features',
              'Performance Tuning & Optimization',
              'Database Security & Backup',
              'High Availability Solutions',
              'SQL & PL/SQL Best Practices',
              'Cloud Database Management',
              'Migration Strategies',
              'Troubleshooting Techniques',
              'RAC & Data Guard',
              'RMAN Backup & Recovery',
              'Database Monitoring',
              'Career Development'
            ].map((topic, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-hover transition-colors group">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-oracle-red to-oracle-gold group-hover:scale-125 transition-transform" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

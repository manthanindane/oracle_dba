import { Database, Award, Users, TrendingUp, Target, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="section-container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Oracle DBA ++</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive resource dedicated to empowering database administrators with cutting-edge knowledge, 
            advanced techniques, and expert insights on Oracle Database technologies.
          </p>
        </div>
        
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="card-premium">
            <Target className="w-12 h-12 text-primary-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide world-class educational content that helps database administrators master Oracle technologies, 
              stay current with the latest features like Oracle 23ai, and implement best practices in their organizations.
            </p>
          </div>
          
          <div className="card-premium">
            <Lightbulb className="w-12 h-12 text-accent-purple mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the premier destination for Oracle Database professionals seeking in-depth technical knowledge, 
              practical solutions, and a thriving community of like-minded database experts.
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Database,
              title: 'Expert Content',
              description: 'In-depth technical articles and tutorials',
              color: 'primary'
            },
            {
              icon: Award,
              title: 'Latest Features',
              description: 'Coverage of Oracle 23ai innovations',
              color: 'purple'
            },
            {
              icon: Users,
              title: 'Community',
              description: 'Knowledge sharing worldwide',
              color: 'cyan'
            },
            {
              icon: TrendingUp,
              title: 'Performance',
              description: 'Optimization best practices',
              color: 'emerald'
            }
          ].map((feature, index) => (
            <div key={index} className="card-glass text-center interactive-card">
              <div className={`bg-gradient-to-br from-accent-${feature.color}/20 to-accent-${feature.color}/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 text-accent-${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* What We Cover */}
        <div className="card-premium max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Oracle 23ai New Features',
              'Performance Tuning & Optimization',
              'Database Security & Backup',
              'High Availability Solutions',
              'SQL & PL/SQL Best Practices',
              'Cloud Database Management',
              'Migration Strategies',
              'Troubleshooting Techniques'
            ].map((topic, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-accent-purple" />
                <span className="text-gray-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

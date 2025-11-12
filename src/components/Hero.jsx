import { Database, Zap, Shield, ArrowRight, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-oracle-red/20 dark:bg-oracle-red/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-oracle-gold/15 dark:bg-oracle-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-dark-card border border-gray-200 dark:border-oracle-red/30 rounded-full px-6 py-3 my-8 animate-fade-in shadow-sm">
            <Flame className="w-5 h-5 text-oracle-red animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Powered by Oracle 23ai
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-up">
            <span className="text-gray-900 dark:text-white">Master Oracle</span>
            <br />
            <span className="gradient-text">Database Excellence</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Cutting-edge insights, advanced techniques, and expert knowledge for modern database administrators
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/blog" className="btn-primary group">
              Explore Articles
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Database, title: 'Oracle 23ai', desc: 'Latest features and innovations', color: 'oracle-red' },
              { icon: Zap, title: 'Performance', desc: 'Advanced optimization strategies', color: 'oracle-gold' },
              { icon: Shield, title: 'Best Practices', desc: 'Industry-proven techniques', color: 'oracle-red' }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="card-glass interactive-card">
                  <div className="bg-gradient-to-br from-oracle-red/20 to-oracle-red/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-oracle-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oracle-red/50 to-transparent" />
    </div>
  )
}

export default Hero

import { Database, Github, Linkedin, Mail, Twitter, Heart, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 dark:border-dark-border mt-auto">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-dark-surface/50 pointer-events-none" />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oracle-red to-transparent" />
      
      <div className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="relative">
                  <Database className="h-9 w-9 md:h-10 md:w-10 text-oracle-red" />
                  <Flame className="h-4 w-4 md:h-5 md:w-5 text-oracle-gold absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-xl md:text-2xl font-bold">
                  <span className="text-gray-900 dark:text-white">Oracle DBA</span>
                  <span className="gradient-text"> ++</span>
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6 max-w-md leading-relaxed">
                Empowering database administrators with cutting-edge insights, 
                advanced techniques, and expert knowledge for Oracle Database excellence.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 md:gap-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: '#', label: 'Email' }
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-oracle-red hover:border-oracle-red hover:scale-110 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-oracle-red rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-oracle-red transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-oracle-red group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-oracle-gold rounded-full"></span>
                Resources
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {['Documentation', 'Tutorials', 'Community', 'Support'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-oracle-red transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-oracle-red group-hover:w-4 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mb-8 md:mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-oracle-red/10 via-oracle-red/5 to-oracle-gold/10 border border-oracle-red/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Flame className="w-5 h-5 text-oracle-red" />
                  Stay Updated
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Get the latest Oracle DBA insights delivered to your inbox
                </p>
              </div>
              <div className="flex-1 w-full md:max-w-md">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 md:py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-full text-sm md:text-base text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300"
                  />
                  <button className="btn-primary text-sm md:text-base px-6 py-2.5 md:py-3 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 md:pt-8 border-t border-gray-200 dark:border-dark-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                <p className="flex items-center gap-2">
                  © {currentYear} Oracle DBA ++. All rights reserved.
                </p>
                <span className="hidden md:block">•</span>
                <div className="flex items-center gap-3 md:gap-4">
                  <a href="#" className="hover:text-oracle-red transition-colors">Privacy Policy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-oracle-red transition-colors">Terms of Service</a>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-gray-500 flex items-center gap-2">
                Crafted with <Heart size={14} className="text-oracle-red animate-pulse" fill="currentColor" /> for the DBA community
              </p>
            </div>
            
            {/* Oracle Brand Tribute */}
            <div className="mt-4 md:mt-6 text-center">
              <p className="text-xs text-gray-500">
                Oracle and Java are registered trademarks of Oracle and/or its affiliates.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-oracle-red to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer

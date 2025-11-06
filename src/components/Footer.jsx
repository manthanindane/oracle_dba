import { Database, Github, Linkedin, Mail, Twitter, Heart, Flame, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-border overflow-hidden">
      {/* Oracle Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-surface/50 to-oracle-bark/30" />
      
      {/* Oracle Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-oracle-red to-transparent" />
      
      <div className="relative section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Database className="h-10 w-10 text-oracle-red group-hover:text-oracle-red-light transition-colors" />
                <Flame className="h-5 w-5 text-oracle-gold absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-white">Oracle DBA</span>
                <span className="gradient-text"> ++</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering database administrators with cutting-edge insights, 
              advanced techniques, and expert knowledge for Oracle Database excellence.
            </p>
            
            {/* Social Links with Oracle Red theme */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-oracle-red hover:bg-oracle-red/10 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-oracle-red rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-oracle-red transition-colors duration-200 flex items-center gap-2 group"
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
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-oracle-gold rounded-full"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Documentation', external: true },
                { name: 'Tutorials', external: false },
                { name: 'Community', external: true },
                { name: 'Support', external: false }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-oracle-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-oracle-gold group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                    {link.external && (
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-oracle-red/10 via-oracle-bark/10 to-oracle-gold/10 border border-oracle-red/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Flame className="w-5 h-5 text-oracle-red" />
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest Oracle DBA insights and tutorials delivered to your inbox
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-md">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-dark-card border border-dark-border rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
              <p className="flex items-center gap-2">
                © {currentYear} Oracle DBA ++. All rights reserved.
              </p>
              <span className="hidden md:block text-gray-700">•</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-oracle-red transition-colors">Privacy Policy</a>
                <span className="text-gray-700">•</span>
                <a href="#" className="hover:text-oracle-red transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Crafted with <Heart size={14} className="text-oracle-red animate-pulse" fill="currentColor" /> for the DBA community
            </p>
          </div>
          
          {/* Oracle Brand Tribute */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              Oracle and Java are registered trademarks of Oracle and/or its affiliates.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Oracle Red gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-oracle-red to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer

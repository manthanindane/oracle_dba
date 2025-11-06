import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Database, Flame, Layers, Activity, AlertCircle, Sparkles, MessageSquare } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { cn } from '../lib/utils'
import { categories } from '../data/categories'

const iconMap = {
  Database,
  Layers,
  Activity,
  AlertCircle,
  Sparkles,
  MessageSquare
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-dark-bg/95 backdrop-blur-2xl border-b border-dark-border shadow-2xl" 
          : "bg-dark-bg/50 backdrop-blur-xl"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group z-50">
            <div className="relative">
              <Database className="h-9 w-9 text-oracle-red group-hover:text-oracle-red-light transition-colors duration-300" />
              <Flame className="h-4 w-4 text-oracle-gold absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-oracle-red group-hover:to-oracle-gold transition-all duration-300">
                Oracle DBA
              </span>
              <span className="gradient-text"> ++</span>
            </span>
          </Link>

          {/* Desktop Navigation - Shadcn Style */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Categories with Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-400 hover:text-white">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {categories.map((category) => {
                        const Icon = iconMap[category.icon] || Database
                        return (
                          <li key={category.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={`/category/${category.slug}`}
                                className={cn(
                                  "block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors",
                                  "hover:bg-dark-hover hover:text-white focus:bg-dark-hover focus:text-white",
                                  "group"
                                )}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="bg-oracle-red/10 p-2 rounded-lg group-hover:bg-oracle-red/20 transition-colors">
                                    <Icon className="h-5 w-5 text-oracle-red" />
                                  </div>
                                  <div className="text-sm font-semibold leading-none text-white group-hover:text-oracle-red transition-colors">
                                    {category.name}
                                  </div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* All Articles */}
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle, "text-gray-400 hover:text-white")}>
                      All Articles
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle, 
                      "text-gray-400 hover:text-white",
                      isActive('/about') && "bg-dark-card text-white"
                    )}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle, 
                      "text-gray-400 hover:text-white",
                      isActive('/contact') && "bg-dark-card text-white"
                    )}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Link to="/blog" className="btn-primary ml-6 text-sm px-6 py-2.5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-dark-card"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="space-y-2">
              {/* Categories Section */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-3 px-4">Categories</div>
                {categories.map((category) => {
                  const Icon = iconMap[category.icon] || Database
                  return (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-hover rounded-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="bg-oracle-red/10 p-2 rounded-lg">
                        <Icon size={18} className="text-oracle-red" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{category.name}</div>
                        <div className="text-xs text-gray-600">{category.description}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-dark-border my-4"></div>

              {/* Other Links */}
              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-hover rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                All Articles
              </Link>

              <Link
                to="/about"
                className={cn(
                  "block px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-hover rounded-xl transition-all duration-300",
                  isActive('/about') && "bg-dark-card text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={cn(
                  "block px-4 py-3 text-gray-400 hover:text-white hover:bg-dark-hover rounded-xl transition-all duration-300",
                  isActive('/contact') && "bg-dark-card text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Link 
                to="/blog" 
                className="btn-primary w-full mt-4" 
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

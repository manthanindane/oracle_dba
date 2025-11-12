import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Database, Flame } from 'lucide-react'
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
import ThemeToggle from './ThemeToggle'

const iconMap = {
  Database,
  Layers: Database,
  Activity: Database,
  AlertCircle: Database,
  Sparkles: Database,
  MessageSquare: Database,
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
          ? "bg-white/95 dark:bg-dark-bg/95 backdrop-blur-2xl border-b border-gray-200 dark:border-dark-border shadow-lg" 
          : "bg-white/80 dark:bg-dark-bg/50 backdrop-blur-xl"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - NO GRADIENT, Just Orange */}
          <Link to="/" className="flex items-center space-x-3 group z-50">
            <div className="relative">
              <Database className="h-9 w-9 text-[#FA3C16] transition-opacity duration-300 group-hover:opacity-80" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gray-900 dark:text-white">Oracle DBA</span>
              <span className="text-[#FA3C16]"> ++</span>
            </span>
          </Link>

          {/* Rest of navbar stays the same... */}
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Categories Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
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
                                  "hover:bg-gray-50 dark:hover:bg-dark-hover",
                                  "group"
                                )}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="bg-[#FA3C16]/10 p-2 rounded-lg group-hover:bg-[#FA3C16]/20 transition-colors">
                                    <Icon className="h-5 w-5 text-[#FA3C16]" />
                                  </div>
                                  <div className="text-sm font-semibold leading-none text-gray-900 dark:text-white group-hover:text-[#FA3C16] transition-colors">
                                    {category.name}
                                  </div>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-500">
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

                {/* Other Menu Items */}
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle, "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white")}>
                      All Articles
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle, 
                      "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                      isActive('/about') && "bg-gray-100 dark:bg-dark-card text-gray-900 dark:text-white"
                    )}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle, 
                      "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                      isActive('/contact') && "bg-gray-100 dark:bg-dark-card text-gray-900 dark:text-white"
                    )}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link to="/blog" className="btn-primary text-sm px-6 py-2.5">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-xl hover:bg-gray-100 dark:hover:bg-dark-card"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="space-y-2">
              {/* Categories */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-500 mb-3 px-4">Categories</div>
                {categories.map((category) => {
                  const Icon = iconMap[category.icon] || Database
                  return (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-hover rounded-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="bg-[#FA3C16]/10 p-2 rounded-lg">
                        <Icon size={18} className="text-[#FA3C16]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.description}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Other Links */}
              <div className="border-t border-gray-200 dark:border-dark-border my-4"></div>

              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-hover rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                All Articles
              </Link>

              <Link
                to="/about"
                className={cn(
                  "block px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-hover rounded-xl transition-all duration-300",
                  isActive('/about') && "bg-gray-100 dark:bg-dark-card text-gray-900 dark:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={cn(
                  "block px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-hover rounded-xl transition-all duration-300",
                  isActive('/contact') && "bg-gray-100 dark:bg-dark-card text-gray-900 dark:text-white"
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

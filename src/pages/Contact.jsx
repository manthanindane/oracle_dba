import { Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout showSidebar={true}>
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'hello@oracledba.dev',
              link: 'mailto:hello@oracledba.dev'
            },
            {
              icon: MapPin,
              title: 'Location',
              content: 'Navi Mumbai, MH',
              link: null
            },
            {
              icon: Clock,
              title: 'Response Time',
              content: 'Within 24 hours',
              link: null
            }
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="card-glass">
                <div className="bg-oracle-red/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-oracle-red" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-gray-600 dark:text-gray-400 hover:text-oracle-red transition-colors">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="card-premium">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-oracle-red" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-white dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-oracle-red transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full group"
            >
              <Send size={20} className="inline-block mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

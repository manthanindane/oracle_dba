import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

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
    <div className="min-h-screen pt-32">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'hello@oracledba.dev',
                color: 'primary'
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                color: 'purple'
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Navi Mumbai, MH',
                color: 'cyan'
              }
            ].map((item, index) => (
              <div key={index} className="card-glass">
                <div className={`bg-gradient-to-br from-accent-${item.color}/20 to-accent-${item.color}/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon className={`w-6 h-6 text-accent-${item.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-premium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-all duration-300 resize-none"
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
        </div>
      </div>
    </div>
  )
}

export default Contact

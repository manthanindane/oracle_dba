import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {showSidebar ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Main Content - 8 columns */}
              <div className="lg:col-span-8">
                {children}
              </div>
              
              {/* Sidebar - 4 columns */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

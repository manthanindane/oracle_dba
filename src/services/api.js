// API Service Layer - Ready for backend integration
// Vite uses import.meta.env instead of process.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

import { 
  getAllBlogs, 
  getBlogBySlug, 
  getBlogsByCategory,
  getFeaturedBlogs,
  searchBlogs,
  getBlogsWithPagination
} from '../data/mockblogs'

class BlogAPI {
  async getAllBlogs() {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs`)
    // return await response.json()
    return await getAllBlogs()
  }

  async getBlogBySlug(slug) {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs/${slug}`)
    // return await response.json()
    return await getBlogBySlug(slug)
  }

  async getBlogsByCategory(categorySlug) {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs/category/${categorySlug}`)
    // return await response.json()
    return await getBlogsByCategory(categorySlug)
  }

  async getFeaturedBlogs() {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs/featured`)
    // return await response.json()
    return await getFeaturedBlogs()
  }

  async searchBlogs(query) {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs/search?q=${encodeURIComponent(query)}`)
    // return await response.json()
    return await searchBlogs(query)
  }

  async getBlogsWithPagination(page = 1, limit = 9) {
    // Future backend integration:
    // const response = await fetch(`${API_BASE_URL}/blogs?page=${page}&limit=${limit}`)
    // return await response.json()
    return await getBlogsWithPagination(page, limit)
  }
}

export default new BlogAPI()

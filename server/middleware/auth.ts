// server/middleware/auth.ts
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  // Skip authentication for certain public routes
  const publicRoutes = [
    '/api/contact',
    '/api/services',
    '/api/clients',
    '/api/partners',
    '/api/i18n'
  ]

  if (publicRoutes.some(route => event.node.req.url?.startsWith(route))) {
    return // Allow public routes without authentication
  }

  // For admin routes, check for authentication
  if (event.node.req.url?.startsWith('/api/admin')) {
    // Check for authorization header
    const authHeader = getHeader(event, 'Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authorization header missing or invalid'
      })
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix
    
    // In a real implementation, you would validate the token against a database or JWT
    // For now, we'll use a simple environment variable check
    const validToken = process.env.ADMIN_API_TOKEN
    
    if (!validToken || token !== validToken) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid authentication token'
      })
    }

    // Add user info to the event context if needed
    event.context.auth = {
      userId: 'admin', // In a real implementation, this would come from the token
      role: 'admin'
    }
  }
})
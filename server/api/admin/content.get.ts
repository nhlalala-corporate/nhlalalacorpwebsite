// server/api/admin/content.get.ts
export default defineEventHandler((event) => {
  // Check if user is authenticated (this will be handled by auth middleware)
  if (!event.context.auth || event.context.auth.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied'
    })
  }

  // Return content management data
  return {
    pages: [
      { id: 'home', title: 'Home Page', lastModified: '2025-01-20T10:30:00Z', status: 'published' },
      { id: 'about', title: 'About Page', lastModified: '2025-01-19T15:45:00Z', status: 'published' },
      { id: 'services', title: 'Services Page', lastModified: '2025-01-18T09:15:00Z', status: 'published' },
      { id: 'contact', title: 'Contact Page', lastModified: '2025-01-17T14:20:00Z', status: 'published' }
    ],
    settings: {
      siteTitle: 'Nhlalala Corporate',
      siteDescription: 'Premier technology services provider operating in Africa',
      contactEmail: process.env.CONTACT_EMAIL || 'info@nhlalalacorp.co.za',
      phone: '+27 72 622 3537',
      address: '4 Uniden, 192 Garden Drive, Meyerspark, Pretoria'
    }
  }
})
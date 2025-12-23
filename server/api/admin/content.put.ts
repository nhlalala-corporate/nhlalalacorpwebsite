// server/api/admin/content.put.ts
import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  // Check if user is authenticated (this will be handled by auth middleware)
  if (!event.context.auth || event.context.auth.role !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied'
    })
  }

  const body = await readBody(event)

  // Validate required fields
  if (!body.pageId || typeof body.pageId !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Page ID is required and must be a string'
    })
  }

  if (!body.content || typeof body.content !== 'object') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Content is required and must be an object'
    })
  }

  // In a real implementation, you would save this to a database or content management system
  // For now, we'll just return a success message
  console.log(`Admin updated content for page: ${body.pageId}`, body.content)

  return {
    success: true,
    message: `Content for page ${body.pageId} updated successfully`,
    updated: new Date().toISOString()
  }
})
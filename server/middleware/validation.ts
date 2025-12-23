// server/middleware/validation.ts
import type { H3Event } from 'h3'

// Validation functions based on data-model.md
export const validateContactData = (data: any) => {
  const errors: string[] = []

  // Validate required fields
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required and must be a non-empty string')
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required and must be a string')
  } else {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push('Email format is invalid')
    }
  }

  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required and must be a string')
  } else {
    // Validate message length (10-1000 characters as per contracts)
    if (data.message.length < 10 || data.message.length > 1000) {
      errors.push('Message must be between 10 and 1000 characters')
    }
  }

  // Validate optional phone if provided
  if (data.phone && typeof data.phone !== 'string') {
    errors.push('Phone must be a string if provided')
  }

  // Validate serviceInterest if provided
  if (data.serviceInterest && typeof data.serviceInterest !== 'string') {
    errors.push('Service interest must be a string if provided')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export const validateClientData = (data: any) => {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Client name is required and must be a non-empty string')
  }

  if (!data.industry || typeof data.industry !== 'string' || data.industry.trim().length === 0) {
    errors.push('Industry is required and must be a non-empty string')
  }

  // Validate optional fields
  if (data.logo && typeof data.logo !== 'string') {
    errors.push('Logo must be a string if provided')
  }

  if (data.testimonial && typeof data.testimonial !== 'string') {
    errors.push('Testimonial must be a string if provided')
  }

  if (data.caseStudy && typeof data.caseStudy !== 'string') {
    errors.push('Case study must be a string if provided')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export const validateServiceData = (data: any) => {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Service name is required and must be a non-empty string')
  }

  if (!data.description || typeof data.description !== 'string' || data.description.trim().length < 50) {
    errors.push('Service description is required and must be at least 50 characters')
  } else if (data.description.length > 500) {
    errors.push('Service description must not exceed 500 characters')
  }

  if (!data.category || typeof data.category !== 'string' || data.category.trim().length === 0) {
    errors.push('Service category is required and must be a non-empty string')
  }

  // Validate features if provided
  if (data.features && !Array.isArray(data.features)) {
    errors.push('Features must be an array if provided')
  } else if (data.features && Array.isArray(data.features)) {
    for (let i = 0; i < data.features.length; i++) {
      if (typeof data.features[i] !== 'string') {
        errors.push(`Feature at index ${i} must be a string`)
      }
    }
  }

  // Validate optional icon if provided
  if (data.icon && typeof data.icon !== 'string') {
    errors.push('Icon must be a string if provided')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Generic validation middleware
export default defineEventHandler(async (event: H3Event) => {
  // Get the request method and URL
  const method = event.node.req.method
  const url = event.node.req.url

  // Only validate on POST/PUT/PATCH requests
  if (!['POST', 'PUT', 'PATCH'].includes(method || '')) {
    return
  }

  // Check if we need to validate based on the endpoint
  if (url?.includes('/api/contact')) {
    const body = await readBody(event)
    const validation = validateContactData(body)

    if (!validation.isValid) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: {
          errors: validation.errors
        }
      })
    }
  } else if (url?.includes('/api/clients')) {
    const body = await readBody(event)
    const validation = validateClientData(body)

    if (!validation.isValid) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: {
          errors: validation.errors
        }
      })
    }
  } else if (url?.includes('/api/services')) {
    const body = await readBody(event)
    const validation = validateServiceData(body)

    if (!validation.isValid) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation failed',
        data: {
          errors: validation.errors
        }
      })
    }
  }
})
// app/middleware/error.ts
export default defineNuxtRouteMiddleware((to, from) => {
  // This middleware runs before each route change
  // You can add error handling logic here if needed
  
  // For example, you could log route changes for debugging
  console.log(`Navigating from ${from.path} to ${to.path}`)
  
  // Or you could implement custom error handling logic
  try {
    // Any pre-route logic can go here
  } catch (error) {
    console.error('Error in route middleware:', error)
    // You could redirect to an error page
    // return navigateTo('/error')
  }
})
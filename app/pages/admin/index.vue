<template>
  <div class="min-h-screen bg-gray-50 dark:bg-dark-900">
    <!-- Admin Header -->
    <header class="bg-white dark:bg-dark-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-white">Admin Dashboard</h1>
          </div>
          <div class="flex items-center">
            <button 
              @click="logout"
              class="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Admin Content -->
    <main class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-dark-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Content Management</h2>
          
          <!-- Site Settings -->
          <div class="mb-12">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Site Settings</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Site Title</label>
                <input 
                  v-model="settings.siteTitle"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:text-white"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact Email</label>
                <input 
                  v-model="settings.contactEmail"
                  type="email"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:text-white"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input 
                  v-model="settings.phone"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:text-white"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                <input 
                  v-model="settings.address"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-dark-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-dark-700 dark:text-white"
                >
              </div>
            </div>
            <div class="mt-4">
              <button 
                @click="updateSettings"
                class="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Update Settings
              </button>
            </div>
          </div>

          <!-- Pages Management -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Pages</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
                <thead class="bg-gray-50 dark:bg-dark-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Page</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Last Modified</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
                  <tr v-for="page in pages" :key="page.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900 dark:text-white">{{ page.title }}</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">{{ page.id }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 dark:text-white">{{ formatDate(page.lastModified) }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {{ page.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button 
                        @click="editPage(page.id)"
                        class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4"
                      >
                        Edit
                      </button>
                      <button 
                        @click="publishPage(page.id)"
                        class="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                      >
                        {{ page.status === 'published' ? 'Unpublish' : 'Publish' }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

useHead({
  title: 'Admin Dashboard - Nhlalala Corporate',
})

const pages = ref([])
const settings = ref({
  siteTitle: '',
  contactEmail: '',
  phone: '',
  address: ''
})

onMounted(async () => {
  try {
    const data = await $fetch('/api/admin/content', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
      }
    })
    
    pages.value = data.pages
    settings.value = data.settings
  } catch (error) {
    console.error('Error loading admin data:', error)
    // In a real app, you might redirect to login page
  }
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const updateSettings = async () => {
  try {
    await $fetch('/api/admin/content', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        'Content-Type': 'application/json'
      },
      body: {
        pageId: 'settings',
        content: settings.value
      }
    })
    
    alert('Settings updated successfully!')
  } catch (error) {
    console.error('Error updating settings:', error)
    alert('Error updating settings')
  }
}

const editPage = (pageId) => {
  // In a real implementation, this would navigate to a page editor
  alert(`Editing page: ${pageId}`)
}

const publishPage = async (pageId) => {
  try {
    // Find the page in our array
    const page = pages.value.find(p => p.id === pageId)
    if (!page) return
    
    // Toggle the status
    const newStatus = page.status === 'published' ? 'draft' : 'published'
    
    // Update the page status
    page.status = newStatus
    
    // Send update to server
    await $fetch('/api/admin/content', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        'Content-Type': 'application/json'
      },
      body: {
        pageId: pageId,
        content: { status: newStatus }
      }
    })
    
    alert(`Page ${pageId} ${newStatus} successfully!`)
  } catch (error) {
    console.error(`Error updating page status for ${pageId}:`, error)
    alert(`Error updating page status for ${pageId}`)
  }
}

const logout = () => {
  localStorage.removeItem('adminToken')
  // In a real app, you might redirect to login page
  navigateTo('/admin/login')
}
</script>
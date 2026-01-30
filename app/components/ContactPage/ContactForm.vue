<template>
  <div class="bg-gray-50 dark:bg-dark-900 p-8 rounded-2xl shadow-sm">
    <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h3>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Full Name *</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
            :aria-invalid="!!errors.name"
            aria-describedby="name-error"
            required
          >
          <p v-if="errors.name" id="name-error" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <div>
          <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email *</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
            :aria-invalid="!!errors.email"
            aria-describedby="email-error"
            required
          >
          <p v-if="errors.email" id="email-error" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>
      </div>

      <div>
        <label for="phone" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Phone</label>
        <input
          type="tel"
          id="phone"
          v-model="formData.phone"
          class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
          aria-describedby="phone-help"
        >
        <p id="phone-help" class="text-sm text-gray-500 dark:text-gray-400 mt-1">Optional: Please include country code</p>
      </div>

      <div>
        <label for="subject" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject *</label>
        <select
          id="subject"
          v-model="formData.subject"
          class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
          :aria-invalid="!!errors.subject"
          aria-describedby="subject-error"
          required
        >
          <option value="" disabled selected>Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="consulting">Digital Consulting</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="software">Software Development</option>
          <option value="website">Website Development</option>
          <option value="data">Data Management</option>
          <option value="infrastructure">Infrastructure Solutions</option>
          <option value="other">Other</option>
        </select>
        <p v-if="errors.subject" id="subject-error" class="text-red-500 text-sm mt-1">{{ errors.subject }}</p>
      </div>

      <div>
        <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message *</label>
        <textarea
          id="message"
          rows="5"
          v-model="formData.message"
          class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
          :aria-invalid="!!errors.message"
          aria-describedby="message-error"
          required
        ></textarea>
        <p v-if="errors.message" id="message-error" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
      </div>

      <div>
        <label for="attachment" class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Attachment (Optional)</label>
        <input
          type="file"
          id="attachment"
          @change="handleFileUpload"
          class="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-800 dark:text-white"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          aria-describedby="attachment-help"
        >
        <p id="attachment-help" class="text-sm text-gray-500 dark:text-gray-400 mt-1">Max file size: 10MB. Accepted formats: PDF, DOC, DOCX, JPG, PNG</p>
        <p v-if="errors.file" class="text-red-500 text-sm mt-1">{{ errors.file }}</p>
      </div>

      <button
        type="submit"
        class="w-full gradient-bg text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
        :disabled="isSubmitting"
        :aria-busy="isSubmitting"
      >
        <span v-if="!isSubmitting">Send Message</span>
        <span v-else class="flex items-center">
          <i class="fas fa-circle-notch fa-spin mr-2"></i>
          Sending...
        </span>
      </button>

      <div v-if="submitMessage" class="p-4 rounded-lg" :class="submitMessageClass" role="alert">
        {{ submitMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  emailTo: {
    type: String,
    default: process.env.DEFAULT_EMAIL_TO || 'info@nhlalala-co.za'
  }
})

const emit = defineEmits(['formSubmit', 'formSubmitSuccess', 'formSubmitError'])

// Separate file storage to avoid reactivity issues with File objects
const fileData = ref(null);

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  // Note: file is handled separately to avoid potential reactivity issues with File objects
})

const errors = ref({})
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitMessageClass = ref('')

const validateForm = () => {
  errors.value = {}

  if (!formData.value.name) errors.value.name = 'Name is required'
  if (!formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(formData.value.email)) {
    errors.value.email = 'Email is invalid'
  }
  if (!formData.value.subject) errors.value.subject = 'Subject is required'
  if (!formData.value.message) errors.value.message = 'Message is required'

  // File validation
  if (fileData.value) {
    const file = fileData.value
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type)) {
      errors.value.file = 'File type not supported'
    }

    if (file.size > maxSize) {
      errors.value.file = 'File size must be less than 10MB'
    }
  }

  return Object.keys(errors.value).length === 0
}

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  fileData.value = file;
}

const handleSubmit = async () => {
  if (!validateForm()) return

  emit('formSubmit', { ...formData.value, file: fileData.value })

  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Execute reCAPTCHA
    const config = useRuntimeConfig()
    const recaptchaSiteKey = config.public.recaptchaSiteKey
    if (!recaptchaSiteKey) {
      throw new Error('reCAPTCHA site key is not configured in runtime config')
    }
    const token = await executeRecaptcha('contact_form')

    // Prepare form data with reCAPTCHA token
    const formDataWithRecaptcha = {
      ...formData.value,
      'g-recaptcha-response': token,
      emailTo: props.emailTo
    }

    // Send form data to backend API
    let response;

    // Check if there's a file to upload
    const hasFile = !!fileData.value;

    if (hasFile) {
      // Create FormData object for file upload
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      for (const [key, value] of Object.entries(formDataWithRecaptcha)) {
        if (key !== 'file' && value !== null && value !== undefined) {
          formDataToSend.append(key, value);
        }
      }

      // Append the file if it exists
      if (fileData.value) {
        formDataToSend.append('file', fileData.value, fileData.value.name);
      }

      // Send form data as multipart/form-data
      response = await $fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - let browser set it with boundary
      });
    } else {
      // Send form data as JSON for regular submission
      response = await $fetch('/api/contact', {
        method: 'POST',
        body: formDataWithRecaptcha
      });
    }

    // Show success message
    submitMessage.value = 'Your message has been sent successfully! We will get back to you soon.'
    submitMessageClass.value = 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'

    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }

    // Reset file data
    fileData.value = null;

    // Reset file input
    const fileInput = document.getElementById('attachment')
    if (fileInput) fileInput.value = ''

    emit('formSubmitSuccess', response)
  } catch (error) {
    console.error('Error submitting form:', error)
    submitMessage.value = 'There was an error sending your message. Please try again later.'
    submitMessageClass.value = 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'

    emit('formSubmitError', error)
  } finally {
    isSubmitting.value = false
  }
}

// Function to execute reCAPTCHA
const executeRecaptcha = (action) => {
  return new Promise((resolve, reject) => {
    const config = useRuntimeConfig()
    const recaptchaSiteKey = config.public.recaptchaSiteKey
    if (!recaptchaSiteKey) {
      console.error('reCAPTCHA site key is not configured in runtime config');
      // For development or if reCAPTCHA key is not configured, return a dummy token
      resolve('dummy-token-for-development');
      return;
    }

    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.ready(() => {
        grecaptcha.execute(recaptchaSiteKey, { action })
          .then(resolve)
          .catch(error => {
            console.error('reCAPTCHA execution error:', error);
            // If reCAPTCHA fails due to invalid key, return a dummy token for development
            resolve('dummy-token-for-development');
          })
      })
    } else {
      console.error('reCAPTCHA is not loaded');
      // For development or if reCAPTCHA library fails to load, return a dummy token
      resolve('dummy-token-for-development');
    }
  })
}
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #2f93ff 0%, #0f70f5 100%);
}
</style>

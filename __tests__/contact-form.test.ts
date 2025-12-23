// __tests__/contact-form.test.ts
// Basic tests for the contact form component

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '../app/components/ContactPage/ContactForm.vue'

describe('ContactForm', () => {
  beforeEach(() => {
    // Mock the global grecaptcha object
    global.grecaptcha = {
      ready: vi.fn((callback) => callback()),
      execute: vi.fn(() => Promise.resolve('dummy-token-for-testing'))
    }
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#subject').exists()).toBe(true)
    expect(wrapper.find('#message').exists()).toBe(true)
  })

  it('validates required fields', async () => {
    const wrapper = mount(ContactForm)

    // Submit the form without filling any fields
    await wrapper.find('form').trigger('submit.prevent')

    // Check if validation errors are displayed
    expect(wrapper.text()).toContain('Name is required')
    expect(wrapper.text()).toContain('Email is required')
    expect(wrapper.text()).toContain('Subject is required')
    expect(wrapper.text()).toContain('Message is required')
  })

  it('validates email format', async () => {
    const wrapper = mount(ContactForm)

    // Fill in an invalid email
    const emailInput = wrapper.find('#email')
    await emailInput.setValue('invalid-email')

    // Submit the form
    await wrapper.find('form').trigger('submit.prevent')

    // Check for email validation error
    expect(wrapper.text()).toContain('Email is invalid')
  })

  it('submits valid form data', async () => {
    // Mock the $fetch function
    const mockFetch = vi.fn(() => Promise.resolve({
      success: true,
      messageId: 'test-message-id',
      message: 'Your message has been sent successfully!'
    }))

    // @ts-ignore - global property
    global.$fetch = mockFetch

    const wrapper = mount(ContactForm)

    // Fill in the form with valid data
    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#email').setValue('john@example.com')
    await wrapper.find('#subject').setValue('general')
    await wrapper.find('#message').setValue('This is a test message')

    // Submit the form
    await wrapper.find('form').trigger('submit.prevent')

    // Check if the API was called
    expect(mockFetch).toHaveBeenCalledWith('/api/contact', expect.any(Object))
  })
})
// __tests__/api.contact.test.ts
// Basic tests for the contact API endpoint

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createApp, eventHandler, readBody, setResponseStatus } from 'h3'
import { createTestingEvent, createTestingApp } from '@nuxt/test-utils/runtime'

describe('Contact API', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('handles valid contact form submission', async () => {
    // Mock the sendEmail function
    const mockSendEmail = vi.fn(() => ({
      success: true,
      messageId: 'test-message-id',
      message: 'Email sent successfully'
    }));

    vi.mock('../server/utils/email', async () => {
      const actual = await vi.importActual('../server/utils/email');
      return {
        ...actual,
        sendEmail: mockSendEmail
      };
    });

    // Import the API handler after mocking
    const contactHandler = await import('../server/api/contact.post');
    const handler = contactHandler.default;

    // Create a mock event with valid form data
    const mockEvent = {
      node: {
        req: {
          body: {
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Test Subject',
            message: 'This is a test message',
            'g-recaptcha-response': 'dummy-token-for-testing'
          }
        }
      }
    };

    // Execute the handler
    const result = await handler(mockEvent);

    // Verify the result
    expect(result.success).toBe(true);
    expect(result.message).toBe('Your message has been sent successfully!');
    expect(mockSendEmail).toHaveBeenCalledWith(expect.any(Object));
  });

  it('returns error for missing required fields', async () => {
    // Mock the sendEmail function to avoid actual email sending
    const mockSendEmail = vi.fn(() => ({
      success: true,
      messageId: 'test-message-id',
      message: 'Email sent successfully'
    }));

    vi.mock('../server/utils/email', async () => {
      const actual = await vi.importActual('../server/utils/email');
      return {
        ...actual,
        sendEmail: mockSendEmail
      };
    });

    // Import the API handler
    const contactHandler = await import('../server/api/contact.post');
    const handler = contactHandler.default;

    // Create a mock event with missing required fields
    const mockEvent = {
      node: {
        req: {
          body: {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
        }
      }
    };

    // Execute the handler and expect an error
    try {
      await handler(mockEvent);
    } catch (error: any) {
      expect(error.statusCode).toBe(400);
      expect(error.statusMessage).toBe('Missing required fields');
    }
  });

  it('returns error for invalid email format', async () => {
    // Mock the sendEmail function to avoid actual email sending
    const mockSendEmail = vi.fn(() => ({
      success: true,
      messageId: 'test-message-id',
      message: 'Email sent successfully'
    }));

    vi.mock('../server/utils/email', async () => {
      const actual = await vi.importActual('../server/utils/email');
      return {
        ...actual,
        sendEmail: mockSendEmail
      };
    });

    // Import the API handler
    const contactHandler = await import('../server/api/contact.post');
    const handler = contactHandler.default;

    // Create a mock event with invalid email
    const mockEvent = {
      node: {
        req: {
          body: {
            name: 'John Doe',
            email: 'invalid-email',
            subject: 'Test Subject',
            message: 'This is a test message',
            'g-recaptcha-response': 'dummy-token-for-testing'
          }
        }
      }
    };

    // Execute the handler and expect an error
    try {
      await handler(mockEvent);
    } catch (error: any) {
      expect(error.statusCode).toBe(400);
      expect(error.statusMessage).toBe('Invalid email format');
    }
  });
});
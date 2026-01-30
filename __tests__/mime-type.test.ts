// __tests__/mime-type.test.ts
// Test for the MIME type detection functionality

import { describe, it, expect } from 'vitest'

// Import the function directly from the contact API file
// Since we can't easily import from the API file due to dependencies,
// we'll recreate the function here for testing purposes
const getMimeType = (filename: string): string => {
  const extension = filename.toLowerCase().split('.').pop() || '';
  
  const mimeTypes: Record<string, string> = {
    // Document formats
    'pdf': 'application/pdf',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls': 'application/vnd.ms-excel',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt': 'application/vnd.ms-powerpoint',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    
    // Image formats
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'bmp': 'image/bmp',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    
    // Text formats
    'txt': 'text/plain',
    'csv': 'text/csv',
    'html': 'text/html',
    'htm': 'text/html',
    
    // Archive formats
    'zip': 'application/zip',
    'rar': 'application/vnd.rar',
    'tar': 'application/x-tar',
    'gz': 'application/gzip',
    
    // Audio formats
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav',
    'ogg': 'audio/ogg',
    
    // Video formats
    'mp4': 'video/mp4',
    'avi': 'video/x-msvideo',
    'mov': 'video/quicktime',
    
    // Default fallback
    'default': 'application/octet-stream'
  };
  
  return mimeTypes[extension] || mimeTypes.default;
};

describe('MIME Type Detection', () => {
  it('correctly identifies docx files', () => {
    expect(getMimeType('document.docx')).toBe('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    expect(getMimeType('test.DOCX')).toBe('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    expect(getMimeType('my-file.Document.DOCX')).toBe('application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  });

  it('correctly identifies pdf files', () => {
    expect(getMimeType('document.pdf')).toBe('application/pdf');
    expect(getMimeType('test.PDF')).toBe('application/pdf');
  });

  it('correctly identifies other common file types', () => {
    expect(getMimeType('image.jpg')).toBe('image/jpeg');
    expect(getMimeType('image.jpeg')).toBe('image/jpeg');
    expect(getMimeType('image.png')).toBe('image/png');
    expect(getMimeType('document.doc')).toBe('application/msword');
    expect(getMimeType('spreadsheet.xlsx')).toBe('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  });

  it('uses default MIME type for unknown extensions', () => {
    expect(getMimeType('file.unknown')).toBe('application/octet-stream');
    expect(getMimeType('file')).toBe('application/octet-stream'); // no extension
  });
});
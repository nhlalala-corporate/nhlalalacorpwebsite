// app/utils/image.ts
export const optimizeImage = (src: string, width?: number, height?: number): string => {
  // This is a placeholder for image optimization
  // In a real implementation, this would use the Nuxt Image module or similar
  if (process.client) {
    // Client-side optimization could happen here
    return src;
  }
  // Server-side optimization would happen here
  return src;
};

export const convertToWebP = (src: string): string => {
  // Convert image path to WebP format
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};
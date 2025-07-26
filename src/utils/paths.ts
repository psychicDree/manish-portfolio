// Check if we're building for production (GitHub Pages)
const isProduction = process.env.NODE_ENV === 'production';

// Utility function to get the correct asset path based on environment
export function getAssetPath(path: string): string {
  // For static assets (images, PDFs), we need to add the basePath in production
  if (isProduction) {
    return `/manish-portfolio${path}`;
  }
  return path;
} 
// Utility function to get the correct asset path based on environment
export function getAssetPath(path: string): string {
  // In development, use the path as-is
  // In production (GitHub Pages), prefix with /manish-portfolio
  if (process.env.NODE_ENV === 'production') {
    return `/manish-portfolio${path}`;
  }
  return path;
} 
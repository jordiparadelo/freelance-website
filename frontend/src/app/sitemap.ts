import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com' // Replace with your actual domain

  // Define your static routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/contact',
    // Add all your static routes here
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
} 
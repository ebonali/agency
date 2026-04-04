import { MetadataRoute } from 'next'

/**
 * Ridoway Agency - Sitemap Generator
 * Lists all functional, privacy-first tools.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ridoway.agency'

  // Standard routes
  const mainRoutes = [
    '',
    '/tools',
  ]

  // Actual tool pages discovered in the filesystem
  const toolRoutes = [
    '/tools/bkash-charge-calculator-bd',
    '/tools/nagad-charge-calculator',
    '/tools/hsc-gpa-calculator-bd',
    '/tools/ssc-gpa-calculator-bd',
    '/tools/loan-calculator-bd',
    '/tools/bangladesh-income-tax-calculator',
    '/tools/land-area-converter-bd',
    '/tools/number-to-word-converter-bd',
    '/tools/age-calculator-bd',
    '/tools/jpg-to-pdf',
    '/tools/compress-pdf',
    '/tools/family-card-eligibility-bd',
    '/tools/electricity-bill-calculator-bd',
  ]

  const allRoutes = [...mainRoutes, ...toolRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1.0 : 0.8,
  }))
}

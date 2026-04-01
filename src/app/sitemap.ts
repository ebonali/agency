import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ridoway.agency'

  // List of all tool routes
  const toolRoutes = [
    '',
    '/tools',
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
  ]

  return toolRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}

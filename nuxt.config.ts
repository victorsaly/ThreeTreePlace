import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  buildDir: 'docs', // Set the build output directory to 'docs'
  ssr: false, // Disable Server-Side Rendering for pure SSG
  app: {
    head: {
      title: 'Three Tree Place - Serviced Accommodation in Hertfordshire',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords.' },
        { hid: 'keywords', name: 'keywords', content: 'serviced accommodation, Hertfordshire, business rentals, contractor housing, UK rentals' },
        // Open Graph meta tags
        { property: 'og:title', content: 'Three Tree Place - Serviced Accommodation in Hertfordshire' },
        { property: 'og:description', content: 'Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords.' },
        { property: 'og:image', content: `${process.env.NUXT_PUBLIC_SITE_URL}/images/logo.png` },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL },
        { property: 'og:type', content: 'website' },
        // Twitter Card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Three Tree Place - Serviced Accommodation in Hertfordshire' },
        { name: 'twitter:description', content: 'Discover Three Tree Place, Hertfordshire’s premier serviced accommodation for businesses, contractors, and landlords.' },
        { name: 'twitter:image', content: `${process.env.NUXT_PUBLIC_SITE_URL}/images/logo.png` },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Three Tree Place",
            "url": process.env.NUXT_PUBLIC_SITE_URL,
            "logo": `${process.env.NUXT_PUBLIC_SITE_URL}/images/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "info@threetreeplace.com",
              "contactType": "Customer Service"
            }
          })
        }
      ]
    },
  },
  modules: [['@nuxtjs/sitemap', {
    hostname: process.env.NUXT_PUBLIC_SITE_URL,
    routes: [
      '/',
      '/about',
      '/corporate-housing',
      '/guaranteed-rent',
      '/partnerships-and-joint-ventures',
      '/temporary-accommodation',
      '/trade-accommodation',
    ],
  }], 'nuxt-gtag'],
  gtag: {
    config: {
      anonymize_ip: true, // Anonymize IP addresses
      send_page_view: true, // Send page view events
    },
  },
  plugins: [
    '~/plugins/openwidget.client.ts'
  ],
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
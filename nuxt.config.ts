// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineOrganization } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-schema-org',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'https://nhlalala-corporate.com',
    }
  },
  build: {
    transpile: [
      '@heroicons/vue',
    ],
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nhlalala Corporate stands as a premier technology services provider operating in Africa, offering comprehensive solutions across the entire spectrum of Information and Communication Technology (ICT).' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nhlalala Corporate' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nhlalala' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  site: {
    url: process.env.SITE_URL || 'https://nhlalala-corporate.com',
    name: 'Nhlalala Corporate',
    description: 'Premier technology services provider operating in Africa',
  },
  sitemap: {
    autoLastmod: true,
    autoI18n: false
  },
  robots: {
    allow: ['/', '/about', '/services', '/clients', '/contact'],
  },
  schemaOrg: {
    identity: defineOrganization({
      name: 'Nhlalala Corporate',
      alternateName: 'Nhlalala Corp',
      description: 'Premier technology services provider operating in Africa',
      url: 'https://nhlalala-corporate.com',
      logo: '/images/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4 Uniden, 192 Garden Drive, Meyerspark',
        addressLocality: 'Pretoria',
        addressCountry: 'South Africa',
      },
      email: 'info@nhlalala.co.za',
      telephone: '+27 72 622 3537',
      sameAs: [],
    })   
  },
  features: {
    inlineStyles: false
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/services', '/clients', '/contact']
    }
  }
})
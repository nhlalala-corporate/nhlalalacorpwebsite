# Nhlalala Corporate Website Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-23

## Active Technologies

- Nuxt.js 4.x framework
- Vue.js 3.x
- Tailwind CSS with custom primary color palette (#2f93ff, #0f70f5)
- @nuxtjs/color-mode for dark/light theme
- @nuxtjs/google-fonts (Inter font family)
- @nuxtjs/sitemap and @nuxtjs/robots for SEO
- nuxt-schema-org for structured data
- @fortawesome/fontawesome-free for icons
- nodemailer for backend email handling
- Google reCAPTCHA for contact form security

## Project Structure

```text
app/
├── components/
│   ├── AboutPage/
│   ├── Accessibility/
│   ├── ContactPage/
│   ├── HomePage/
│   ├── Navigation/
│   ├── ServicesPage/
│   └── UI/
├── layouts/
├── pages/
├── composables/
├── data/
├── middleware/
├── plugins/
├── utils/
├── app.vue
public/
├── images/
│   ├── partners/
│   └── ...
├── favicon.ico
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt
└── sitemap.xml
server/
├── api/
│   ├── admin/
│   ├── content/
│   ├── i18n/
│   ├── clients.get.ts
│   ├── contact.post.ts
│   ├── partners.get.ts
│   ├── services.get.ts
│   └── test-email.post.ts
├── middleware/
├── utils/
│   ├── email.ts
│   ├── smtp-config.ts
│   └── antispam.ts
nuxt.config.ts
tailwind.config.ts
package.json
```

## Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build application for production
- `pnpm preview` - Locally preview production build
- `pnpm generate` - Generate static site
- `pnpm test` - Run unit tests
- `pnpm test:run` - Run tests in CLI mode
- `pnpm test:ui` - Run tests with UI

## Code Style

- All code must follow consistent formatting and naming conventions
- Components should have single responsibilities and be modular
- All code changes must preserve existing functionality
- Follow accessibility best practices (WCAG guidelines)
- Use semantic HTML with proper ARIA attributes
- Maintain performance benchmarks (page load time under 3 seconds)
- Use the defined primary color palette (#2f93ff, #0f70f5)
- Maintain consistent typography using Inter font family

## Recent Changes

- main: Added TypeScript 5.0+, JavaScript ES2022 + Nuxt.js 4.x, Vue.js 3.x, @nuxtjs/color-mode, @nuxtjs/tailwindcss, @nuxtjs/google-fonts, nuxt-schema-org, @nuxtjs/sitemap, @nuxtjs/robots
- main: Implemented comprehensive contact form with reCAPTCHA and nodemailer integration
- main: Added dark mode support with @nuxtjs/color-mode
- main: Implemented responsive design with Tailwind CSS
- main: Added accessibility features following WCAG 2.1 AA guidelines
- main: Created comprehensive testing suite with Vitest
- main: Added multi-language support for African languages
- main: Implemented performance optimizations including image lazy loading with ImageWithPlaceholder component and WebP format
- main: Added structured data using nuxt-schema-org
- main: Created comprehensive API endpoints for services, clients, and partners

<!-- MANUAL ADDITIONS START -->
## Implementation Summary

The Nhlalala Corporate Website Enhancement project has been successfully completed with the following key features implemented:

1. **Homepage Enhancement**: Updated background with cybersecurity/data representation imagery
2. **Services Page**: Comprehensive service offerings with "Read more..." functionality and service categories
3. **Contact Form**: Secure form with Google reCAPTCHA integration and nodemailer backend
4. **About Page**: Reorganized content with Vision/Mission sections and partner logos
5. **Accessibility**: Full WCAG 2.1 AA compliance with semantic HTML and ARIA attributes
6. **Performance**: Optimized for Core Web Vitals with 90+ Lighthouse performance score
7. **Cross-browser Compatibility**: Tested across all major browsers and device sizes
8. **SEO**: Proper meta tags, schema markup, sitemaps, and robots.txt configuration
9. **Dark Mode**: Full light/dark theme support respecting user system preferences
10. **Testing**: Comprehensive unit tests for components and API routes

## Testing Documentation

For details on accessibility and cross-browser testing, see TESTING.md file.

## API Contracts

The website implements the following API contracts:
- POST /api/contact - Submit contact form with validation
- GET /api/services - Retrieve service information
- GET /api/clients - Retrieve client testimonials
- GET /api/partners - Retrieve partner information

For full API contract details, see specs/main/contracts/api-contracts.md
<!-- MANUAL ADDITIONS END -->

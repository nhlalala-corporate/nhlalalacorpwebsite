# Nhlalala Corporate Website Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-12-21

## Active Technologies

- Nuxt.js 4.x framework
- Vue.js 3.x
- Tailwind CSS with custom primary color palette (#2f93ff, #0f70f5)
- @nuxtjs/color-mode for dark/light theme
- @nuxtjs/google-fonts (Inter font family)
- @nuxtjs/sitemap and @nuxtjs/robots for SEO
- nuxt-schema-org for structured data
- @fortawesome/fontawesome-free for icons

## Project Structure

```text
app/
├── components/
├── composables/
├── layouts/
├── pages/
├── app.vue
public/
├── images/
├── favicon.ico
├── apple-touch-icon.png
├── site.webmanifest
nuxt.config.ts
tailwind.config.ts
package.json
```

## Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build application for production
- `pnpm preview` - Locally preview production build
- `pnpm generate` - Generate static site

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

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->

# Quickstart Guide: Nhlalala Corporate Website

## Prerequisites

- Node.js 18.x or higher
- pnpm package manager (recommended) - install with `npm install -g pnpm`
- Git for version control
- A modern web browser for testing

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd nhlalala-corporate

# Install dependencies
pnpm install
```

### 2. Environment Configuration

Create a `.env` file in the project root (if needed):

```bash
# Example environment variables
SITE_URL=https://nhlalalacorp.co.za
NUXT_PUBLIC_SITE_URL=https://nhlalalacorp.co.za
```

### 3. Development Server

```bash
# Start development server
pnpm dev

# The site will be available at http://localhost:3000
# Hot reload is enabled for real-time updates
```

### 4. Production Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

## Key Technologies

- **Nuxt.js 4**: Framework for Vue.js applications with server-side rendering
- **Vue 3**: Progressive JavaScript framework with Composition API
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Type-safe JavaScript development
- **@nuxtjs/color-mode**: Dark/light mode toggle functionality
- **nuxt-schema-org**: SEO and structured data implementation

## Project Structure

```
app/
├── components/     # Reusable Vue components
├── layouts/        # Layout templates (default.vue)
├── pages/          # Route-based pages (index.vue, about.vue, etc.)
├── composables/    # Reusable logic (useDarkMode.ts)
├── app.vue        # Root application component
public/             # Static assets (images, favicon, etc.)
```

## Development Guidelines

### Component Structure
- Organize components by page/functionality (e.g., HomePage/, ServicesPage/)
- Use PascalCase for component names
- Follow Vue 3 Composition API with TypeScript

### Styling
- Use Tailwind CSS utility classes primarily
- Follow the established color palette (#2f93ff, #0f70f5 for primary colors)
- Maintain consistent spacing using Tailwind's spacing scale
- Ensure responsive design with mobile-first approach

### Accessibility
- Use semantic HTML elements
- Include proper ARIA attributes where needed
- Ensure keyboard navigation works for all interactive elements
- Maintain sufficient color contrast ratios

### Performance
- Optimize images (use WebP format where possible)
- Implement lazy loading for images below the fold
- Keep JavaScript bundle size minimal
- Aim for under 3-second page load times

## Common Tasks

### Adding a New Page
1. Create a new `.vue` file in the `pages/` directory
2. Follow the same structure as existing pages
3. The route will be automatically created based on the filename

### Adding a New Component
1. Create a new `.vue` file in the `components/` directory
2. Use descriptive names and organize in subdirectories if needed
3. Export as a default component

### Updating Site Content
1. Content is primarily in the page components
2. Site-wide configuration is in `nuxt.config.ts`
3. Styling configuration is in `tailwind.config.ts`

## Running Tests

```bash
# Unit tests
pnpm test

# End-to-end tests (if implemented)
pnpm test:e2e
```

## Deployment

The site is configured for static generation:

```bash
# Generate static site
pnpm generate
```

The generated site will be in the `dist/` directory and can be deployed to any static hosting service.

## Troubleshooting

### Common Issues
- If you encounter dependency issues: run `pnpm install` again
- If hot reload isn't working: restart the dev server with `pnpm dev`
- If styles aren't loading: check that Tailwind is properly configured in `tailwind.config.ts`

### Performance Issues
- Check browser dev tools for slow-loading resources
- Ensure images are optimized
- Verify that components are properly optimized and not doing unnecessary re-renders
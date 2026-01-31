# Copilot Instructions: XR Portfolio

## Project Overview
React 19 + TypeScript + Vite portfolio showcasing XR (Extended Reality) projects. Uses shadcn/ui (Radix Vega variant), Tailwind CSS 4, Framer Motion, and React Router. Deployed on Vercel with SPA rewrites.

## Architecture & Routing
- **Entry Point**: `App.tsx` → `BrowserRouter` → `pages/Index.tsx`
- **Routing Pattern**: `Index.tsx` acts as layout shell (navbar + footer) with nested `<Routes>` for page content
- **Navigation**: Client-side via `useNavigate()`. Desktop navbar in `desktop-navbar.tsx`, mobile menu in `mobile-menu.tsx`
- **Page Transitions**: `AnimatePresence` with `mode="wait"` in `Index.tsx`, keyed by `location.pathname`
- **Deployment**: Vercel SPA config (`vercel.json`) rewrites all routes to `/index.html`

## Component System (shadcn/ui)
- **Style**: Radix Vega variant with stone base color, CSS variables enabled
- **Location**: `src/components/ui/` (17 components: button, card, badge, separator, sheet, etc.)
- **Import Pattern**: Always use `@/components/ui/{component}` alias
- **Utility**: `cn()` from `@/lib/utils` for conditional classNames (clsx + tailwind-merge)
- **Adding Components**: Use shadcn CLI with existing config from `components.json`

## Data Architecture
- **Projects**: Centralized in `src/data/projects.ts` with typed `Project` interface
- **Project Categories**: `'WebXR' | 'Unity XR' | 'Simulation' | 'Experiments'`
- **Project Structure**: Includes `id`, `title`, `description`, `tags`, `category`, plus optional detail fields (`problemStatement`, `keyDecisions`, `outcomes`, etc.)
- **Routing**: Projects list at `/projects`, details at `/projects/:id` (uses `useParams()` to match against `projectsData`)

## Animation Conventions
- **Library**: Framer Motion 12.x
- **Page Transitions**: Centralized in `Index.tsx` – `initial/animate/exit` with y-axis fade (opacity 0→1, y 20→0→-20)
- **Stagger Patterns**: `staggerContainer` + `staggerChildren` for grids (see `ProjectsIndex.tsx`, `Home.tsx`)
- **Hover States**: Use `whileHover={{ y: -5 }}` for cards, `scale: 1.02` for buttons
- **Complex Animations**: See `Home.tsx` `AnimatedHeading` – per-letter stagger with 3D transform (`rotateX`, `transformStyle: 'preserve-3d'`)

## Styling Patterns
- **Responsive**: Mobile-first, container-based layouts (`container mx-auto px-4`)
- **Typography**: Mixed font families in headings (`font-sans`, `font-serif`, `font-mono`) – see `AnimatedHeading` in `Home.tsx`
- **Gradients**: Use `bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent` for emphasis (XR, 3D keywords)
- **Theme**: Dark/light mode via Tailwind's `dark:` classes. Theme toggle in `desktop-navbar.tsx` persists to `localStorage.theme`
- **Spacing**: Consistent use of `mb-16`, `mt-20`, `gap-6` (Tailwind spacing scale)

## Key Workflows
### Development
```bash
npm run dev      # Vite dev server (default port 5173)
npm run build    # TypeScript check + Vite build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

### Adding a New Page
1. Create `src/pages/NewPage.tsx` with motion wrapper
2. Add route in `Index.tsx` `<Routes>`
3. Add nav item to `navigation` array in `Index.tsx`
4. Update route map in `handleNavigation` function

### Adding shadcn Components
```bash
npx shadcn@latest add {component}  # Auto-detects components.json config
```

### Theme Configuration
- `components.json`: shadcn config (Radix Vega style, stone base)
- `src/index.css`: Tailwind directives + CSS custom properties
- Theme toggle: `desktop-navbar.tsx` lines 40-70 (reads/writes `localStorage.theme`)

## Path Aliases
- `@/*` → `src/*` (configured in `vite.config.ts` and `tsconfig.json`)
- Common imports: `@/components/ui/*`, `@/lib/utils`, `@/data/projects`, `@/pages/*`

## Critical Files
- **Routing Logic**: [src/pages/Index.tsx](src/pages/Index.tsx)
- **Project Data**: [src/data/projects.ts](src/data/projects.ts)
- **Theme/Navbar**: [src/components/desktop-navbar.tsx](src/components/desktop-navbar.tsx)
- **Animation Examples**: [src/pages/Home.tsx](src/pages/Home.tsx) (AnimatedHeading, stagger patterns)
- **shadcn Config**: [components.json](components.json)
- **Vite Config**: [vite.config.ts](vite.config.ts)

## Common Tasks
- **Update Projects**: Edit `projectsData` array in `src/data/projects.ts`
- **Change Theme Colors**: Modify base color in `components.json` + regenerate components
- **Fix Routing**: Check `Index.tsx` route map and `vercel.json` SPA rewrites
- **Add Icons**: Import from `lucide-react` (already extensive usage in pages)
- **Adjust Animations**: Check `framer-motion` variants in page components (e.g., `fadeInUp`, `staggerContainer`)

## Project Conventions
- **No Backend**: Static SPA, all data in `src/data/`
- **No Tests**: Testing infrastructure not set up
- **Image Placeholders**: Projects use `imageUrl` field but many show placeholder text
- **Commented Code**: Experiments page/route commented out in `Index.tsx` (lines 16, 25, 39, 47, 78)
- **Personal Info**: Update email/socials in `Contact.tsx` and `Index.tsx` footer
- **Copyright Year**: Hardcoded "2026" in footer (update annually)

## Performance Notes
- Vite HMR: Fast refresh enabled via `@vitejs/plugin-react`
- Bundle: No code splitting configured (single bundle)
- Animations: Framer Motion animations may impact FCP – consider `initial={false}` for critical pages

## Gotchas
- **Route Matching**: Project detail page uses `useParams()` but falls back to first project if ID invalid
- **Dark Mode**: Requires `dark` class on `<html>` element (handled by navbar component)
- **shadcn Variants**: Using "Radix Vega" not default style – check docs if components look different
- **TypeScript Paths**: If imports fail, rebuild with `tsc -b` to regenerate path mappings

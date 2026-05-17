# Style Guide

## Colors

Dark modern palette with blue accent.

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-900` | `#0f1117` | Page background |
| `surface-800` | `#161922` | Card backgrounds |
| `surface-700` | `#1e222e` | Borders, subtle elements |
| `surface-600` | `#272c3a` | Hover states, dividers |
| `brand-500` | `#3b8eff` | Primary accent |
| `brand-600` | `#1f6bf5` | Buttons, CTAs |
| `brand-400` | `#59b0ff` | Links, highlights |
| `gray-200` | `#e5e7eb` | Body text |
| `gray-400` | `#9ca3af` | Secondary text |
| `white` | `#ffffff` | Headings |

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Inter | 700–800 | 1.5–3.75rem |
| Body | Inter | 400 | 0.875–1rem |
| Mono/Code | JetBrains Mono | 400–500 | 0.875rem |
| Nav links | Inter | 400 | 0.875rem |

## Responsive Breakpoints

| Breakpoint | Min-width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Stack to 2-col |
| `md` | 768px | Show desktop nav |
| `lg` | 1024px | 3-col grids |
| `xl` | 1280px | Max content width |

Mobile-first approach: base styles are mobile, breakpoints add complexity.

## Spacing

- Section padding: `py-20 sm:py-24`
- Content max-width: `max-w-6xl` (1152px)
- Card padding: `p-6`
- Grid gaps: `gap-6` to `gap-8`

## Components

### Cards
- Background: `bg-surface-800`
- Border: `border border-surface-700/50`
- Hover: `hover:border-brand-500/30` + subtle lift
- Radius: `rounded-xl`

### Buttons
- Primary: `bg-brand-600 hover:bg-brand-700 text-white rounded-lg`
- Secondary: `border border-surface-600 hover:border-brand-500 text-gray-300`

### Tags/Badges
- Small: `px-2 py-0.5 text-xs bg-surface-700 text-brand-300 rounded`
- Regular: `px-3 py-1 text-xs bg-surface-700 text-brand-300 rounded-full`

## Animations

- Transitions: `transition-colors` (150ms default)
- Hover lift: `hover:-translate-y-1` on project cards
- Keep animations subtle and purposeful
- Respect `prefers-reduced-motion`

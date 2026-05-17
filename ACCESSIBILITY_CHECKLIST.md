# Accessibility Checklist (WCAG AA)

## Perceivable

- [x] **Text alternatives**: All decorative icons use `aria-hidden="true"`
- [x] **Color contrast**: Text on dark backgrounds meets 4.5:1 ratio (gray-200 on surface-900 = ~12:1)
- [x] **Responsive**: Content reflows at all viewport widths without horizontal scroll
- [x] **Text resize**: Site remains usable at 200% zoom
- [ ] **Images**: Add meaningful `alt` text to all project screenshots (when added)

## Operable

- [x] **Keyboard accessible**: All interactive elements reachable via Tab
- [x] **Skip link**: "Skip to main content" link for keyboard users
- [x] **Focus visible**: Custom `:focus-visible` ring on all focusable elements
- [x] **No keyboard traps**: Mobile menu can be dismissed, focus is not trapped
- [x] **Target size**: Touch targets are at least 44x44px on mobile

## Understandable

- [x] **Language**: `lang="en"` on `<html>` element
- [x] **Consistent navigation**: Nav appears in same location on all pages
- [x] **Labels**: Form elements and buttons have accessible names
- [x] **Error identification**: N/A (no forms with validation)

## Robust

- [x] **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3)
- [x] **ARIA landmarks**: `role="main"`, `role="contentinfo"`, `aria-label` on navs
- [x] **Valid HTML**: No duplicate IDs, proper nesting
- [x] **Link purpose**: External links indicate with `↗`, `aria-label` where text is ambiguous

## Testing Checklist

- [ ] Run Lighthouse accessibility audit (target: ≥ 90)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Navigate entire site using keyboard only
- [ ] Test at 200% and 400% zoom
- [ ] Verify colour contrast with browser DevTools
- [ ] Test with `prefers-reduced-motion: reduce`

## Lighthouse Targets

| Category | Target | Notes |
|----------|--------|-------|
| Performance | ≥ 90 | Minimal JS, optimised CSS, font-display: swap |
| Accessibility | ≥ 90 | Semantic HTML, ARIA, contrast, skip links |
| Best Practices | ≥ 90 | HTTPS, no console errors, modern APIs |
| SEO | ≥ 90 | Meta tags, semantic headings, mobile-friendly |

## Performance Notes

To maintain high performance scores:
- Fonts use `display=swap` to avoid FOIT
- Tailwind CSS is purged and minified in production
- No JavaScript frameworks — only a tiny nav toggle script
- Images should use modern formats (WebP/AVIF) with explicit dimensions
- Consider adding `loading="lazy"` to below-fold images

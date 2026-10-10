# GrowMyTherapy — Project Status & Complete Handover Report

**Project Goal:** Build a pixel-accurate clone of the homepage at [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home), make it fully data-driven and theme-ready, then introduce a new "Our Office" section and retheme it.

---

## 1. Executive Summary & Status Overview

| Phase | Description | Status | Verification Result |
|---|---|---|---|
| **Phase 0** | Reference Site Deep Inspection (1440, 768, 390px) | **COMPLETED** | Saved `/docs/reference-spec.md`, reference screenshots captured |
| **Phase 1** | Foundation: Next.js + Tailwind + Role-based Tokens + Content Data | **COMPLETED** | Clean build (`npm run build` in 1.4s), ESLint 0 errors |
| **Phase 2** | Pixel-Accurate Clone: All Sections + Primitives + Responsive Verification | **COMPLETED** | Zero horizontal scroll across 390, 768, 1024, 1440, 1920px. Verification screenshots saved to `/docs/clone-check/` |
| **Phase 3** | New "Our Office" Section | **PENDING** | Data schema ready in `content/site.ts`; awaiting implementation |
| **Phase 4** | Retheming & Accessibility Verification | **PENDING** | Theme tokens wired; awaiting final palette swap & testing |

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 16.4.0 (App Router, Turbopack bundler)
- **Styling:** Tailwind CSS v4 with role-based CSS variables
- **Language:** TypeScript 5 (Strict mode)
- **Fonts:** Google Fonts via `next/font/google`:
  - Headings: `Cormorant Garamond` (Light 300, 400, 500, 600, Normal & Italic) -> mapped to `font-heading` (`--font-heading`)
  - Body & UI: `Mulish` (Light 300, 400, 500, 600) -> mapped to `font-body` (`--font-body`)
- **Image Pipeline:** `next/image` with local SVG aspect-ratio placeholders in `/public/images/placeholders/` (Zero CLS / layout shift)
- **Local Dev Server:** Running on `http://localhost:3000` via `npm run dev`

---

## 3. Role-Based Design Token System

Configured in `app/globals.css` and mapped in `tailwind.config.ts`:

```css
:root {
  --color-ink: #2B2B2B;        /* Primary body copy, dark text */
  --color-muted: #6E6E6E;      /* Captions, subtext, subtle borders */
  --color-bg: #F6F4EE;         /* Page background, Warm Ivory (Hero, Intro, CTA) */
  --color-surface: #FFFFFF;    /* Pure white cards, header/footer backgrounds */
  --color-border: #D6D0C4;     /* Neutral dividers, borders, outlines */
  --color-primary: #2B2B2B;    /* Key interactive brand accents, buttons */
  --color-secondary: #E3D9CA;  /* Warm Sand background ("How We Work" section) */
  --color-accent: #86B3B3;     /* Muted Sage / Seafoam (legal copyright bar) */
  --color-dark: #2B2B2B;       /* Charcoal background (Quote banner) */
  --color-on-dark: #FFFFFF;    /* High-contrast text on dark surfaces */
}
```

*Rule Enforced:* Body copy uses `text-ink` (never `text-primary`), ensuring that when brand colors are changed during retheming, general reading copy remains crisp and untouched. No raw hex codes are permitted in UI components.

---

## 4. Component Structure & Data-Driven Layout

### Reusable UI Primitives (`/components/ui/`)
- `Container.tsx`: Standardized responsive container (`max-w-7xl`, `narrow`, `wide`, `full`) with responsive horizontal padding.
- `Section.tsx`: Semantic section container supporting all token background colors (`bg`, `surface`, `secondary`, `dark`, `accent`) and measured vertical padding (`large`, `medium`, `small`, `none`).
- `Button.tsx`: Supports 3 variants:
  - `text-underline`: Underline text link with hover transitions
  - `solid`: Solid brand button (`bg-primary text-on-dark`)
  - `outline-pill`: Pill button (`rounded-full border border-primary text-primary hover:bg-primary hover:text-on-dark`)
- `Eyebrow.tsx`: Uppercase tracking typography (`text-[11px] sm:text-xs tracking-[0.15em] text-ink`).
- `SectionHeading.tsx`: Handles `h2` and `h3` levels with light serif font hierarchy.
- `TagPill.tsx`: Bordered tag badges for the 12 areas of expertise.
- `ResponsiveImage.tsx`: Wraps `next/image` with explicit width/height, aspect ratios, and `sizes` attributes.

### Section Order & Implementation (`/components/sections/` composed in `app/page.tsx`)
1. **`Navbar`**: Transparent absolute header, logo left, desktop nav links with hover & keyboard-accessible dropdowns (`OUR TEAM`, `SPECIALTIES`, `APPROACHES`), "CONTACT" button. Mobile drawer includes `aria-expanded`, Escape to close, focus trap, and body scroll lock.
2. **`Hero`**: Single `<h1>` ("Rebuild your foundation on solid ground..."), eyebrow, body copy, text-underline CTA button, and asymmetric 2-image collage (`497×572` and `115×378`).
3. **`IntroPhilosophy`**: Split 2-column layout with `<h2>` ("You’re holding onto hope..."), eyebrow, 2 body paragraphs, and vertical coastal portrait image (`436×626`).
4. **`WhoWeHelp`**: Centered `<h2>` ("Who we help"), 3 audience cards (Adults, Couples, Children & Teens) mapped from data with hover zoom imagery.
5. **`QuoteBanner`**: Full-bleed `bg-dark` section with moody texture overlay and centered `text-on-dark` italic quote.
6. **`AreasOfExpertise`**: Centered `<h3>` with a 12-item tag grid rendered via `<TagPill>`.
7. **`HowWeWork`**: Warm Sand `bg-secondary` section, 2-column narrative with `text-underline` button and tall portrait image (`326×688`).
8. **`StatementBanner`**: Landscape family beach photo (`769×533`) paired with statement `<h2>` ("Honoring where you’ve been & helping shape where you’re headed.").
9. **`SpecialtiesGrid`**: Asymmetric layout with sticky left `<h3>` ("Our specialties include…") and a 2×2 grid of 4 service blocks on the right (Trauma, EMDR, Dissociation, Special Needs Parenting) with `text-underline` links.
10. **`ScheduleCTA`**: Warm Ivory `bg-bg` section flanked by 2 coastal photos, centered appointment copy, and rounded `outline-pill` "BOOK NOW" button.
11. **`Footer`**: 4-column data-driven layout (Brand info, Navigate links, Contact info, 9-member therapist roster), plus Sage Teal `bg-accent` sub-footer legal bar.

### Central Data Store (`/content/site.ts`)
- All site copy, therapist rosters, navigation links, and image slots live in a single strongly-typed TypeScript file. No text is hardcoded inside components.

---

## 5. Verification Results
- **Linting:** `npm run lint` -> **0 errors, 0 warnings**.
- **Production Build:** `npm run build` -> **Compiled successfully in < 1.5s**, static routes prerendered.
- **Horizontal Overflow Check:** Tested at 390px, 768px, 1024px, 1440px, and 1920px -> **Zero horizontal scroll on all widths** (`hasHorizontalScroll: false`).
- **Screenshot Artifacts:**
  - Reference: `/docs/reference-1440.png`, `/docs/reference-768.png`, `/docs/reference-390.png`
  - Clone Check: `/docs/clone-check/clone-1440.png`, `clone-768.png`, `clone-390.png`, `clone-1024.png`, `clone-1920.png`

---

## 6. What Remains to be Done (Upcoming Phases)

### Phase 3: Add "Our Office" Section
- Create `/components/sections/OurOffice.tsx`.
- Place between `StatementBanner` and `SpecialtiesGrid` (or where it flows naturally).
- Elements:
  - Section heading (`H2` or `H3`)
  - 2-3 sentences of supporting copy
  - 2-3 image slots (using placeholders)
  - Small info row (location, in-person/hybrid availability, comfort/privacy note)
- Content driven from `siteContent.office` in `/content/site.ts`.

### Phase 4: Theme-Ready & Accessibility Finalization
- Confirm that changing only the CSS variables in `app/globals.css` swaps the entire site palette (backgrounds, buttons, borders, text, overlays).
- Add README documentation explaining how to swap colors, fonts, and content.
- Final accessibility check (text contrast >= 4.5:1, keyboard navigation, focus states).

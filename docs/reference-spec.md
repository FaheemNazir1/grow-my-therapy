# Reference Specification: Conejo Valley Family Counseling Homepage Clone

- **Reference URL:** https://www.conejovalleycounseling.com/home
- **Target Viewports Inspected:** 
  - Desktop: `1440px` (Full-page capture: [`reference-1440.png`](file:///d:/Project/GrowMyTherapy/docs/reference-1440.png))
  - Tablet: `768px` (Full-page capture: [`reference-768.png`](file:///d:/Project/GrowMyTherapy/docs/reference-768.png))
  - Mobile: `390px` (Full-page capture: [`reference-390.png`](file:///d:/Project/GrowMyTherapy/docs/reference-390.png))
- **Original CMS / Framework:** Squarespace 7.1 (Fluid Engine Grid, 24-col desktop, 8/10-col mobile)
- **Target Rebuild Stack:** Next.js (App Router), Tailwind CSS, TypeScript, Semantic HTML5.

---

## 1. Section Order & Nomenclature (Top to Bottom)

| # | Section Name | Role / Content Summary | Background Color Token |
|---|---|---|---|
| **0** | `Navbar` | Header with Logo, Navigation Links, Dropdowns, and CTA | Transparent overlay on Hero |
| **1** | `Hero` | Eyebrow, H1 headline, subtext, primary CTA button, collage of 2 images | `--color-bg` (`#F6F4EE`) |
| **2** | `Intro / Philosophy` | "You’re holding onto hope...", secondary kicker, 2 body paragraphs, vertical coastal image | `--color-bg` (`#F6F4EE`) |
| **3** | `Who We Help` | Centered H2 "Who we help", 3 distinct card columns (Adults, Couples, Children & Teens) with images | `--color-surface` (`#FFFFFF`) |
| **4** | `Quote Banner` | Full-width quote banner ("You deserve a place where your story is heard..."), dark coastal background | `--color-dark` (`#2B2B2B`) |
| **5** | `Areas of Expertise` | Centered H3 "Our areas of expertise", 12-item uppercase specialty tag/pill grid | `--color-surface` (`#FFFFFF`) |
| **6** | `How We Work` | 2-column split: left story copy + button "LEARN MORE ABOUT US", right tall lifestyle image | `--color-secondary` (`#E3D9CA`) |
| **7** | `Statement Banner` | Landscape image of family at beach with statement headline below | `--color-surface` (`#FFFFFF`) |
| **8** | `Specialties Deep Dive` | H3 "Our specialties include…", 4 detailed service blocks with "LEARN MORE" links | `--color-surface` (`#FFFFFF`) |
| **9** | `Schedule CTA` | Flanked 2-image layout around appointment headline, body copy, and rounded "BOOK NOW" button | `--color-bg` (`#F6F4EE`) |
| **10** | `Main Footer` | 4-column footer: Brand summary, Navigate links, Contact info, Team roster | `--color-surface` (`#FFFFFF`) |
| **11** | `Sub-Footer / Copyright` | Single-line horizontal copyright and legal links bar | `--color-accent` (`#86B3B3`) |

---

## 2. Layout & Responsive Breakpoint Behavior (Confirmed & Measured)

### Container Max-Width & Padding Metrics
- **Global Container Max-Width:** `1280px` (`max-w-7xl` with `mx-auto`). Squarespace canvas allows bleeding full-bleed elements up to `1800px` (`maxPageWidth`), while inner content wrappers enforce structured reading bounds between `1100px` and `1280px`.
- **Horizontal Container Padding (`px`):**
  - Desktop (`1440px`): `4vw` to `5vw` (approx `56px` to `72px`).
  - Tablet (`768px`): `32px` (`4vw`).
  - Mobile (`390px`): `20px` to `24px`.
- **Vertical Section Padding (`py`):**
  - **Desktop (`1440px`):**
    - Large sections (Hero, Intro, Who We Help, Areas of Expertise, Specialties, Schedule CTA): `95px – 115px` (`py-24` to `py-28`).
    - Medium sections (Quote Banner, How We Work, Statement): `64px – 95px` (`py-16` to `py-24`).
    - Main Footer: `64.8px` (`py-16`).
    - Sub-footer / Legal bar: `7.2px – 12px` (`py-3`).
  - **Tablet (`768px`):**
    - Large sections: `56px – 72px` (`py-14` to `py-18`).
    - Medium sections: `48px – 56px` (`py-12` to `py-14`).
    - Footer: `40px` (`py-10`).
    - Sub-footer: `12px` (`py-3`).
  - **Mobile (`390px`):**
    - Large sections: `40px – 52px` (`py-10` to `py-14`).
    - Medium sections: `36px – 44px` (`py-9` to `py-11`).
    - Footer: `36px` (`py-9`).
    - Sub-footer: `12px` (`py-3`).

---

## 3. Section-by-Section Layout & Key Element Confirmations

### Section 0: Navbar & Dropdown Behavior
- **Position & Sizing:** `absolute top-0 left-0 w-full z-50`, height `115px` desktop (`75px` mobile).
- **Layout:** Flex container (`justify-between items-center`). Left: Brand logo image. Center-Right: Nav items. Far-right: "CONTACT" CTA button.
- **Nav Dropdown Items:**
  1. `ABOUT` (Direct link: `/therapists-newbury-park`)
  2. `OUR TEAM` (Dropdown folder):
     - Jennifer Anderson, LMFT
     - Candace Bletscher, AMFT
     - Heather Williams-Baumgart, AMFT
     - Samantha Johnson, AMFT
     - Autumn Bodily, AMFT
     - Rosa Gomez, AMFT
     - Chad Flores, AMFT
     - Simran Sidhu, AMFT
     - Jessica Jauregui, MA, AMFT
  3. `SPECIALTIES` (Dropdown folder):
     - Dissociation
     - Trauma
     - Special Needs Parenting
     - Couples
     - Children & Teens
     - Anxiety & Depression
     - Adoption
  4. `APPROACHES` (Dropdown folder):
     - EMDR
     - Brainspotting
     - Somatic Therapy
     - Parts Work Therapy
  5. `FAQS` (Direct link: `/faqs`)
- **Hover & Focus Behavior:**
  - On hover or keyboard focus, the dropdown container reveals smoothly with `opacity: 1`, `translate-y-0`, `pointer-events-auto` (hidden state: `opacity: 0`, `translate-y-2`, `pointer-events-none`).
  - Background is crisp `--color-surface` (`#FFFFFF`) or `--color-bg` (`#F6F4EE`), with subtle border `--color-border` (`#D6D0C4`), soft elevation, and padded link items with hover highlight.
- **Mobile Drawer Behavior:**
  - At `< 768px`, desktop nav collapses into a 2-bar animated hamburger toggle.
  - Tapping hamburger triggers a fixed full-screen drawer (`bg-bg/98 backdrop-blur-md`) with high-contrast touch targets (`16px – 18px`), expandable accordion menus for folders, and full accessibility support (`aria-expanded`, Esc key to close, focus trap).

### Section 1: Hero & Exact Collage Dimensions
- **Layout:** Asymmetric 3-element composition:
  - **Left Image (`img-hero-1`):** `497px` wide × `572px` high (aspect ratio ~`0.87 : 1` to `0.51 : 1`), positioned flush left or left column.
  - **Center Content Block:** Width `643px`, top offset `348px`, contains Eyebrow ("ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA"), H1 ("Rebuild your foundation on solid ground and finally begin to thrive."), Subtext, and "BOOK AN APPOINTMENT" button.
  - **Right Accent Image (`img-hero-2`):** `115px` wide × `378px` high (aspect ratio ~`0.30 : 1`), narrow vertical strip positioned on the far right margin at top offset `348px`.
- **Reflow:**
  - Tablet (`768px`): Main image scales to `261×531px`, right accent scales to `57×335px`.
  - Mobile (`390px`): Content stacks vertically: Eyebrow -> H1 -> Subtext -> Button -> Image collage centered (`278×304px` with secondary accent).

### Section 2: Intro / Philosophy
- **Layout:** Split grid (60% text content left, 40% vertical coastal photography right).
- **Image:** `436px` wide × `626px` high (`aspect-ratio: 0.70 : 1`).
- **Reflow:** Stacks into a single column on mobile with full-width image below copy.

### Section 3: Who We Help
- **Layout:** Centered H2 heading ("Who we help") with 3 equal card columns (Adults, Couples, Children & Teens).
- **Cards:** Each card features a portrait image (`364×416px`, `aspect-ratio: 0.88 : 1`), H4 serif title, and body description.
- **Reflow:** 3 columns on desktop/tablet, stacked 1 column on mobile with `32px` card gap.

### Section 4: Quote Banner
- **Layout:** Full-width dark charcoal container (`bg-dark`), centered max-w-4xl container, white light serif quote H2.
- **Reflow:** Padding scales from `95px` desktop down to `48px` mobile.

### Section 5: Areas of Expertise
- **Layout:** Centered H3 heading with 12 uppercase keywords.
- **Desktop:** 4 columns × 3 rows or flexible centered pills with subtle borders and `2px` letter-spacing.
- **Mobile:** 2 columns or wrapped badges.

### Section 6: How We Work
- **Layout:** Warm Sand background (`bg-secondary`), 2 columns:
  - Left: Eyebrow, H2 ("We’re here to make a difference."), Subtitle, 2 paragraphs, "LEARN MORE ABOUT US" button.
  - Right: Tall vertical image (`326×688px`).
- **Mobile:** Stacks with text above image.

### Section 7: Statement Banner
- **Layout:** Wide landscape image (`769×533px`, `1.44 : 1`) with large statement headline below or alongside ("Honoring where you’ve been & helping shape where you’re headed.").

### Section 8: Specialties Deep Dive (Confirmed Exact 2×2 Grid)
- **Layout Structure:**
  - **Left Column:** H3 Section Title: `"Our specialties include…"` (`max-w-xs`).
  - **Right 2×2 Grid:** 4 structured service blocks:
    - **Top-Left Block:** `Trauma` (H4 title, description paragraph, `"LEARN MORE"` text link/button).
    - **Top-Right Block:** `EMDR` (H4 title, description paragraph, `"LEARN MORE"` text link/button).
    - **Bottom-Left Block:** `Dissociation` (H4 title, description paragraph, `"LEARN MORE"` text link/button).
    - **Bottom-Right Block:** `Special Needs Parenting` (H4 title, description paragraph, `"LEARN MORE"` text link/button).
- **Reflow:**
  - Desktop: Asymmetric layout (Sticky/top H3 on left, 2×2 grid of blocks on right, `370px` column width, `gap: 32px – 48px`).
  - Tablet: Stacked H3 on top, 2-column grid beneath.
  - Mobile: Single-column stack (H3 on top, followed by 4 blocks sequentially with `32px` vertical gap).

### Section 9: Schedule CTA
- **Layout:** Center content flanked by 2 coastal photos:
  - Left accent photo: `170×489px` (`0.35 : 1`).
  - Right photo: `497×606px` (`0.82 : 1`).
  - Center: Eyebrow, H2, body copy, and pill-shaped outline button `"BOOK NOW"` (`rounded-full px-8 py-3.5`).
- **Mobile:** Single-column centered card.

### Section 10: Main Footer
- **Layout:** 4 columns:
  1. Brand logo (`202×59px`) + welcoming text.
  2. `NAVIGATE` links (Home, About, FAQs, Contact).
  3. `CONTACT` info (Address, Email, Phone, Coverage areas).
  4. `OUR TEAM` roster (9 clinicians).
- **Reflow:** 4 columns on desktop -> 2×2 on tablet -> 1 column on mobile.

### Section 11: Sub-Footer / Legal Bar
- **Layout:** Background `--color-accent` (`#86B3B3`), centered single row: `"Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co."`

---

## 4. Typography Specification

- **Headings (`H1` – `H4`):** **`Cormorant Garamond`** via `next/font/google` (weights 300, 400, 400 italic).
- **Body & Interface:** **`Mulish`** via `next/font/google` (weights 300, 400, 500, 600).
- **Classes:** `font-heading` and `font-body`.

| Role / Tag | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking | Text Transform | Color |
|---|---|---|---|---|---|---|---|---|
| **H1 (Hero)** | Cormorant Garamond | `54px – 60px` | `34px – 38px` | 300 | `1.15` | `-0.02em` | None | `text-ink` |
| **H2 (Section Headings)** | Cormorant Garamond | `40px – 48px` | `28px – 32px` | 300 | `1.25` | `-0.01em` | None | `text-ink` |
| **H3 (Sub-sections)** | Cormorant Garamond | `32px – 38px` | `24px – 26px` | 300 | `1.3` | `-0.01em` | None | `text-ink` |
| **H4 (Card Titles)** | Cormorant Garamond | `24px – 27px` | `20px` | 300 / 400 | `1.35` | `0` | None | `text-ink` |
| **Eyebrows / Kickers** | Mulish | `11px – 12px` | `11px` | 400 | `1.5` | `0.15em` | Uppercase | `text-ink` |
| **Body (Default)** | Mulish | `15px – 16px` | `14px – 15px` | 300 | `1.8` | `0.01em` | None | `text-ink` |
| **Body Large** | Mulish | `17px – 18px` | `15px – 16px` | 300 | `1.75` | `0.01em` | None | `text-ink` |
| **Body Small / Footer** | Mulish | `13px – 14px` | `12px – 13px` | 300 | `1.6` | `0.01em` | None | `text-muted` |
| **Nav Links** | Mulish | `13.5px` | `16px` | 400 | `1.8` | `0.10em` | Uppercase | `text-ink` |
| **Buttons** | Mulish | `12.75px` | `12.75px` | 400 | `1.2` | `0.12em` | Uppercase | `text-ink` |

---

## 5. Role-Based Design Tokens (Amendment 1)

All components strictly use CSS variables and mapped Tailwind utilities. No hardcoded hex values or Tailwind default colors (`text-gray-*`, `bg-blue-*`, etc.) are permitted.

| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-ink` | `#2B2B2B` | Primary body text and general ink. (Never use brand primary for body text) |
| `--color-muted` | `#6E6E6E` | Secondary body text, metadata, captions, understated links |
| `--color-bg` | `#F6F4EE` | Page background, Hero, Intro, Schedule CTA (Warm Ivory) |
| `--color-surface` | `#FFFFFF` | Card backgrounds, pure white content sections, popovers |
| `--color-border` | `#D6D0C4` | Dividers, pill button borders, subtle card outlines |
| `--color-primary` | `#2B2B2B` | Key brand elements, buttons, interactive accents |
| `--color-secondary` | `#E3D9CA` | "How We Work" section background (Warm Sand) |
| `--color-accent` | `#86B3B3` | Sub-footer / legal copyright bar background (Sage / Seafoam) |
| `--color-dark` | `#2B2B2B` | Quote banner background (Charcoal) |
| `--color-on-dark` | `#FFFFFF` | Text and icons placed on dark surfaces (Quote banner text) |

---

## 6. Image Inventory & Aspect Ratios

| Image Identifier | Section | Target Dimensions | Aspect Ratio | Fit |
|---|---|---|---|---|
| `img-hero-1` | Hero | 497 × 572 px | `0.87 : 1` (Tall vertical) | `cover` |
| `img-hero-2` | Hero | 115 × 378 px | `0.30 : 1` (Narrow accent strip) | `cover` |
| `img-intro` | Intro / Philosophy | 436 × 626 px | `0.70 : 1` (Portrait) | `cover` |
| `img-card-adults` | Who We Help | 364 × 416 px | `0.88 : 1` (Card portrait) | `cover` |
| `img-card-couples` | Who We Help | 364 × 416 px | `0.88 : 1` (Card portrait) | `cover` |
| `img-card-teens` | Who We Help | 364 × 416 px | `0.88 : 1` (Card portrait) | `cover` |
| `img-quote-bg` | Quote Banner | 1440 × 600 px | `2.40 : 1` (Dark landscape overlay) | `cover` |
| `img-how-we-work` | How We Work | 326 × 688 px | `0.47 : 1` (Tall vertical) | `cover` |
| `img-statement` | Statement Banner | 769 × 533 px | `1.44 : 1` (Landscape) | `cover` |
| `img-schedule-1` | Schedule CTA | 170 × 489 px | `0.35 : 1` (Vertical strip) | `cover` |
| `img-schedule-2` | Schedule CTA | 497 × 606 px | `0.82 : 1` (Portrait) | `cover` |
| `img-logo` | Navbar & Footer | 257 × 75 px | `3.43 : 1` (Horizontal logo) | `contain` |

---
name: Kampung Cakap English Center
description: Campus Life — a photographic, daylight learning environment.
colors:
  canvas: "#ffffff"
  surface: "#f4f9fc"
  sky-surface: "#e8f5fc"
  ink: "#172b3a"
  body: "#465966"
  muted: "#5a6b77"
  line: "#dce5eb"
  blue: "#07557c"
  focus: "#0284c7"
  orange: "#c84b0b"
  orange-hover: "#ab3d08"
  yellow: "#fde047"
  secondary-border: "#b3c4cf"
  field-border: "#bbcbd6"
  error: "#a52b18"
typography:
  display:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(3.5rem, 5.3vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(1.9rem, 3.3vw, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  page-title:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(2.35rem, 4.1vw, 3.7rem)"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-0.035em"
  faq-title:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(2.6rem, 5.2vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  contact-title:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(2.6rem, 5.2vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: '"Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  photo: "16px"
  field: "10px"
  notice: "12px"
  small: "8px"
  pill: "999px"
spacing:
  field-gap: "8px"
  action-gap: "12px"
  gallery-gap: "20px"
  card-gap: "24px"
  mobile-grid-gap: "28px"
  content-gap: "40px"
  mobile-section: "52px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-secondary-hover:
    backgroundColor: "{colors.sky-surface}"
  input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  tag:
    backgroundColor: "{colors.sky-surface}"
    textColor: "{colors.blue}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  notice:
    backgroundColor: "{colors.sky-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.notice}"
    padding: "20px 24px"
  package-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.photo}"
    padding: "30px"
  alumni-filter:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.blue}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  alumni-filter-selected:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.canvas}"
---

# Design System: Kampung Cakap English Center

## Overview

**Creative North Star: "Campus Life"**

Learning feels like a place people inhabit together. Daylight surfaces, candid photography and calm editorial spacing make the school approachable without disguising the discipline of immersion. The design is custom to Kampung Cakap; informational clarity is an influence, not a borrowed brand system.

Photographs carry the atmosphere while deep-blue text and warm-orange actions carry orientation. Dense program, housing and price information stays readable through explicit hierarchy and dividers rather than decorative icon-card repetition. The durable brand commitments are the school name, the tagline “Datang Bisu, Pulang Cakap.” and an energetic, friendly, disciplined voice.

**Key Characteristics:**
- Daylight white and sky-blue surfaces.
- Human photography with explicit illustration disclosures.
- Deep-blue orientation and warm-orange actions.
- Rounded photographs, pill controls and flat editorial depth.
- Visible content before hydration and restrained accessible interaction.

## Colors

A cool daylight ground supports warm actions and restrained yellow accents. Frontmatter is normative; `src/styles/global.css` supplies the implementation primitives.

### Primary
- **Warm Action Orange** (`orange`, `orange-hover`): registration and consultation actions with white labels.
- **Deep Campus Blue** (`blue`): navigation state, links, selected filters and the emphasized tagline line. It is the root `--blue`, not the brighter Tailwind primary-600.

### Secondary
- **Sky Surface** (`sky-surface`): selected packages, notices, contextual tags and closing action panels.
- **Focus Blue** (`focus`): visible keyboard outlines, separate from deep-blue text.

### Tertiary
- **Sunlight Yellow** (`yellow`): text selection and restrained accent, paired with dark ink.

### Neutral
- **Daylight Canvas** (`canvas`) and **Cool Surface** (`surface`): white content and pale-blue section alternation.
- **Campus Ink**, **Body Slate**, **Muted Slate** (`ink`, `body`, `muted`): heading, reading and secondary-information roles.
- **Quiet Line**, **Secondary Border**, **Field Border** (`line`, `secondary-border`, `field-border`): dividers and interactive boundaries.
- **Error Rust** (`error`): invalid-field borders and readable inline errors; not decoration.

**The Action Contrast Rule.** Use the implemented darker orange for white-label primary actions; do not substitute a brighter decorative orange.

## Typography

**Display Font:** self-hosted Plus Jakarta Sans, with ui-sans-serif, system-ui and sans-serif fallbacks.
**Body Font:** the same family. Installed local font assets provide weights 400, 500, 600, 700 and 800.

**Character:** compact, friendly sans-serif typography with tightly tracked display text and generous reading leading. Roles in frontmatter describe real selectors rather than a universal all-headings-bold rule.

### Hierarchy
- **Display:** bold home headline. Tablet overrides to 3.4rem; mobile uses `clamp(2.9rem, 11.6vw, 4rem)`.
- **Headline:** shared section headings; measure is 23ch desktop and 24ch mobile.
- **Page title:** the shared internal-page hero; mobile uses `clamp(2rem, 8vw, 2.8rem)`.
- **FAQ title / Contact title:** intentionally lighter (400), inheriting normal weight through Tailwind's heading reset. Contact form introduction also stays normal weight at 1.65rem / 1.3. Do not normalize these to 700.
- **Title:** home program names; larger facility/package names have page-specific sizes.
- **Body:** base reading text. Section introductions use 1.0625rem / 1.8 and a 65ch measure, changing to 15px on mobile; prose uses a 70ch maximum and 1.85 leading.
- **Label:** primary and secondary actions. Navigation uses 13px / 500, active links 700; tags use 12px / 600. Brand lettering alone uses 800.

**The Weight Has a Job Rule.** Preserve the contrast between bold wayfinding, lighter conversational FAQ/contact headlines and readable normal-weight paragraphs.

## Layout

The centered container is `min(100% - 96px, 1280px)` on desktop; mobile at 767px and below uses `calc(100% - 40px)` (20px per side). Shared sections have 80px vertical padding, reduced to 52px on mobile. Two-column reading/image grids use a 40px gap and stack with 28px gaps. Photo galleries use three columns and 20px gaps, then two columns with 12px gaps on mobile. Page-specific editorial layouts additionally use 48–76px desktop gaps.

Internal-page heroes use two columns with a 64px gap and 340px-tall photographs; mobile stacks text above a 250px photograph. Footer columns stack at the same mobile breakpoint. Navigation becomes a 72px-high header with a 44px circular menu control below 1024px; desktop is 80px high, with tighter nav spacing at 1100px and below. Alumni grids step down at 1000px; program/housing layouts have intermediate 900px adaptations.

Tables may scroll only within their labeled local region. The price table has a 720px minimum width; its positioned scroll container contains the visually hidden labels. Never solve mobile overflow by hiding document content. Homepage composition and conversion criteria live in [the home surface brief](docs/home-surface.md), not in global tokens.

## Elevation & Depth

Flat photographs, tonal section changes and hairline dividers create most depth. Cards do not acquire decorative glows or layered shadows. A navigation dropdown is the real elevation exception.

### Shadow Vocabulary
- **Navigation dropdown:** `0 12px 35px rgb(23 43 58 / .12)`; floating white link panel, rounded and unbordered.

**The Flat Content Rule.** Keep content surfaces flat; reserve the soft shadow for the floating navigation dropdown.

## Shapes

Photographs and major panels use softly rounded photo corners. Fields are slightly tighter, notices and dropdowns intermediate, and action/tag/filter controls pill-shaped. Circular brand marks and mobile menu controls are deliberate exceptions. Crop photos with `object-fit: cover`; retain the source's explicit width, height and descriptive alt text. Use clipping for bounded photographic crops, not decorative blobs or masking that hides essential information.

## Components

### Buttons
Confident, compact pill actions: inline flex with a 10px gap and a minimum 48px height. Primary uses the action orange and white; secondary uses white, ink and a secondary border. Hover darkens primary or adds the sky surface and deep-blue border to secondary. Active press scales to .98. Keyboard focus uses a 3px focus-blue outline offset 5px. Mobile home actions use 12px labels and 13px 17px padding.

### Chips
Context tags are static sky-surface labels, not headings. Alumni filters are real buttons with `aria-pressed`, a minimum 46px height, white default and deep-blue selected state; hover adds sky surface. They wrap instead of overflowing.

### Cards / Containers
Photo-led program previews are linked editorial entries, not boxed icon tiles: rounded cropped photo, small metadata, title and paragraph below. Hover scales only the program photo to 1.035 over .35s. Package panels use 30px padding, reduced to 22px at tablet width; the selected panel uses sky surface. Notices use their normative padding and a 14px / 1.8 reading style. Closing action panels use 48px padding, reduced to 30px 24px on mobile.

### Inputs / Fields
White fields with field-border strokes, 50px minimum height, normal reading text and field corners. Contact fields have a deep-blue caret (overriding the global orange caret). Invalid fields use error rust, an associated inline alert and `aria-invalid`; submission focuses the first invalid field. Labels persist above fields. Name and phone are required; the date remains optional. The form prepares an encoded WhatsApp message, stores no registration on the site and exposes the identical fallback link. The destination is demonstrative, not verified; no sensitive data or payment should be sent.

### Navigation
Sticky white header with a quiet bottom divider. Desktop grouping uses native `details`; its open panel is the elevation exception. Active page is indicated with deep-blue bold text and `aria-current`. Mobile uses a real button with expanded state, scrollable grouped links, Escape-to-close and focus return. Footer exposes the full page set. Floating WhatsApp is a white, bordered pill with its own green text (#176737), border (#c4d9ca) and pale-green hover (#edf8f0), not an orange primary button; mobile hides its text while preserving its accessible name.

### FAQ and photographic motion
Native disclosure rows have top/bottom dividers; 24px 4px summaries use bold question text, deep-blue hover/open states and a rotating inline caret. Answers remain normal weight; the first item starts open. Mobile summaries use 22px vertical padding and .95rem type. The home triptych has one .9s clip-path reveal with `cubic-bezier(.16, 1, .3, 1)` from a visible server-rendered baseline. No repeated section entrance choreography. Reduced-motion preference suppresses this reveal, smooth scrolling and prolonged transitions.

## Do's and Don'ts

### Do:
- **Do** use locally served photography with explicit illustration notes, descriptive alt text and image dimensions.
- **Do** preserve the intentional lighter FAQ/contact headlines and the darker action orange.
- **Do** keep mobile content visible and confine wide tables to their labeled scroll containers.
- **Do** keep visible keyboard focus, native disclosures and reduced-motion behavior.
- **Do** disclose estimated prices, example stories and the demonstration contact destination.

### Don't:
- **Don't** present stock models or scenes as verified staff, students, alumni or campus facilities.
- **Don't** add fake numerical social proof, invented legal identifiers or unverified contact details.
- **Don't** reintroduce decorative blobs, gradients, glass or colored glows into this photographic world.
- **Don't** replace editorial photo-and-copy rhythm with repetitive decorative icon cards.
- **Don't** make content invisible until JavaScript or an entrance animation runs.

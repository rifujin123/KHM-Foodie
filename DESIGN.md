---
name: Crave & Connect
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5c4037'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#916f65'
  outline-variant: '#e6beb2'
  surface-tint: '#ad3300'
  primary: '#a93100'
  on-primary: '#ffffff'
  primary-container: '#d34000'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59e'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e1'
  on-secondary-container: '#656464'
  tertiary: '#795600'
  on-tertiary: '#ffffff'
  tertiary-container: '#986d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#842500'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#ffba20'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The brand identity centers on the visceral joy of food discovery and the seamless reliability of modern logistics. It targets urban professionals and food enthusiasts who value speed without compromising on the quality of their culinary experience. 

The design style is **Modern / Corporate**, prioritizing clarity, high-quality imagery, and an energetic palette. It balances "clean and professional" (to establish trust in payments and delivery) with "vibrant and appetizing" (to drive conversion). The UI utilizes ample whitespace to allow high-resolution food photography to act as the primary visual driver. Elements are friendly and approachable, avoiding technical coldness in favor of a warm, service-oriented aesthetic.

## Colors

The palette is led by **Safety Orange (#FF4F00)**, a color chosen to stimulate appetite and convey a sense of urgency and freshness. 

- **Primary (#FF4F00):** Used for critical actions, price highlights, and active states.
- **Secondary (#2D2D2D):** A deep charcoal for high-contrast typography and primary navigation elements, providing a grounded, professional feel.
- **Tertiary (#FFB800):** A warm gold used sparingly for ratings, "Must Try" badges, and loyalty program indicators.
- **Neutral (#F8F9FA):** A range of soft greys used for background layering to prevent visual fatigue and ensure the orange accents pop.

The interface maintains a light mode default to emphasize cleanliness and food hygiene.

## Typography

This design system uses **Plus Jakarta Sans** across all levels. Its soft, rounded geometric forms strike the perfect balance between professional utility and friendly approachability. 

Tight tracking is applied to display styles to give a modern, "app-first" feel. Body text uses generous line heights to ensure readability when browsing long ingredient lists or restaurant descriptions. Headlines use a bold weight (700-800) to create a strong visual hierarchy, ensuring that restaurant names and dish titles are the first things a user notices.

## Layout & Spacing

The layout follows a **Fluid Grid** system with a focus on high-density information for management views and airy, visual-heavy layouts for the customer-facing side.

- **Desktop:** 12-column grid, 24px gutters, 1280px max-width.
- **Mobile:** Single column, 16px side margins.
- **Spacing Rhythm:** Based on an 8px scale. Use `sm` (16px) for internal card padding and `md` (24px) for vertical section spacing. 

Smart Suggestion blocks use a horizontal-scroll (carousel) layout on mobile to maximize screen real estate, while transitioning to a multi-column grid on desktop.

## Elevation & Depth

Visual hierarchy is established using **Tonal Layers** combined with **Ambient Shadows**. 

- **Level 0 (Background):** #F8F9FA.
- **Level 1 (Cards/Content):** #FFFFFF with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)).
- **Level 2 (Modals/Floating Action Buttons):** #FFFFFF with a more pronounced shadow (0px 10px 30px rgba(0,0,0,0.12)) to indicate interactivity.
- **Interactions:** Hover states on restaurant cards should slightly lift the card (reduce blur, increase Y-offset) to signal clickability.

## Shapes

The design uses a **Rounded (Level 2)** shape language to evoke a friendly, appetizing feel. 

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Restaurant/Food Cards:** 1rem (16px) corner radius for a modern "container" look.
- **Search Bars & Selection Chips:** 1.5rem (24px) or full "pill" shape to distinguish them from functional containers.
- **Images:** All food photography must follow the 1rem corner radius to maintain the soft aesthetic.

## Components

### Buttons & Inputs
- **Primary Button:** Solid #FF4F00 with white text. High-contrast, 16px vertical padding.
- **Secondary Button:** White background with #FF4F00 border and text. 
- **Search Bar:** Pill-shaped, featuring a subtle shadow and a leading icon. The background is pure white to contrast against the neutral page background.

### Cards & Lists
- **Restaurant Card:** Featured image at the top (16:9 ratio), followed by title, rating (using Tertiary color), and delivery time/fee in the footer.
- **Menu Item:** A horizontal list item for mobile, with the dish name and price on the left and a square thumbnail on the right with a "plus" floating action button for quick add-to-cart.

### Cart & Checkout
- **Floating Cart:** On mobile, a persistent bottom bar showing item count and total price in Primary Orange.
- **Order Tracker:** A vertical stepper for the restaurant/driver management view, using high-contrast icons to show progress (Order Received -> Preparing -> Out for Delivery).

### Smart Suggestions
- **"Cravings" Chips:** Small, pill-shaped category filters (e.g., "Pizza", "Healthy", "Under 20 mins") that use the Primary color for the active state and a light grey for the inactive state.
# BoiGhor — Premium E-Commerce Bookstore

**BoiGhor** is a modern, responsive, and aesthetically outstanding E-Commerce storefront specializing in curated literature, novels, and design journals. Built as a single-page application (SPA), this project was developed for the **CodesRaft Frontend Developer Internship Assessment**.

Rather than utilizing a generic template or a predefined component library, BoiGhor adopts a bespoke, premium editorial design language. It combines literary serif typography with high-contrast layouts, smooth transitions, and a custom warm paper color palette.

---

## Live Demo & Repository

- **Live Deployment (Netlify)**: https://boi-ghor-3.netlify.app
---

## Tech Stack & Libraries

- **Core Framework**: React.js (Vite)
- **Routing**: React Router (v6 Client-Side Routing)
- **Styling**: Tailwind CSS (v4)
- **Carousels/Sliders**: Swiper.js (Customized transition and paginations)
- **Icons**: React Icons
- **State Management**: React Context API (with LocalStorage persistence for Cart)

> [!IMPORTANT]
> **Component Library Constraint**: No component libraries (such as Material UI, Bootstrap, Ant Design, or ShadCN) were used. All accordion components, buttons, navigation menus, product grids, forms, and custom modal layouts were written entirely from scratch in clean React code.

---

## Design Philosophy & Color Palette

BoiGhor is structured around an editorial, high-end magazine aesthetic:

- **Typography**:
  - `Lora`: A literary, sophisticated serif font used for heading titles, quotes, and primary banners.
  - `Plus Jakarta Sans`: A geometric, highly readable sans-serif font for body text, tags, forms, and UI controls.
- **Color System** (Configured as CSS custom properties in Tailwind `@theme`):
  - `bone` (`#fbf9f4`): Warm, eye-friendly paper cream background.
  - `ink` (`#1e1b18`): Deep charcoal for text, dark backgrounds, and strong boundaries.
  - `volt` (`#c85a32`): Terracotta rust color utilized for accents, links, hover states, and primary CTAs.
  - `sand` (`#efebe0`): Soft grey-sand border and card background separator.

---

## Project Directory Structure

```
bookStore/
├── public/
│   ├── favicon.svg      # Custom favicon
│   ├── icons.svg        # Asset icons
│   └── _redirects       # Netlify React Router redirects configuration
├── src/
│   ├── assets/          # Curated local assets
│   ├── components/      # Reusable components
│   │   ├── layout/      # Navbar, Footer
│   │   └── sections/    # Modular Landing Page sections (Hero, FAQ, etc.)
│   ├── context/         # React Context for shopping cart state
│   ├── data/            # Local books catalog database (JSON-like schema)
│   ├── pages/           # High-level route views (Home, Cart, Checkout, etc.)
│   ├── App.jsx          # Route definitions & base layout wrapper
│   ├── index.css        # Tailwind directives, theme definitions & animations
│   └── main.jsx         # App mounting entry point
├── package.json
└── vite.config.js
```

---

## Features Implemented

### 1. Landing Page (`/`)

- **Hero Slider (Swiper.js)**: Features automated slide rotation (4.5s autoplay, pause-on-hover) and smooth cross-fades. Utilizes customized linear bar paginations instead of default dots. Offers immediate cart additions with single-button click transitions.
- **Featured Categories**: Dynamic filtering links navigating to individual collections.
- **Featured Products & Best Sellers**: Display cards with subtle hover zoom effects, responsive pricing tags, and structured typography.
- **Special Offers Section**: A full-width editorial banner detailing reader events, newsletter options, and discount triggers.
- **Philosophy ("Why Choose Us")**: Detailed layout describing sustainable packaging, custom binding, and literary curation.
- **Customer Reviews**: Testimonial slides sharing reader evaluations.
- **Accordion FAQs**: Native React-state accordion for answering queries (shipping, returns, book formats) without external layout libraries.
- **Newsletter Subscription**: Form layout supporting subscription feedback indicators.

### 2. Product Details Page (`/product/:id`)

- **Interactive Gallery**: Selectable thumbnails updating the primary book preview image instantly.
- **Product Details & Metadata**: Explicit display of author, formatting, publisher, language, and paper composition specs.
- **Quantity Adjuster & Add-to-Cart**: Real-time quantity selectors (+/-) block-synced with the Context API cart state, complete with click-to-success indicators.
- **Related Products**: Auto-filtered grid showcasing other books sharing the same category.

### 3. Shopping Cart (`/cart`)

- **Interactive Cart List**: Visual display of items, prices, quantities, and individual subtotals.
- **Quantity Modifiers**: Real-time adjustment of quantities directly inside the cart, recalculating totals instantly.
- **Cart Deletion**: Clean removal options for individual volumes.
- **Subtotal & Total Display**: Formatted real-time pricing sum.
- **Empty State**: Minimalist page layout redirecting readers back to book catalog when the cart has zero items.

### 4. Checkout Page (`/checkout`)

- **Customer Details Form**: Interactive inputs for Name, Email, and Phone.
- **Shipping Address Form**: Fields for Street Address, City, Postal Code, and Country.
- **Payment Method Selector**: Custom-styled radio cards for Card Payments, Cash on Delivery, and local Mobile Financial Services (bKash/Nagad).
- **Sticky Order Summary**: Keeps track of items and dynamic totals while checking out.
- **Order Placement**: Simulates order processing. On submit, it automatically clears the shopping cart and presents a beautifully rendered Order Confirmation page.

---

## Setup & Run Instructions

To run this project locally, ensure you have **Node.js** installed on your system.

### 1. Install dependencies

It is highly recommended to use **pnpm** (as defined by the lockfile):

```bash
pnpm install
```

### 2. Run the development server

Start Vite locally:

```bash
pnpm dev
```

The application will run on `http://localhost:5173/`.

### 3. Create a production build

Verify compilation and compile assets:

```bash
pnpm build
```

---

## Netlify Deployment Guidelines

To host this client-side React Router application on Netlify:

1. Connect your GitHub repository to **Netlify**.
2. Set the following build options:
   - **Build Command**: `pnpm build`
   - **Publish Directory**: `dist`
3. **Redirects Resolution**: Since this project utilizes client-side routing, standard refreshes on sub-routes (e.g., `/cart`) can trigger Netlify 404s. A custom [`_redirects`](file:///d:/job%20task/bookStore/public/_redirects) file containing `/* /index.html 200` has been placed in the `public/` directory to instruct Netlify to delegate all routes to the central `index.html` file.

# Aitron Next.js Website

This is a complete conversion of the Aitron HTML/CSS website to a modern Next.js application with TypeScript and Tailwind CSS.

## Features

- ✅ Full Next.js 15 with TypeScript
- ✅ Tailwind CSS with custom theme
- ✅ All animations with GSAP and ScrollTrigger
- ✅ Three.js 3D background
- ✅ Lenis smooth scrolling
- ✅ Sector video cards with autoplay/lazy-loading
- ✅ Responsive design
- ✅ All original content preserved

## Project Structure

```
aitron-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx      # Header navigation
│       ├── HeroSection.tsx     # Hero section
│       ├── SectorsSection.tsx  # Sectors grid with videos
│       ├── MethodologySection.tsx # Methodology cards
│       ├── ResourcesSection.tsx   # Resources section
│       ├── Footer.tsx          # Footer section
│       ├── ThreeBackground.tsx # Three.js background
│       └── AnimationsManager.tsx # GSAP animations & video logic
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd aitron-nextjs
npm install
# or
yarn install
# or
pnpm install
```

### 2. Add Video Files

Create the following directory structure and add your video files:

```
public/
├── assets/
│   └── videos/
│       ├── water.mp4
│       ├── power.mp4
│       ├── infrastructure.mp4
│       ├── hotels&hospitals.mp4
│       ├── industries.mp4
│       └── buildings.mp4
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your website.

## Key Differences from HTML Version

1. **Component-Based Architecture**: Sections split into reusable React components
2. **CSS Modules & Global Styles**: All styles in `globals.css` and component classes
3. **Client-Side Rendering**: Components marked with `"use client"` for interactive features
4. **Dynamic Data**: Sectors, methodologies, and resources use arrays for easy content management
5. **Next.js Optimizations**: Automatic code splitting, image optimization, and best practices

## Customization

### Update Sector Videos
Edit `src/components/SectorsSection.tsx` and modify the `sectors` array with your video paths and descriptions.

### Update Colors
Edit `tailwind.config.ts` to modify the custom color palette:
```typescript
colors: {
  aitron_accent: "#155577",
  aitron_secondary: "#FF6F00",
  // ... other colors
}
```

### Update Content
- **Hero Section**: `src/components/HeroSection.tsx`
- **Methodology**: `src/components/MethodologySection.tsx`
- **Resources**: `src/components/ResourcesSection.tsx`
- **Footer**: `src/components/Footer.tsx`

## Build for Production

```bash
npm run build
npm run start
```

## Performance Optimizations

- Video lazy-loading with IntersectionObserver
- GSAP animations with ScrollTrigger for efficient scrolling
- Three.js background renderer with proper cleanup
- Tailwind CSS purging unused styles

## Deployment

This project is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Any Node.js hosting

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to connect your GitHub repository and deploy.

## Notes

- All animations and interactions from the original HTML version are preserved
- Video files must be placed in `public/assets/videos/` directory
- The website is fully responsive and mobile-friendly
- Three.js background adapts to window resizing

## Dependencies

- **Next.js 15**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP 3.12.2**: Animation library
- **Three.js**: 3D graphics
- **Lenis 1.0.42**: Smooth scrolling

---

**Status**: ✅ Complete and ready for development

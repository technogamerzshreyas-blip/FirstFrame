# FIRSTFRAME — AI UGC & Creative Partner Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/firstframe-portfolio)

A premium, editorial AI UGC & Performance Creative agency website built with Next.js 14 App Router, TypeScript, Framer Motion, and Tailwind CSS. Fully structured and optimized for seamless deployment on **Vercel**.

---

## 🚀 Quick Vercel Deployment Guide

### Option 1: Deploying via Vercel Dashboard (Recommended)

1. Push this codebase to your GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. Import your repository.
4. Vercel will automatically detect **Next.js** framework preset settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **Deploy**.

---

### Option 2: Deploying via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Log in to your Vercel account
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 📁 Project Structure

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Global design system & tailwind base
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Homepage combining layout sections
│   ├── robots.ts            # Dynamic SEO robots.txt generator
│   └── sitemap.ts           # Dynamic sitemap generator
├── components/
│   ├── About.tsx            # Founder & Creative Director bio section
│   ├── Benefits.tsx         # Key client advantages section
│   ├── Contact.tsx          # Contact & project inquiry form
│   ├── CTA.tsx              # Call-to-action banner
│   ├── CustomCursor.tsx     # Smooth interactive cursor component
│   ├── Footer.tsx           # Site footer & social links
│   ├── Header.tsx           # Editorial navigation bar
│   ├── Hero.tsx             # Main hero section with headline
│   ├── Portfolio.tsx        # Work showcase grid with filters
│   ├── Process.tsx          # 4-step workflow showcase
│   └── Services.tsx         # Offered creative services
├── public/
│   └── images/              # High-res static images & mockups
├── next.config.mjs          # Next.js optimization configuration
├── tailwind.config.js       # Editorial design system token theme
├── tsconfig.json            # TypeScript configuration with @/* path aliases
├── vercel.json              # Vercel deployment headers & settings
└── .vercelignore            # Excluded build artifacts for Vercel uploads
```

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production locally
npm run build

# 4. Start production server locally
npm run start
```

---

## ⚡ Tech Stack & Performance Features

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Editorial Typography tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: `next/image` with WebP/AVIF format auto-conversion
- **SEO & Security**: Pre-configured Security Headers in `vercel.json`, OpenGraph metadata, `robots.ts`, and `sitemap.ts`

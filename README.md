# 🌐 Ibnu Ubaidillah — Personal Portfolio

A modern, responsive, and minimalist personal portfolio website built with **Next.js 16**, **Tailwind CSS 4**, and **Framer Motion**. Featuring a glassmorphism dark theme with violet/indigo accents.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

---

## ✨ Features

- **Glassmorphism Dark Theme** — Semi-transparent cards with backdrop blur and violet/indigo gradient accents
- **Animated Hero Section** — Gradient mesh blobs, glowing profile ring, and smooth entrance animations
- **Skills & Tools Grid** — 14 technologies displayed with original logos in a responsive grid
- **Project Showcase** — Interactive cards with click-to-view detail popup and direct repository links
- **Certificates Gallery** — Certificate cards with image thumbnails and detail modal on click
- **Fully Responsive** — Mobile-first design optimized for all screen sizes
- **SEO Optimized** — Next.js Metadata API, Open Graph tags, Twitter Cards, semantic HTML5
- **Smooth Animations** — Powered by Framer Motion with staggered reveals and hover effects

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS 4 |
| **Language** | TypeScript |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage assembling all sections
│   ├── globals.css         # Global styles, glassmorphism, animations
│   └── certificates/
│       └── page.tsx        # All certificates page
├── components/
│   ├── Hero.tsx            # Hero section with profile & intro
│   ├── Skills.tsx          # Skills & tools grid
│   ├── Projects.tsx        # Project cards with detail modal
│   ├── Certificates.tsx    # Certificate cards with detail modal
│   └── Footer.tsx          # Footer with social links
└── lib/
    ├── utils.ts            # Tailwind class merge utility
    └── certificates-data.ts # Shared certificates data
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ibnuubaidillah1009/portofolio.git
cd portofolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🌍 Deployment

This project is configured for **Vercel** deployment. Simply push to your GitHub repository and connect it to Vercel for automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📬 Contact

- **GitHub** — [@Ibnuubaidillah1009](https://github.com/Ibnuubaidillah1009)
- **Instagram** — [@bayyyy_6](https://instagram.com/bayyyy_6)
- **WhatsApp** — [Chat](https://wa.link/cffu6f)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by **Ibnu Ubaidillah** — Software Engineering Student at SMKN 1 Bangil

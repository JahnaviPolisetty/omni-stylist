# OmniStylist 👗✨

OmniStylist is an **AI-powered omnichannel retail and fashion assistant** designed to bridge the gap between online inspiration and physical retail experiences. Built as a high-fidelity prototype for a student hackathon, OmniStylist provides shoppers with curated, context-aware styling advice, wardrobe recommendations, and instant in-store fitting reservations.

---

## 🚀 Key Features

- **💬 Interactive AI Chat Stylist**: A conversational experience (styled like a sleek messaging app) that analyzes user style preferences, budget, and occasions to recommend custom outfits.
- **🛍️ Curated Recommendations**: Personalized digital lookbooks showcasing coordinate outfits (e.g., Wedding Collection, Trending, Best Sellers) with direct, interactive detail pages.
- **📍 Smart In-Store Reservations**: Instantly reserve selected outfits at the nearest retail outlet for physical fitting sessions.
- **🕒 Real-time Fitting & Order Tracking**: Live visual timeline tracking the status of retail requests (from reservation confirmation to fitting room preparation).
- **🎨 Premium Responsive UI**: An immersive, high-end mobile-first design leveraging glassmorphism, tailored animations, and a rich warm-amber palette (`#f97316`) for a luxurious fashion aesthetic.

---

## 🛠️ Technology Stack

OmniStylist is built using a modern, fast, and modular frontend stack:

- **Core**: React 18 & TypeScript
- **Bundler & Tooling**: Vite & PostCSS
- **Styling**: Tailwind CSS & Framer Motion (for fluid micro-interactions and transitions)
- **UI Components**: shadcn/ui (primitives built on Radix UI)
- **State Management**: React Router 6 & TanStack Query (React Query)
- **Icons**: Lucide React

---

## 💻 Local Development

Follow these simple steps to run the OmniStylist prototype locally on your system:

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** (or **Bun**) installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JahnaviPolisetty/omni-stylist.git
   cd omni-stylist
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Navigate to the local preview URL provided in your terminal (typically `http://localhost:8080` or `http://localhost:5173`).

---

## 📐 Architecture & Prototype Structure

The project has been structured cleanly into modular components:

- `/src/pages`: Individual screen layouts (Home, Chat, Recommendations, ProductDetails, Reserve, Confirmation, Tracking)
- `/src/components/ui`: Custom reusable primitives (Buttons, Cards, Dialogs, Drawer, Toasts, custom `PageContainer` wrapper)
- `/src/hooks`: Custom React hooks for interactive notifications and viewport diagnostics
- `/public`: Static assets, vector icons (`favicon.svg`), and robots.txt

---

## 🏆 Hackathon Context

This project was built by a student team during a fast-paced retail tech hackathon. It represents a functional design prototype demonstrating how modern AI and frontend technologies can transform traditional brick-and-mortar retail workflows.

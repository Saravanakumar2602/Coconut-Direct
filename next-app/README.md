# Coconut Direct 🥥

**Coconut Direct** is a premier digital marketplace designed specifically for the coconut trade in Tamil Nadu. It completely bypasses traditional middlemen to directly connect verified coconut farmers with wholesale buyers, retailers, and end-consumers.

By ensuring absolute transparency in market prices and directly establishing a streamlined trade pipeline, both farmers and buyers receive the best fair-market value. 

![Coconut Direct Marketplace](https://images.unsplash.com/photo-1581453883350-288b2c19bea8?q=80&w=2000&auto=format&fit=crop)

---

## 🌟 Key Features

- **Direct Farmer-to-Buyer Connections:** Eliminates middlemen for higher farmer profits and lower buyer costs.
- **Live Market Prices:** See daily updated wholesale prices for coconuts per tonne across different Tamil Nadu districts (Pollachi, Thanjavur, Tiruppur, Kanyakumari, Coimbatore).
- **Interactive Marketplace:** Easily filter available coconut lots by district and variety (e.g., Hybrid High Yield, Tall Variety Desi, Tender Coconuts).
- **Role-Based Dashboards:**
  - **Farmer Dashboard:** Manage product listings, track estimated revenue, and view active order requests.
  - **Buyer Dashboard:** Track purchase history, total amount spent, and active orders.
- **Secure Ecosystem:** Ensures trades are backed by verified profiles and secure escrow systems (mocked/planned).

## 🚀 Technology Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components:** [Framer Motion](https://www.framer.com/motion/) (Animations) & [Lucide React](https://lucide.dev/) (Icons)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) with LocalStorage Persistence
- **Language:** TypeScript

## 📦 Getting Started

First, ensure you have **Node.js 18+** installed. Let's get the application running on your local machine.

### 1. Install Dependencies
Run the following command to securely install all the required packages:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Open the App in your Browser
Navigate your browser to [http://localhost:3000](http://localhost:3000).

---

## 🧭 Project Navigation
- **`/` (Home):** The main landing page with hero, statistics, feature highlights, and today's market rates preview.
- **`/products` (Marketplace):** The main board where buyers can see all available coconut lots from farmers. 
- **`/pricing` (Live Prices):** A dedicated board showing market trends, percentage changes, and typical volumes.
- **`/login` & `/register`:** Auth pages with role-selection (Farmer or Buyer).
- **`/dashboard/farmer`:** The administrative backend for farmers to list products.
- **`/dashboard/buyer`:** The administrative backend for buyers to track their logistics and spending.

## 💾 State Management Note
Currently, backend data (Users, Products, Orders) is maintained seamlessly through a simulated in-browser database using **Zustand `persist` middleware**. This means that no complex database setup (Prisma/Postgres/MongoDB) is required to test the entire application flow locally or to deploy it securely.

*If you need to instantly reset the dummy data to default, clear your browser's Local Storage for `localhost:3000` (`F12 -> Application -> Local Storage -> Clear`).*

## 🌐 Deployment
This unified, single-folder Next.js repository is specifically configured to be seamlessly deployed onto **Vercel**. 

1. Push this repository to GitHub.
2. Log into [Vercel](https://vercel.com).
3. Click "Import Project" and select the GitHub repository.
4. Leave all build settings as default (`npm run build`).
5. Click **Deploy**.

---
*Built with care for the hardworking coconut farmers of Tamil Nadu.*

# ⚡ FlashKart — React.js eCommerce Frontend

> A fast, modern eCommerce storefront built with **React.js**, connected to the FlashKart backend API. Features product browsing, cart management, user authentication, and order tracking.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- 🏠 **Home Page** — Hero banner, featured products, categories
- 🛍️ **Product Listing** — Search, filter by category, sort by price
- 📄 **Product Detail** — Images, description, reviews, add to cart
- 🛒 **Shopping Cart** — Real-time cart with quantity controls
- 🔐 **Auth Pages** — Login & Register with JWT token storage
- 👤 **User Profile** — Edit account info, view order history
- 📦 **Order Tracking** — View placed orders and their status
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

---

## 🧰 Tech Stack

| Tech | Purpose |
|------|---------|
| React.js 18 | UI framework |
| Vite | Build tool & dev server |
| React Router DOM v6 | Client-side routing |
| Redux Toolkit | Global state (cart, auth) |
| Axios | API calls to backend |
| Tailwind CSS | Styling |
| React Toastify | Notifications |
| React Icons | Icon library |

---

## 📁 Project Structure

```
flashkart-frontend/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── api/
│   │   └── axios.js            # Axios instance with base URL
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   └── Orders.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │   └── authSlice.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- FlashKart backend running at `http://localhost:5000`

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/flashkart-frontend.git
cd flashkart-frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4️⃣ Start the Dev Server

```bash
npm run dev
```

App running at: `http://localhost:5173`

---

## 🔗 Backend Connection

This frontend connects to the **FlashKart Backend API**.

> 👉 Backend repo: [flashkart-backend](https://github.com/your-username/flashkart-backend)

Make sure the backend is running before starting the frontend.

---

## 📜 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 🗂️ Pages & Routes

| Route | Page | Auth Required |
|-------|------|--------------|
| `/` | Home | ❌ |
| `/products` | Product Listing | ❌ |
| `/products/:id` | Product Detail | ❌ |
| `/cart` | Shopping Cart | ✅ |
| `/checkout` | Checkout | ✅ |
| `/login` | Login | ❌ |
| `/register` | Register | ❌ |
| `/profile` | User Profile | ✅ |
| `/orders` | Order History | ✅ |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
```

1. Push to GitHub
2. Import repo on [Vercel](https://vercel.com)
3. Set environment variable: `VITE_API_BASE_URL=https://your-backend-url.com/api`
4. Deploy ✅

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

Licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

> ⚡ FlashKart Frontend — Shop fast, shop smart.

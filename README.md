# ⚡ FlashKart — eCommerce Backend API

> A robust REST API backend for the **FlashKart** eCommerce platform, built with **Node.js**, **Express.js**, and designed to power a React.js storefront with full product, cart, order, and user management.

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure register, login, and token-based auth
- 🛍️ **Product Management** — CRUD for products with categories, images & stock
- 🛒 **Cart API** — Add, update, remove items per user session
- 📦 **Order Processing** — Place orders, track status, order history
- 👤 **User Profiles** — Manage account details and addresses
- 🔧 **Admin Routes** — Protected routes for managing the entire store
- 📄 **Pagination & Filtering** — Search, sort, and filter products efficiently
- 🌐 **CORS Ready** — Pre-configured for React.js frontend integration

---

## 🧰 Tech Stack

| Tech | Purpose |
|------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB + Mongoose | Database & ODM |
| JSON Web Tokens (JWT) | Authentication |
| bcryptjs | Password hashing |
| Multer | File/image uploads |
| dotenv | Environment config |
| express-validator | Input validation |
| Morgan | HTTP request logging |

---

## 📁 Project Structure

```
flashkart-backend/
│
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js   # JWT verification
│   │   ├── admin.middleware.js  # Admin role check
│   │   └── error.middleware.js  # Global error handler
│   │
│   ├── models/
│   │   ├── User.model.js
│   │   ├── Product.model.js
│   │   ├── Cart.model.js
│   │   └── Order.model.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   ├── cart.routes.js
│   │   ├── order.routes.js
│   │   └── user.routes.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── apiResponse.js
│   │
│   └── app.js                  # Express app setup
│
├── uploads/                    # Product image storage
├── .env.example
├── .gitignore
├── package.json
└── server.js                   # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- npm or yarn

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/flashkart-backend.git
cd flashkart-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
PORT=5000
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/flashkart

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173
```

### 4️⃣ Run the Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

API running at: `http://localhost:5000/api`

---

## 📡 API Reference

### 🔐 Auth

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | ❌ |
| POST | `/api/auth/login` | Login, returns JWT | ❌ |
| GET | `/api/auth/me` | Get current user | ✅ |
| POST | `/api/auth/logout` | Logout user | ✅ |

---

### 🛍️ Products

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | Get all products (paginated) | ❌ |
| GET | `/api/products/:id` | Get single product | ❌ |
| GET | `/api/products/search?q=` | Search products | ❌ |
| POST | `/api/products` | Create product | ✅ Admin |
| PUT | `/api/products/:id` | Update product | ✅ Admin |
| DELETE | `/api/products/:id` | Delete product | ✅ Admin |

---

### 🛒 Cart

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/cart` | Get user's cart | ✅ |
| POST | `/api/cart/add` | Add item to cart | ✅ |
| PUT | `/api/cart/update/:itemId` | Update item quantity | ✅ |
| DELETE | `/api/cart/remove/:itemId` | Remove item from cart | ✅ |
| DELETE | `/api/cart/clear` | Clear entire cart | ✅ |

---

### 📦 Orders

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/orders` | Place a new order | ✅ |
| GET | `/api/orders/my` | Get logged-in user's orders | ✅ |
| GET | `/api/orders/:id` | Get order by ID | ✅ |
| GET | `/api/orders` | Get all orders | ✅ Admin |
| PUT | `/api/orders/:id/status` | Update order status | ✅ Admin |

---

### 👤 Users

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/users/profile` | Get user profile | ✅ |
| PUT | `/api/users/profile` | Update profile | ✅ |
| PUT | `/api/users/change-password` | Change password | ✅ |
| GET | `/api/users` | Get all users | ✅ Admin |
| DELETE | `/api/users/:id` | Delete user | ✅ Admin |

---

## 🔒 Authentication

All protected routes require a `Bearer` token in the `Authorization` header:

```
Authorization: Bearer <your_jwt_token>
```

Example with Axios in your React frontend:

```js
axios.get('/api/cart', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});
```

---

## 🌐 CORS Configuration

The backend is pre-configured to accept requests from your React frontend. Update `CLIENT_URL` in `.env` to match your frontend URL:

```env
CLIENT_URL=http://localhost:5173   # Vite dev server
# or
CLIENT_URL=https://flashkart.vercel.app  # Production
```

---

## 📦 Sample API Response

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": {
    "products": [...],
    "total": 48,
    "page": 1,
    "pages": 5
  }
}
```

---

## 🧪 Testing the API

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) (VS Code extension).

---

## 🚢 Deployment

### Deploy to Render / Railway

1. Push your code to GitHub
2. Connect the repo to [Render](https://render.com) or [Railway](https://railway.app)
3. Set all environment variables in the dashboard
4. Set start command: `node server.js`

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

---

> ⚡ Built with passion for FlashKart — fast, reliable, scalable.

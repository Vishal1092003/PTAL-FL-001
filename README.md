# PTAL-FL-001

This repository contains two main parts:

1. **Frontend** (React + Vite)
2. **Backend** (Node.js + Express + MongoDB)

---

## 📂 Repository Structure

```
PTAL-FL-001/               # root
├── backend/               # server-side code
│   ├── controllers/       # (optional) route handlers
│   ├── database/          # MongoDB connection logic
│   ├── middlewares/       # custom Express middleware
│   ├── routes/            # API route definitions
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── OtpAndSendMail.js
│   │   └── ResetPassword.js
│   ├── storageSchema/     # Mongoose schemas (e.g. user.js)
│   ├── .env               # environment variables
│   ├── index.js           # main Express server
│   └── package.json       # backend dependencies & scripts
│
└── src/                   # frontend React app
    ├── contexts/         # React Contexts
    ├── footerComponents/ # Footer UI components
    ├── HomePage/         # Homepage components
    ├── Navbar/           # SignIn, SignUp, SetPassword, etc.
    ├── NavbarPtal/       # PTAL-specific nav pages
    ├── ShopByMetals/     # category UI components
    ├── ShopByUtility/    # utility category components
    ├── App.jsx           # main router
    ├── main.jsx          # Vite entry
    ├── index.css         # global styles
    ├── package.json      # frontend dependencies & scripts
    └── ...               # other assets & JSON data
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js v14+
* npm or yarn
* MongoDB (local or Atlas)

### 1. Install Backend

```bash
cd backend
cp .env.example .env   # add MONGODB_URI, EMAIL_USER, EMAIL_PASS
npm install
npm start               # or `node index.js`
```

The API is available at `http://localhost:8080/api`.

### 2. Install Frontend

```bash
cd src
npm install
npm run dev            # Vite on http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Path                     | Description                 |
| ------ | ------------------------ | --------------------------- |
| POST   | `/api/login`             | Authenticate user           |
| POST   | `/api/signup`            | Create new account          |
| POST   | `/api/request-reset-otp` | Generate & email reset OTP  |
| POST   | `/api/setpassword`       | Verify OTP & reset password |
| GET    | `/api/health`            | Health check                |

---

## 🛠️ Scripts

### Backend (`backend/`)

* `node index.js` – run server


### Frontend (`src/`)

* `npm run dev` – start dev server
* `npm run build` – build for production
* `npm run preview` – preview production build

---

## 🤝 Contributing

Feel free to open issues or PRs.

---

© 2025 PTAL-FL-001

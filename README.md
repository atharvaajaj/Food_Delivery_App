# 🍔 Food Delivery App

A full-stack MERN (MongoDB, Express, React, Node.js) based Food Delivery Application with user authentication and dynamic routing.

---

## 📁 Project Structure

```
Food_Delivery_App/
│
├── backend/        # Express.js + MongoDB backend
├── public/         # Frontend public assets
├── src/            # React frontend source code
└── ...             # Other frontend config files
```

---

## ⚙️ Frontend (`/src`)

The frontend is built using **React** with **Vite** for faster development and bundling.

### Features:
- 🧭 React Router for navigation
- 🧾 Forms for login/registration
- 🛠 API calls to backend using fetch/axios
- 🎨 Modern UI styling (you can mention the library if any, like Tailwind/Bootstrap)

### Running Frontend:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🔧 Backend (`/backend`)

Built using **Node.js**, **Express.js**, and **MongoDB**, the backend handles user registration, login, JWT-based authentication, and protected routes.

### Features:
- ✅ User Registration/Login with hashed passwords
- 🔐 JWT Authentication
- 🛡 Protected Routes
- 🌐 MongoDB Atlas integration

### Running Backend:

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## 📦 Technologies Used

- **Frontend**: React, Vite, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, bcrypt, dotenv

---

## 📝 Notes

- Don't forget to add your `.env` file in `/backend` before starting the server.
- `node_modules/` and `.env` are included in `.gitignore`.
- Run `npm install` in both root (frontend) and `/backend` directories after cloning.

---

## 👤 Author

**Atharva Joshi**  
🔗 [GitHub Profile](https://github.com/atharvaajaj)

---

## 🚀 Future Features (Optional)

- ✅ Order placement and tracking  
- 🛒 Cart functionality  
- 📦 Admin panel for managing orders and users  

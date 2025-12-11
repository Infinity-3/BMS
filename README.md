<<<<<<< HEAD
# 🚲 Bike Management System (BMS)

A modern React-based Bike Management System that allows users to browse
bikes by company, view details, manage user login/signup, and interact
with a smooth UI built using TailwindCSS & React.

## 🌟 Features

### 🔐 User Authentication

-   Login & Signup via API (JSON Server)
-   Validates credentials securely
-   Session stored using localStorage
-   Logout included

### 🚲 Bike Listing & Filtering

-   Dynamic bike cards
-   Filter bikes by company
-   Shows "Soon it will be updated" when no bikes available
-   Reusable UI components

### ⚡ Tech Stack

-   React JS
-   Axios
-   React Router DOM
-   TailwindCSS
-   JSON Server

## 📁 Folder Structure

    BMS/
    │── public/
    │── src/
    │   ├── Comp/
    │   │   ├── Bikes/
    │   │   │   ├── Bcard.jsx
    │   │   │   ├── Bikes.jsx
    │   │   ├── Auth/
    │   │   │   ├── Login.jsx
    │   │   │   ├── Signup.jsx
    │   ├── App.js
    │   ├── index.js
    │── db.json
    └── package.json

## 🔧 How to Run

### 1️⃣ Install Dependencies

    npm install

### 2️⃣ Start React App

    npm start

### 3️⃣ Start JSON Server

    json-server --watch db.json --port 3000

## 🔌 API Endpoints

### Login

    POST /login

### Fetch Bikes

    GET /compdata

## 🧠 Filtering Logic

``` js
setSelectedCompany("Honda");
const filtered = bikes.filter(b => b.company === selectedCompany);
```

## 🔒 Logout

``` js
localStorage.removeItem("user");
navigate("/login");
```

## 🎨 UI

-   Responsive layout
-   Card-based design
-   Light theme

## 🚀 Future Improvements

-   Admin panel
-   Search + sort
-   Real backend
-   Image upload

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
"# BMS" 
<<<<<<< HEAD

=======
>>>>>>> 8746ec86588a0c0c04669cf2a8d446d8769825e8

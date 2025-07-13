# 🛍️ ShoppyGlobe E-commerce Application
 A basic e-commerce application built with **React**, **Redux**, and **React Router**. Users can browse products, view details, add them to a shopping cart, and  manage items easily. This project demonstrates essential React concepts like props, hooks, state management, routing, and performance optimization.It provides   an intuitive UI with functionalities such as searching for products by title, viewing product details, and managing the shopping cart. 
---
## 📌 GitHub Repository
   [🔗 ShoppyGlobe GitHub](https://github.com/RAVI8054/ShoppyGlobe-E-commerce-Fronted)

## 🌐 Live Demo
   [🔗 View Deployed App](link) 
---
## Features
  - 🛒 Browse Products – View a list of products fetched from an external API (https://dummyjson.com/products).
  - 🔍 Search and Filter – Search for products by title and filter them by category (if implemented).
  - 📦 Product Details Page – Click on a product to view detailed information on a separate route.
  - 🧺 Add to Cart – Add products to the shopping cart from the product list or detail view. 
  - 🔄 Quantity Controls – Increase or decrease the quantity of items in the cart.
  - 💰 Dynamic Total Price – Automatically updates the total cost as you add or modify cart items.
  - ❌ Remove from Cart – Remove individual items from the cart.
  - 🔗 React Router Navigation – Seamless routing between Home, Product Detail, Cart, and Checkout pages.
  - 📦 Redux State Management – Cart operations and product data managed using Redux Toolkit.
  - ⚡ Custom Hooks – Reusable hook (useFetchProducts) for fetching data with loading and error handling.
  - 🧱 Component Reusability – All UI elements built with reusable functional components using props.
  - ⚙️ Performance Optimized – Code splitting with React.lazy() and Suspense.
  -  📱 Responsive Design – Fully responsive layout works across mobile, tablet, and desktop screens.
---
## 📁 Project Structure
```
ShoppyGlobe/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductItem.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── Cart.jsx
│ │ ├── CartItem.jsx
│ │ ├── Help.jsx
│ │ ├── SignIn.jsx
│ │ ├── Contact.jsx
│ │ └── Error.jsx
│ │
│ ├── utils/
│ │ ├── appstore.js
│ │ ├── useProducts.js
│ │ └── cartSlice.js
│ │
│ ├── App.jsx
│ ├── index.js
│ └── index.css
│
├── package.json
└── README.md
```



# ShopMart E-Commerce

![ShopMart](https://img.shields.io/badge/ShopMart-E--Commerce-amber)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![Redux](https://img.shields.io/badge/Redux-9.2.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-teal)
![License](https://img.shields.io/badge/License-MIT-green)

A modern e-commerce application built with React, Redux, and Tailwind CSS. This application allows users to browse products, filter by category, add items to cart, and perform full CRUD operations on products.

![ShopMart Preview](/src/assets/Screenshot%202025-04-10%20150413.png)

## 🚀 Features

- **Product Management:**
  - View all products with search and category filtering
  - Add new products to the store
  - Edit existing product details
  - Delete products from the inventory

- **Shopping Cart:**
  - Add products to cart with quantity control
  - Update item quantities in the cart
  - Remove items from cart
  - View order summary with subtotal, tax, and total

- **User Interface:**
  - Modern, responsive design with Tailwind CSS
  - Attractive product cards with hover effects
  - Clean forms for product management
  - Loading indicators for async operations

## 🛠️ Technologies Used

- **Frontend:**
  - React 19.0.0
  - React Router DOM 7.5.0
  - Redux Toolkit 2.6.1
  - React Redux 9.2.0
  - Tailwind CSS 3.4.17
  - Axios 1.8.4

- **Development:**
  - Vite 6.2.0
  - ESLint 9.21.0
  - PostCSS/Autoprefixer

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-e-commerce-with-redux.git
   cd simple-e-commerce-with-redux
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
simple-e-commerce-with-redux/
├── public/            # Static files
├── src/
│   ├── app/           # Redux store configuration
│   ├── assets/        # Images and static assets
│   ├── components/    # Reusable UI components
│   ├── features/      # Redux slices and feature logic
│   ├── pages/         # Application page components
│   ├── App.jsx        # Main application component
│   ├── index.css      # Global styles
│   └── main.jsx       # Application entry point
├── .gitignore         # Git ignore file
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## 🔄 API Integration

This application uses the [Fake Store API](https://fakestoreapi.com/) for product data. All CRUD operations are performed against this API.

## 🎯 Usage

- **Browse Products:** Visit the home page to view all available products
- **Filter Products:** Use the search bar or category dropdown to filter products
- **Add to Cart:** Click the "Add to Cart" button on any product card
- **View Cart:** Click the cart icon in the navigation bar
- **Manage Products:** Add new products with the "Add Product" link or edit/delete existing ones


## 🚀 Deployment

This project can be deployed to various platforms:

1. Build the production version:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy to your preferred hosting platform (Vercel, Netlify, GitHub Pages, etc.)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [nour.mohamed.elagwany@gmail.com](mailto:nour.mohamed.elagwany@gmail.com)

Project Link: [GitHub Link](https://github.com/nourmohamed45/simple-e-commerce-with-redux)

---

Made with ❤️ by [Nour Mohamed]

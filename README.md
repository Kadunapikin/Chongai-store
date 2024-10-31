# E-Commerce App

Welcome to the **E-Commerce App**! This application is a full-stack e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js) with Vite and Tailwind CSS. Users can browse different wears, add products to their cart, manage orders, and select from multiple payment options.

## Features

- **Product Selection**: Browse and select from a variety of wears.
- **Add to Cart**: Easily add products to the shopping cart.
- **Order Management**: View and manage orders, including the ability to increase quantity or delete items.
- **Payment Options**: Choose between Stripe for online payment or Pay on Delivery.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.

## Tech Stack

- **Frontend**: React (with Vite), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Integration**: Stripe

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kadunapikin/Chongai-store
   cd ecommerce-app

2. **Install dependencies for both frontend and backend**:
    # Navigate to the frontend directory
    cd frontend
    npm install

    # Navigate to the backend directory
    cd ../backend
    npm install

3. **Set up environment variables**:
    Create a .env file in the backend directory with the following values:
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    STRIPE_SECRET_KEY=your_stripe_secret_key

4. **Start the development server**:
    .Backend:
    cd backend
    npm run dev

    .Frontend:
    cd frontend

5. **Access the app**:

Open your browser and go to http://localhost:5173 to view the frontend, and 
http://localhost:5000 for the backend server.

6. **Usage**

    **Adding Products to Cart**:
    1. Browse through the available wears on the homepage.
    2. Click on a product to view details and select a quantity.
    3. Add the product to your cart.
    
    **Managing Orders**:
   1.  Go to the "My Orders" page to view all added products.
   2.  Increase or decrease the quantity of products in your cart or delete an item altogether.

7. **Payment Options**:
    1. Proceed to checkout from the cart or order page.
    2. Select your preferred payment method:
        a. Stripe for online payment.
        b. Pay on Delivery for cash payment upon delivery.

8. **Folder Structure**:
    Chongai_store/
    │
    ├── frontend/          # React app with Vite and Tailwind CSS
    │   ├── public/        # Static assets
    │   ├── src/
    │   │   ├── components/ # React components
    │   │   ├── pages/      # App pages (Home, Product, Cart, Orders, etc.)
    │   │   ├── App.jsx     # Main app component
    │   │   └── main.jsx    # Vite entry point
    │   └── tailwind.config.js # Tailwind configuration
    │
    ├── backend/           # Express.js server
    │   ├── config/        # Configuration files (database, Stripe, etc.)
    │   ├── controllers/   # Route controllers
    │   ├── models/        # Mongoose models
    │   ├── routes/        # API routes
    │   ├── server.js      # Main server file
    │   └── .env           # Environment variables (not committed to repo)
    │
    └── README.md          # Project documentation

9. **Contributing**:
    If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

10. **License**:
    This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for checking out the E-Commerce App! If you encounter any issues or have questions, feel free to open an issue or submit a pull request.




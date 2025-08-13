**FOOD Ordering App**
A full-stack web application for browsing food items, managing a cart, placing orders, and tracking order status. Built with React for the frontend and Node.js/Express for the backend, with Stripe integration for payments.

Features

User Authentication: Sign up, log in, and manage your account.
Browse Food: View a list of available food items.
Cart Management: Add, remove, and update items in your cart.
Order Placement: Place orders and pay securely via Stripe Checkout.
Order Tracking: View and track your order status.
Admin Panel: Manage food items and orders (admin only).
Responsive Design: Works on desktop and mobile devices.

**Technologies Used**
Frontend: React, React Router, Axios, React Toastify, CSS
Backend: Node.js, Express, MongoDB, Stripe API
Authentication: JWT
Payments: Stripe Checkout

**Getting Started**
Prerequisites
Node.js & npm (or yarn)
MongoDB database
Stripe account (for payment integration)

Installation
_Clone the repository:_
git clone https://github.com/Ken-Mutuku/FOOD.git
cd FOOD
Backend Setup:
cd backend
npm install


Create a .env file with your secrets:
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Frontend Setup:
cd ../Frontend
npm install


Start the servers:

Backend:
npm run server
Frontend:
yarn dev or npm run dev

**Usage**
Register or log in as a user.
Browse food items and add them to your cart.
Place an order and pay via Stripe.
Track your orders on the "My Orders" page.
Admins can log in to manage food items and orders.

**Folder Structure**
<img width="320" height="347" alt="image" src="https://github.com/user-attachments/assets/52af1454-8ff0-42f0-89df-63721ac1d71f" />

  
**Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

**License**
This project is licensed under the MIT License.

**Note:
**
Make sure to keep your Stripe secret key and JWT secret safe and never commit them to public repositories.
For production, set up environment variables and secure your backend.

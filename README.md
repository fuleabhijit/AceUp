# AceUp
ACEUP Development 🚀 ACEUP is an educational platform built to help students preparing for competitive exams like JEE, NEET, GATE, UPSC, and more. It offers free mock tests in topic-wise, chapter-wise, and full-test formats, with a premium dashboard for performance analysis.
ACEUP Backend Development - First Stage
Overview
Welcome to the backend development repository of ACEUP. This project focuses on building an educational platform where students can solve competitive exam questions (topic-wise, chapter-wise, and full mock tests) and analyze their performance through personalized dashboards.

This First Stage covers:

User Management (Registration, Login, Profile Management)
JWT-based Authentication
Database Integration (MongoDB Atlas)
Payment Integration (Stripe - Premium Access)
🛠 Tech Stack
Component	Technology Used
Backend	Node.js, Express.js
Database	MongoDB (Atlas), Mongoose
Authentication	bcrypt (Password Hashing), JWT
Payment	Stripe Payment Gateway
Testing	Postman
Version Control	Git, GitHub
🚀 Features
1. User Management
User Registration: Allows new users to sign up with a secure password (hashed using bcrypt).
User Login: Authenticates existing users and generates JWT for session management.
Profile Management: Enables users to fetch and update their profile details.
2. Authentication & Security
Passwords are hashed using bcrypt to ensure security.
JWT is used for secure route protection.
3. Payment Integration
Integrated Stripe payment gateway for processing premium access subscriptions.
User's premium status is updated in the database upon successful payment.
📂 Project Structure
bash
Copy code
ACEUP-backend/
│
├── config/                     # Configuration files  
│   └── db.js                   # MongoDB connection logic  
│
├── controllers/                # Controller logic for routes  
│   ├── authController.js       # Handles Registration & Login  
│   ├── userController.js       # Handles Profile Management  
│   └── paymentController.js    # Handles Payment Logic  
│
├── middleware/                 # Middleware for route protection  
│   └── authMiddleware.js       # JWT Authentication Middleware  
│
├── models/                     # Mongoose Schemas  
│   └── User.js                 # User Schema  
│
├── routes/                     # API Routes  
│   ├── authRoutes.js           # Routes for Registration & Login  
│   ├── userRoutes.js           # Routes for Profile Management  
│   └── paymentRoutes.js        # Routes for Payment Integration  
│
├── .env                        # Environment variables  
├── package.json                # Node.js dependencies  
├── server.js                   # Entry point of the application  
└── README.md                   # Documentation (this file)
🔧 Installation and Setup
Follow these steps to set up the project locally:

1. Prerequisites
Node.js installed (Download Node.js)
MongoDB Atlas account (Sign Up for MongoDB)
Stripe Account for test API keys (Stripe Docs)
2. Clone the Repository
bash
git clone https://github.com/your-username/aceup-backend.git
cd aceup-backend
3. Install Dependencies
npm install
4. Configure Environment Variables
Create a .env file in the root directory and add the following:
# MongoDB Connection String
MONGO_URI=<your-mongodb-atlas-uri>

# JWT Secret Key
JWT_SECRET=<your-jwt-secret-key>

# Stripe Keys
STRIPE_PUBLIC_KEY=<your-stripe-public-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>

# Server Port
PORT=5000
5. Start the Server
npm run dev
The server will start on http://localhost:5000.
🛠 API Endpoints
User Management
Method	Endpoint	Description
POST	/api/register	Register a new user.
POST	/api/login	Login an existing user.
GET	/api/user/profile	Fetch user profile (protected).
PUT	/api/user/profile	Update user profile (protected).
Payment Integration
Method	Endpoint	Description
POST	/api/payment	Process payment via Stripe.
🧪 Testing
Install Postman for API testing (Download Postman).
Import the provided API collection or test manually.
Test the following endpoints:
User Registration (/api/register)
User Login (/api/login)
Profile Fetch/Update
Payment Integration
🚦 Next Steps
Refactor code for optimization.
Add advanced error handling for better API responses.
Implement email verification on registration.

🤝 Contribution
Feel free to fork this repository and submit pull requests. Any suggestions or improvements are welcome!

📝 License
This project is licensed under the MIT License.

💬 For Questions/Support:
Contact: abhijitvinodfule@gmail.com


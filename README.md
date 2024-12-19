# AceUp

AceUp is an educational platform designed to assist students preparing for competitive exams like JEE, NEET, GATE, and UPSC. It offers free mock tests (topic-wise, chapter-wise, and full-test formats) and provides a premium dashboard for performance analysis.  

## Backend Development - First Stage

This repository focuses on:

  User Management (Registration, Login, Profile Management)
  JWT-based Authentication
  Database Integration (MongoDB Atlas)
  Payment Integration (Stripe)

## Tech Stack

![image](https://github.com/user-attachments/assets/7bea622c-97f3-497f-b5e4-14639c33d622)

## Features

### User Management

  Registration: Secure user signup with bcrypt-hashed passwords.
  Login: JWT-based session management.
  Profile Management: Fetch and update user profiles.

### Authentication & Security

  Passwords hashed with bcrypt for enhanced security.
  JWT implemented for secure route protection.

### Payment Integration

  Stripe payment gateway for processing premium subscriptions.
  Premium status updates upon successful payment.

## Project Structure

ACEUP-backend/  
├── config/  
│   └── db.js              # MongoDB connection logic  
├── controllers/  
│   ├── authController.js  # Handles Registration & Login  
│   ├── userController.js  # Handles Profile Management  
│   └── paymentController.js # Handles Payment Logic  
├── middleware/  
│   └── authMiddleware.js  # JWT Authentication Middleware  
├── models/  
│   └── User.js            # Mongoose Schema for User  
├── routes/  
│   ├── authRoutes.js      # Routes for Registration & Login  
│   ├── userRoutes.js      # Routes for Profile Management  
│   └── paymentRoutes.js   # Routes for Payment Integration  
├── .env                   # Environment variables  
├── package.json           # Node.js dependencies  
├── server.js              # Entry point of the application  
└── README.md              # Documentation (this file)  


## Installation and Setup

  1. Prerequisites
     * Node.js installed
     * MongoDB Atlas account
     * Stripe Account
    
  2. Clone repository  
    `git clone https://github.com/your-username/aceup-backend.git`   
      `cd aceup-backend`

  3. Install Dependencies
     `npm install`  

  4. Configure Environment varibles  
      `MONGO_URI=<your_mongo_connection_string>`    
      `JWT_SECRET=<your_jwt_secret>`    
      `STRIPE_PUBLIC_KEY=<your_stripe_public_key>`    
      `STRIPE_SECRET_KEY=<your_stripe_secret_key>`   
      `PORT=5000`

  5. Start the server
     `npm run dev`  
   The server will start at http://localhost:5000.

## Contributions

Contributions are welcome! Feel free to fork the repository and open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact: abhijitvinodfule@gmail.com


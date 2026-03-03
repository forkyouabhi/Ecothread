
# EcoThread

EcoThread is a full-stack web application developed using Node.js, Express, and MongoDB. The project focuses on building a structured backend system with authentication, session management, and server-side rendering.

The objective of this group project was to strengthen understanding of backend development concepts such as user authentication, middleware design, database modeling, and modular application architecture within a collaborative development environment.


## Overview

EcoThread provides the following functionality:

* User registration and secure login
* Persistent authenticated sessions
* Image and file uploads
* Profile and shop-style pages accessible after authentication

The application follows a modular structure to ensure separation of concerns and maintainable code organization.

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose

### Authentication & Sessions

* Passport.js
* express-session
* connect-mongo

### Frontend Rendering

* Handlebars (hbs)

### Additional Tools

* Multer (file uploads)
* dotenv (environment configuration)

## Project Structure

```
├── auth/           # Passport configuration
├── models/         # Mongoose schemas
├── routes/         # Express route handlers
├── middlewares/    # Custom middleware (authentication checks, etc.)
├── views/          # Handlebars templates
├── public/         # Static assets
├── uploads/        # Uploaded files
├── app.js          # Application entry point
└── package.json
```

This structure improves readability, scalability, and ease of future development.


## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/forkyouabhi/Ecothread.git
cd Ecothread
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 4. Run the application

```bash
npm start
```

The application runs on:

```
http://localhost:4444
```

## Key Concepts Demonstrated

* Implementation of local authentication using Passport.js
* Secure session management with MongoDB
* Modular Express application design
* File upload handling with Multer
* Server-side rendering with Handlebars


## Future Enhancements

* Improved UI and responsive design
* Enhanced input validation and error handling
* Role-based access control
* Addition of automated testing


## License

ISC License (as specified in `package.json`).



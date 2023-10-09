
# Task Management Api

Task Management API is a robust and secure backend system designed to help users manage their tasks effectively. The API provides endpoints for user registration, authentication, task creation, retrieval, updating, and deletion. Users can register an account, log in securely, add tasks, view their tasks, get specific tasks by ID, update tasks, and delete tasks. The API ensures data integrity, user authentication, and secure task management.

### API Documentation

For detailed information on endpoints, authentication, and usage, refer to our [Swagger Documentation](https://tacnique-500v.onrender.com/api-docs/). Additionally, you can explore and test the API using [Postman Documentation](https://documenter.getpostman.com/view/25333582/2s9YJgSzVd).

- [Swagger Documentation Link](https://tacnique-500v.onrender.com/api-docs/)
- [Postman Documentation Link](https://documenter.getpostman.com/view/25333582/2s9YJgSzVd)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Overview

Task Management API is a comprehensive and secure backend solution designed to empower users in managing their tasks efficiently. With robust user authentication and seamless task management functionalities, the API ensures a reliable and user-friendly experience.

## Features:

- **User Management:**
  - User registration with unique username and email.
  - Secure user authentication using JWT tokens.
- **Task Management:**
  - Create tasks with titles, descriptions, and statuses (e.g., pending, completed).
  - Retrieve a list of all tasks.
  - Get specific task details by ID.
  - Update task details (title, description, status) by ID.
  - Delete tasks by ID.
- **Security:**
  - Passwords hashed using bcrypt for enhanced security.
  - JWT tokens for authentication, ensuring secure API access.
- **Error Handling and Validation:**
  - Graceful error handling with clear and informative error messages.
  - Input validation checks to enhance API security and reliability.
- **Rate Limiting:**
  - Prevent abuse with rate limiting, ensuring fair API usage.

## Prerequisites:

- **Node.js:** Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB:** If you're using MongoDB as your database, ensure you have it installed and running locally or accessible via a connection URL.
- **NPM or Yarn:** The project uses npm for package management. Make sure you have npm (or yarn) installed alongside Node.js.

## Installation:

1. **Clone the Repository:**
   ```
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

## Usage:

1. **Start the Server:**
   ```
   npm server
   ```
   The API server will start running on `http://localhost:3000` (or any configured port).

2. **API Endpoints:**
   - User Registration: `POST /register`
   - User Login: `POST /login`
   - User Details: `GET /get`
   - All User Details: `GET /`
   - Add Task: `POST /tasks`
   - Get All Tasks: `GET /tasks`
   - Get Task by ID: `GET /tasks/:id`
   - Update Task by ID: `PUT /tasks/:id`
   - Delete Task by ID: `DELETE /tasks/:id`

## Authentication:

- To register, make a `POST` request to `/register` with `username`, `email`, and `password`.
- For login, make a `POST` request to `/login` with `username` (or `email`) and `password`.
- Retrieve a JWT token upon successful login. Include this token in the `Authorization` header of your requests to authenticated endpoints.

Example:
```
Authorization: Bearer <your_jwt_token>
```

Ensure you include the JWT token in the header for all authenticated requests to access protected routes.

These authentication details will be used in the Swagger documentation to guide users on how to authenticate and use the API endpoints securely.

---

# API Endpoints

## User Authentication and Management

| Endpoint    | Method | Description                     | Request Body                                                         | Response                          |
|-------------|--------|---------------------------------|----------------------------------------------------------------------|------------------------------------|
| `/register` | POST   | Register a new user             | `{ "username": "example", "email": "example@example.com", "password": "password123" }` | `{ "message": "User registered successfully" }` |
| `/login`    | POST   | User login                     | `{ "email": "example@example.com", "password": "password123" }`       | `{ "token": "your-jwt-token" }`    |
| `/get`      | GET    | Get user details                | -                                                                    | User details                      |
| `/`         | GET    | Get all users                  | -                                                                    | List of users                     |

## Task Management

| Endpoint       | Method | Description                      | Request Body                                                                             | Response                              |
|-----------------|--------|----------------------------------|------------------------------------------------------------------------------------------|----------------------------------------|
| `/tasks`       | POST   | Add a new task                   | `{ "title": "Task Title", "description": "Task Description", "status": "pending" }`       | `{ "message": "Task added successfully" }` |
| `/tasks`       | GET    | Get all tasks                    | -                                                                                        | List of tasks                         |
| `/tasks/:id`   | GET    | Get a specific task by ID        | -                                                                                        | Task details                         |
| `/tasks/:id`   | PUT    | Update a specific task by ID     | `{ "title": "Updated Task Title", "description": "Updated Task Description", "status": "completed" }` | Updated task details         |
| `/tasks/:id`   | DELETE | Delete a specific task by ID     | -                                                                                        | `{ "message": "Task deleted successfully" }` |

---

In this table:

- **User Authentication and Management:** Contains endpoints related to user registration, login, and user details retrieval.
- **Task Management:** Contains endpoints related to task management, including adding, retrieving, updating, and deleting tasks.


## Contributing

Explain how others can contribute to your project. Include guidelines for submitting pull requests or bug reports.

## License

Specify the license for your project. For example, if it's open-source, you can use a license like MIT, Apache, or GPL.

---

Feel free to customize this template according to your project's specific details and requirements. Remember to keep it concise, well-organized, and easy to understand for users and developers alike.

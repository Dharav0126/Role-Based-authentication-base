# Role Based Authentication

This project demonstrates a role-based authentication system using Node.js, Express, MongoDB, and JWT.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dharav0126/role-based-authentication.git
    cd role-based-authentication
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:
    ```env
    PORT=7002
    CONNECTION_STRING=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Running the Application

1. Start the MongoDB server.

2. Start the application:
    ```bash
    npm start
    ```

3. The server will be running on the port specified in the [.env](http://_vscodecontentref_/1) file (default is 7002).

## API Endpoints

### Authentication

- **Register**: `POST /api/auth/register`
    - Request Body:
        ```json
        {
            "name": "John Doe",
            "password": "password123",
            "role": "user"
        }
        ```
    - Response:
        ```json
        {
            "message": "User created successfully"
        }
        ```

- **Login**: `POST /api/auth/login`
    - Request Body:
        ```json
        {
            "name": "John Doe",
            "password": "password123"
        }
        ```
    - Response:
        ```json
        {
            "token": "your_jwt_token"
        }
        ```

### User Routes

- **Protected Route**: `GET /api/user/protected`
    - Headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```
    - Response:
        ```json
        {
            "message": "Protected content"
        }
        ```

## Project Structure

. ├── src │ ├── config │ │ └── dbconnect.js │ ├── controllers │ │ └── authController.js │ ├── middlewares │ │ └── authMiddleware.js │ ├── models │ │ └── userModel.js │ ├── routes │ │ ├── authRoutes.js │ │ └── userRoutes.js │ └── index.js ├── .env ├── package.json └── README.md


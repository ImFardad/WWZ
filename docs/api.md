# API Documentation

## Authentication (Auth)

### 1. Signup
Create a new user account.

- **URL:** `/auth/signup`
- **Method:** `POST`
- **Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```
- **Success Response:** `201 Created`
```json
{
  "access_token": "eyJhbG..."
}
```

### 2. Login
Authenticate an existing user.

- **URL:** `/auth/login`
- **Method:** `POST`
- **Body:**
```json
{
  "username": "johndoe",
  "password": "securepassword123"
}
```
- **Success Response:** `200 OK`
```json
{
  "access_token": "eyJhbG..."
}
```

---

> [!TIP]
> Use the `access_token` in the Authorization header for protected routes:
> `Authorization: Bearer <token>`

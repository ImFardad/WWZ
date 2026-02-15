# Models Documentation

## User Model
The User model represents a player in the game.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | Integer | Primary Key (Auto-increment) |
| `username` | String | Unique username for the player |
| `email` | String | Unique email address |
| `password` | String | Hashed password (bcrypt) |
| `createdAt` | Date | Timestamp of account creation |
| `updatedAt` | Date | Timestamp of last update |

---

> [!NOTE]
> In Phase 3, we will add models for **Plots** (ملک‌ها) and **Resources**.

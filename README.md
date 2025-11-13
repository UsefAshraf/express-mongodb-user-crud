# express-mongodb-user-crud
A simple Node.js and Express REST API for managing users (add, view, update, and delete) with MongoDB and Mongoose.

## Features

- Add new users
- Retrieve all users
- Update user details
- Delete users
- MongoDB integration with Mongoose
- Organized folder structure (MVC-style)
- JSON-based API requests and responses
- 
## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Project Structure

project/
├── api/ # Express route definitions
│ └── user.routes.js
├── config/ # Configuration files
│ └── dbConnection.js
├── models/ # Mongoose models
│ └── user.model.js
├── service/ # Business logic / services
│ └── user.services.js
├── index.js # Entry point
└── package.json

## ⚡ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/UsefAshraf/express-mongodb-user-crud.git
cd express-mongodb-user-crud

Install dependencies:
npm install

Make sure MongoDB is running locally on port 27017.

Run the server:
node index.js

You should see:
✅ DB connected
Server running on port 3000

🔗 API Endpoints
Method	Endpoint	Description	Body (JSON)
POST	/users	Add a new user	{ "name": "John", "email": "john@example.com", "password": "1234" }
<img width="1752" height="631" alt="image" src="https://github.com/user-attachments/assets/cc1af701-7867-4ac2-84c2-df31bbf021ef" />
GET	/users	Get all users
<img width="1712" height="818" alt="image" src="https://github.com/user-attachments/assets/2a1c084b-1493-443c-aa01-11fd2ef1f287" />
PUT	/users	Update user
DELETE	/users	Delete user

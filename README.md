DocuVerse

Introduction

Welcome to DocuVerse, a real-time collaborative document editor that allows users to create, edit, and manage documents with seamless teamwork. Built with modern web technologies, DocuVerse is designed to enhance productivity and collaboration in any environment.

Features

Real-Time Collaboration: Edit documents simultaneously with other users. Changes are reflected in real-time using Socket.io.

Responsive Design: Fully responsive and optimized for any device using Tailwind CSS.

User Authentication: Secure login and signup functionality to protect your documents.

Document Management: Easily create, edit, and manage your documents.

Rich Text Editing: Enhanced editing experience with Quill.js, including an extensive toolbar.

Technologies Used

Frontend:
React
Redux
Tailwind CSS
Quill.js

Backend:
Node.js
Express

Database:
MongoDB

Real-Time Communication:
Socket.io


Installation

Follow these steps to get a local copy up and running:

Prerequisites

Node.js
MongoDB

Clone the Repository

sh

Copy code

git clone https://github.com/yourusername/docuverse.git

cd docuverse

Install Dependencies

Backend
sh
Copy code
cd backend
npm install
Frontend
sh
Copy code
cd frontend
npm install
Environment Variables
Create a .env file in the backend directory and add the following variables:

env
Copy code
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
Start the Application
Backend
sh
Copy code
cd backend
npm start
Frontend
sh
Copy code
cd frontend
npm start

Usage

Sign Up/Login: Create a new account or log in with your existing credentials.
Create a Document: Navigate to the document creation page to start a new document.
Collaborate: Share the document URL with others to start collaborating in real-time.
Edit and Save: Make edits and see changes reflected instantly. Your document is saved automatically.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.


Contact
For any questions or feedback, please reach out to tu.haider138@gmail.com.

# Grave Management System (GMS)

A responsive web application built using **React.js** to manage graveyard records such as graves, khundis, and related data. Admins can log in to manage records, and guests can view categorized data.

📘 Description
Grave Management System (GMS) is a React.js-based web application built to streamline the record-keeping process for graveyards and khundi management. It serves both administrative users and the general public by offering structured data access, search functionality, and mobile responsiveness for ease of use in the field.

🎯 Project Goals
Simplify the process of managing graveyard records digitally.

Provide role-based access: Admins can manage records; Guests can only view them.

Make the system user-friendly and accessible on all devices.

Ensure real-time data update and clean UI with smooth transitions.

💡 Inspiration
This project was initiated to support community efforts in modernizing cemetery records, especially for local communities and organizations that still rely on manual entry. The system aims to be a digital-first solution that honors and preserves important historical and personal data.

---

## 🚀 Features

- 🔐 Admin Login with role-based redirection
- 🪦 View and manage graves and khundis
- 📂 Category and Subcategory-based navigation
- 📱 Fully responsive design (Mobile & Desktop)
- 🎨 Styled with Tailwind CSS
- 🍞 Toast notifications for feedback
- 📦 React Router for client-side navigation

---

## 📁 Project Structure


src/
│
├── components/
│ ├── Admin/
│ ├── common/
│ ├── Guest/
│ ├── Home/

│
├── context/
│ └── UserContext.js
│ └── GraveContext.js
│
├── views/
│ ├── Home.js
│ ├── Login.js
│ └── Guest.js
│
├── App.jsx
└── index.jsx   

🛣️ Roadmap
✅ Admin panel for CRUD operations
✅ Guest interface for browsing records
✅ Responsive navbar and layout
✅ Toast notifications and modals
🔜 Search and filter functionality


## 🛠️ Tech Stack

- **React JS**
- **React Router DOM**
- **React Icons**
- **Tailwind CSS**
- **React Toastify**

🔑 Admin Credentials (for testing)
Email: admin@admin.com
Password: 123456

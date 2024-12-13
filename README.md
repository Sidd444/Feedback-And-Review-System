# Review Management System

## Demo
- **Video Demo**: [Video Link](https://drive.google.com/file/d/1QMuUgBV3d9Cw1pbmTrKEkJdT7-2CKfkP/view?usp=drive_link)
- **Frontend Deployed Link**: [Review Management System](https://feedback-and-review-system.vercel.app/)
- **Backend**: Deployed on Render

---

## Overview
The **Review Management System** is a web application where users can create, edit, delete, and view reviews. Additionally, only administrators have the privilege to approve or reject reviews. The project demonstrates a clean integration of a React frontend and a Node.js/Express backend connected to a MongoDB database. The application is styled with Tailwind CSS, ensuring a responsive design.

---

## Features
- **User Authentication**: Users can log in to create, edit, and delete their reviews.
- **Create Reviews**: Authenticated users can submit new reviews.
- **Edit Reviews**: Users can update their own reviews after logging in.
- **Delete Reviews**: Users can remove their reviews without requiring admin approval.
- **View Reviews**: All users can view existing reviews. Admin-approved reviews are highlighted.
- **Approve/Reject Reviews**: Only admins can approve or reject reviews.  
  *To log in as admin, use the following credentials:*
  - **Email**: admin@gmail.com  
  - **Password**: admin
- **Responsive Design**: The frontend is styled using Tailwind CSS for optimal performance on various devices.
- **Error Handling**: Notifications for successful actions and errors are displayed using React Hot Toast.

---

## Technologies Used
### Frontend
- React
- React Router
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB

### Deployment
- **Frontend**: Vercel
- **Backend**: Render

---

## How to Use
1. **For Users**:
   - Sign up or log in.
   - Create, edit, or delete reviews.
   - View all existing reviews.

2. **For Admins**:
   - Log in using the provided admin credentials(email: admin@gmail.com, password: admin).
   - Approve or reject pending reviews.



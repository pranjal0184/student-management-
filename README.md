# 🌟 Student Management System  
### Full Stack Project using Angular, Node.js, Express & MongoDB  

---

## 📌 Overview  

The Student Management System is a simple full-stack web application used to manage student records.  
It includes all basic CRUD features:

- ➕ Add new students  
- 📄 View all students  
- ✏️ Update student details  
- 🗑️ Delete student records  

This project demonstrates:

- REST API development using Node.js + Express  
- UI development using Angular  
- Database integration using MongoDB  
- Clean modular architecture  

---

## 🛠 Tech Stack  

### Frontend  
- Angular  
- TypeScript  
- HTML / CSS  
- Angular Forms  
- HttpClientModule  

### Backend  
- Node.js  
- Express.js  
- Mongoose  

### Database  
- MongoDB (Local or Atlas Cloud)  

---

### 📂 Project Structure
```
student-management-system/
│
├── backend/
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── models/
│   │   └── Student.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    └── src/
        └── app/
            ├── app.module.ts
            ├── app.component.ts
            ├── app.component.html
            ├── app.component.css
            ├── student.model.ts
            ├── student.service.ts
            ├── student-form.component.ts
            ├── student-form.component.html
            ├── student-form.component.css
            ├── student-list.component.ts
            ├── student-list.component.html
            └── student-list.component.cs

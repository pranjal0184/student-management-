Student Management System - Angular + Node.js + MongoDB

This zip contains:
- backend/  → Complete Node.js + Express + MongoDB API
- frontend/src/app/ → Angular components, service, and model for the UI

How to use backend:
1. Open a terminal in backend/
2. Run: npm install
3. Make sure MongoDB is running locally on mongodb://127.0.0.1:27017
   or set MONGO_URI in an .env file.
4. Run: npm start
   API will be available at http://localhost:3000/api/students

How to use frontend:
1. Create a new Angular project (if you don't have one):
     ng new student-management-frontend
     cd student-management-frontend
2. Replace the contents of src/app/ with the files from frontend/src/app/ in this zip.
3. Make sure HttpClientModule and FormsModule are imported in app.module.ts (already done in the provided file).
4. Run the Angular app:
     ng serve --open
5. The Angular app communicates with the backend at http://localhost:3000/api/students


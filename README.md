# 🚀 CareerPilot

### AI Career Navigator & Interview Coach

CareerPilot is an AI-powered full-stack web application that helps students and job seekers analyze their resumes, improve ATS compatibility, identify missing skills, receive personalized career guidance, and prepare for interviews using Generative AI.

Built using **React**, **Spring Boot**, **JWT Authentication**, **MySQL**, and **Google Gemini AI**, CareerPilot provides intelligent career insights through a modern, secure, and cloud-deployed architecture.

---

# 🌐 Live Demo

### 🖥️ Frontend

**https://ai-career-navigator-phi.vercel.app**

### ⚙️ Backend API

**https://careerpilot-backend-q0il.onrender.com**

### 🔍 Backend Health Check

**https://careerpilot-backend-q0il.onrender.com/hello**

---

# 📖 Project Overview

Finding a job today requires much more than simply creating a resume. Recruiters increasingly rely on Applicant Tracking Systems (ATS), while candidates often struggle to identify missing skills and improve their resumes.

CareerPilot addresses this problem by combining Artificial Intelligence with modern web technologies to provide:

* Resume analysis
* ATS compatibility score
* Missing skill detection
* Personalized improvement suggestions
* Career roadmap recommendations
* Interview preparation guidance

The application follows a modern full-stack architecture with secure authentication and cloud deployment.

---

# ✨ Features

## 🔐 Authentication

* User Registration
* Secure Login
* JWT Authentication
* BCrypt Password Encryption
* Protected Routes
* Stateless Authentication

---

## 📄 Resume Upload

* Upload Resume in PDF format
* PDF text extraction using Apache PDFBox
* Secure file processing
* AI-powered resume analysis

---

## 🤖 AI Resume Analysis

Google Gemini AI analyzes resumes and generates:

* ATS Score
* Resume Strengths
* Resume Weaknesses
* Missing Skills
* Personalized Recommendations
* Career Improvement Suggestions

---

## 📊 Dashboard

The dashboard provides:

* ATS Score
* Resume Upload
* Skill Match Overview
* Interview Readiness
* Personalized User Information
* Career Insights

---

## 🛣️ Career Roadmap

Generate AI-powered career guidance including:

* Missing Skills
* Recommended Technologies
* Learning Suggestions
* Career Growth Roadmap

---

## 💼 Interview Preparation

Receive AI-powered interview preparation guidance based on your resume and target role.

---

## 👤 User Profile

Users can:

* View Profile
* Update Personal Information
* Manage Target Role

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

---

## Backend

* Java 21
* Spring Boot
* Spring Security
* Spring Data JPA
* Maven
* JWT Authentication

---

## Database

* MySQL
* Railway Cloud Database

---

## Artificial Intelligence

* Google Gemini API

---

## PDF Processing

* Apache PDFBox

---

## Cloud Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* Railway

### Version Control

* Git
* GitHub

---

# 📂 Project Structure

```text
CareerPilot
│
├── backend
│   ├── config
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── repository
│   ├── security
│   ├── service
│   ├── resources
│   └── BackendApplication.java
│
└── frontend
    ├── public
    └── src
        ├── assets
        ├── components
        ├── context
        ├── pages
        ├── services
        ├── App.jsx
        └── main.jsx
```

---

# 🏗️ System Architecture

```text
                User
                  │
                  ▼
        React + Vite Frontend
                  │
                  ▼
         Spring Boot REST API
                  │
         JWT Authentication
                  │
                  ▼
          Railway MySQL Database
                  │
                  ▼
        Google Gemini AI API
                  │
                  ▼
      AI Resume Analysis Engine
                  │
                  ▼
 ATS Score + Recommendations + Insights
                  │
                  ▼
          CareerPilot Dashboard
```

---

# ⚙️ Application Workflow

1. User registers an account.
2. User logs into the application.
3. JWT token is generated.
4. User uploads a resume (PDF).
5. Apache PDFBox extracts the resume text.
6. Resume content is analyzed using Google Gemini AI.
7. ATS score and career insights are generated.
8. Results are stored securely in MySQL.
9. Dashboard displays personalized recommendations.

---

# 🔒 Security Features

* JWT Authentication
* BCrypt Password Hashing
* Protected REST APIs
* Stateless Session Management
* Spring Security
* Secure CORS Configuration

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Ashu777767/CareerPilot.git
```

---

## Backend Setup

```bash
cd backend
```

Configure `application.properties`

```properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_DATABASE_USERNAME
spring.datasource.password=YOUR_DATABASE_PASSWORD

gemini.api.key=YOUR_GEMINI_API_KEY
```

Run Backend

```bash
./mvnw spring-boot:run
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend

```properties
DB_URL=

DB_USERNAME=

DB_PASSWORD=

GEMINI_API_KEY=

JWT_SECRET=
```

## Frontend

```env
VITE_API_URL=https://careerpilot-backend-q0il.onrender.com
```

---

# 📸 Screenshots

> Add screenshots of the following pages:

* Landing Page
* Register Page
* Login Page
* Dashboard
* Resume Upload
* ATS Analysis
* Career Roadmap
* Interview Preparation
* User Profile

---

# 🚀 Future Enhancements

* AI Mock Interview Simulator
* Resume Version History
* Resume Comparison
* Download Analysis as PDF
* Email Verification
* Forgot Password
* Dark Mode
* Admin Dashboard
* Notifications
* Multi-language Support
* Cover Letter Generator
* Resume Templates

---

# 📈 Highlights

* AI-powered Resume Analysis
* ATS Score Generation
* Google Gemini Integration
* Secure JWT Authentication
* Cloud Deployment (Vercel, Render & Railway)
* Responsive User Interface
* Production-ready Full-Stack Architecture

---

# 👨‍💻 Developer

**Ashutosh Kumar Jha**

Computer Science Engineering Student

GitHub: https://github.com/Ashu777767

---

# 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

Feel free to fork this repository, improve it, and submit a pull request.

---

# ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.

---

# 📄 License

This project is licensed under the **MIT License**.

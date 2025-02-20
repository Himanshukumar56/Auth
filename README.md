# 🚀✨ Dashboard System

A modern and user-friendly dashboard system that allows users to sign up, log in, log out, and receive email notifications using Mailtrap. The system includes email verification and password reset features. 🛠️📧

## 🌟 Features
- 📝 **User Authentication**: Signup, Login & Logout.
- 📩 **Email Notifications**: Welcome emails, verification codes, and password reset emails via Mailtrap.
- 🔐 **Secure Authentication**: Password hashing & validation.
- ✅ **Email Verification**: Users need to verify their email before accessing certain features.
- 🔄 **Forgot Password**: Users can reset their password via email verification.

## 🏗️ Tech Stack 🏗️
- 🎨 **Frontend**: React 
- ⚙️ **Backend**: Node.js / Express
- 🗄️ **Database**: MongoDB 
- 🔑 **Authentication**: JWT 
- 📬 **Email Service**: Mailtrap

## 📦 Installation 📦
1. 🚀 Clone the repository:
   ```sh
   git clone https://github.com/Himanshukumar56/Auth.git
   cd dashboard-system
   ```
2. 📥 Install dependencies:
   ```sh
   npm install
   ```
3. 🔧 Set up environment variables:
   ```env
   MAILTRAP_HOST=<your-mailtrap-host>
   MAILTRAP_PORT=<your-mailtrap-port>
   MAILTRAP_USER=<your-mailtrap-username>
   MAILTRAP_PASS=<your-mailtrap-password>
   JWT_SECRET=<your-secret-key>
   DATABASE_URL=<your-database-url>
   ```

## 🔌 API Endpoints 🔌
| Method | Endpoint | Description |
|--------|---------|-------------|
| 🚀 POST | `/api/auth/signup` | User signup |
| 🔑 POST | `/api/auth/login` | User login |
| 🚪 GET | `/api/auth/logout` | User logout |
| ✅ POST | `/api/auth/verify-email` | Email verification |
| 🔄 POST | `/api/auth/forgot-password` | Request password reset |
| 🔓 POST | `/api/auth/reset-password` | Reset password |

## 🎯 To-Do ✅
- [ ] 🔗 Add social login (Google, GitHub, etc.)
- [ ] 🔐 Implement role-based authentication
- [ ] 🎨 Improve UI/UX for the dashboard

## 💡 Contributing 🤝
Contributions are welcome! Feel free to open an issue or submit a pull request. 🚀

---
🚀 **Built with passion by Himanshu Kumar (https://github.com/Himanshukumar56)** ❤️

## 🛡️ License 📝
This project is licensed under the MIT License.

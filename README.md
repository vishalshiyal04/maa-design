# 🧵 Maa Embroidery Design — Web Platform

> A premium, fully responsive **MERN-stack** web application built for **Maa Embroidery Design**.
> Designed with a clean **Navy Blue (`#0a1930`) and White** theme, mirroring the official mobile application aesthetic.

---

## ✨ Advanced Features

- **Dynamic Content Management (CMS)** — Publish blogs and manage gallery images directly from the Admin Panel without touching any code.
- **Lead Management Panel** — Track, review, and manage all customer leads submitted through the website contact form.
- **Secure Authentication** — JWT (JSON Web Token) based secure Admin Dashboard access.
- **Dynamic SEO** — SEO-ready pages powered by `react-helmet-async` for better search engine visibility.
- **Production-Ready** — High performance build using Tailwind CSS and Vite.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Security | JWT (JSON Web Token) |

---

## 📂 Updated Project Structure

```
root/
├── backend/
│   ├── models/                    # MongoDB Schemas
│   │   ├── Post.js                # Blog post schema
│   │   ├── Inquiry.js             # Contact/Lead schema
│   │   └── Gallery.js             # Gallery image schema
│   ├── server.js                  # Express Server & API Routes
│   └── .env                       # Environment Variables
│
├── frontend/
│   ├── public/
│   │   └── logo.jpeg              # Favicon
│   ├── src/
│   │   ├── components/            # UI Components
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSlider.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── AppDownload.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── config/
│   │   │   └── siteData.js        # Centralized Business Info
│   │   ├── App.jsx                # Routing, Auth Logic, and Admin Views
│   │   ├── main.jsx               # React DOM rendering
│   │   └── index.css              # Global Tailwind imports & custom CSS
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### 1. Backend Setup

```bash
cd backend
npm install
node server.js
```

**Create a `.env` file inside the `backend/` folder:**

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open your browser at `http://localhost:5173`.

### 3. Build for Production

```bash
cd frontend
npm run build
```

The optimized output will be available in the `dist/` folder.

---

## 🛡️ Admin Dashboard Security

The Admin Panel is fully protected and hidden from regular users.

| Detail | Value |
|---|---|
| **Secret Path** | Hidden lock icon located in the Footer |
| **Default Email** | `Your-Email-ID` |
| **Default Password** | `your-Password` |
| **Session Type** | JWT token-based authentication |

> ⚠️ **Important:** Always change the default credentials in `server.js` before deploying to production.

---

## 🚀 Key API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/admin/login` | Admin Authentication |
| `GET` | `/api/inquiries` | Fetch all customer leads |
| `PATCH` | `/api/inquiries/:id/status` | Update lead status |
| `DELETE` | `/api/inquiries/:id` | Remove a lead |
| `GET` | `/api/blogs` | Fetch all blog posts |
| `POST` | `/api/blogs` | Create a new blog post |
| `PUT` | `/api/blogs/:id` | Edit an existing blog post |
| `DELETE` | `/api/blogs/:id` | Delete a blog post |
| `GET` | `/api/gallery` | Fetch all gallery images |
| `POST` | `/api/gallery` | Add a photo to gallery |
| `DELETE` | `/api/gallery/:id` | Remove a gallery image |

---

## 🔗 Contact Form Payload

The contact form sends a `POST` request to `/api/inquiries` with the following structure:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "+91 00000 00000",
  "message": "Message content here"
}
```

**Success Response:**

```json
{
  "success": true,
  "message": "Thank you! We will contact you soon."
}
```

> ⚠️ When deploying to a live server, update the API base URL in `Contact.jsx` from
> `http://localhost:5000` to your production endpoint.

---

## 📱 Mobile App

Download the official **Maa Embroidery Design** app:

[![Get it on Google Play](https://img.shields.io/badge/Google_Play-Download-green?style=for-the-badge&logo=google-play)](https://play.google.com/store/apps/details?id=com.maaembroiderydesigns.app&pcampaignid=web_share)

---

## 📞 Support & Credits

**Maa Embroidery Design Studio & Institute**

| | |
|---|---|
| **Founder** | Sanjya Shiyal |
| **Phone** | [+91 87585 88358](tel:8758588358) |
| **Email** | [maadesignsembroidery@gmail.com](mailto:maadesignsembroidery@gmail.com) |
| **Address** | 11, Surdhara Complex, Nr. Sardar Mall, Nikol Gam Road, Ahmedabad |
| **Developed By** | Vishal Shiyal |
---

## 📄 License

© 2026 **Maa Embroidery Design**. All rights reserved.

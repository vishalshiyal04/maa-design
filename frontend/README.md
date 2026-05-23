# 🧵 Maa Embroidery Design — Web Platform

> A premium, fully responsive React web application built for **Maa Embroidery Design**.
> Designed to perfectly mirror the aesthetic of the official mobile app, featuring a clean
> **Navy Blue (`#0a1930`) and White** theme.

---

## ✨ Features

- **Responsive Design** — 100% mobile, tablet, and desktop friendly layout.
- **Premium Brand Theme** — Custom Deep Navy Blue and bright blue accent UI matching the official mobile application.
- **Dynamic Configuration** — Centralized `siteData.js` file to easily update business details (phone, email, address, app links) without touching core UI components.
- **Hero Image Slider** — Custom slanted-edge image slider on desktop that gracefully transforms into a stacked mobile layout.
- **App Download Section** — Integrated Google Play and Apple App Store buttons with side-by-side layout and glowing accent backgrounds.
- **Interactive Contact Form** — Fully styled form ready to communicate with a Node.js backend, featuring loading states and success/error handling.
- **Google Maps Integration** — Embedded interactive map perfectly pinpointing the shop location.

---

## 🛠️ Technologies Used

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | `react-icons` (FontAwesome integration) |

---

## 📂 Project Structure

```
frontend/
├── public/
│   └── logo.jpeg                  # Browser tab icon (Favicon)
├── src/
│   ├── assets/                    # Local images (main-image.jpeg, app screenshots, etc.)
│   ├── components/                # React UI Components
│   │   ├── Header.jsx             # Sticky navigation with mobile hamburger menu
│   │   ├── HeroSlider.jsx         # Landing page animated image slider
│   │   ├── About.jsx              # Business description section
│   │   ├── Gallery.jsx            # Product display grid
│   │   ├── AppDownload.jsx        # Play Store & App Store links
│   │   ├── Contact.jsx            # Contact form & Google Map embed
│   │   └── Footer.jsx             # Bottom navigation & copyright
│   ├── config/
│   │   └── siteData.js            # Centralized business information
│   ├── App.jsx                    # Main application layout
│   ├── main.jsx                   # React DOM rendering
│   └── index.css                  # Global Tailwind imports & custom CSS
├── index.html                     # Main HTML template
├── tailwind.config.js             # Tailwind configuration
└── package.json                   # Project dependencies
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### 1. Install Dependencies

Open your terminal, navigate to the `frontend` folder, and run:

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to the local link provided (usually `http://localhost:5173`).

### 3. Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder, ready to deploy.

---

## 📝 Configuration Guide

You do not need to hunt through the code to change your phone number, email, or social links.
All core business data is stored in one place.

Open `src/config/siteData.js` to update:

```js
export const siteConfig = {
  brandName: "Maa Embroidery Design",
  tagline: "Crafting Stories Through Every Stitch",

  // --- Contact ---
  phone: "+91 8758588358",
  email: "maadesignsembroidery@gmail.com",
  whatsapp: "https://wa.me/918758588358",

  // --- Address ---
  address: "11, Surdhara Complex, Nr. Sardar Mall, Nikol Gam Road, Thakkar Nagar, Ahmedabad - 382350",

  // --- App Store Links ---
  playStoreLink: "https://play.google.com/store/apps/details?id=com.maaembroiderydesigns.app&pcampaignid=web_share",
  appStoreLink: "https://apps.apple.com/your-app-link", // Update when available

  // --- Social Media ---
  facebook: "https://facebook.com/your-page",
  instagram: "https://instagram.com/your-handle",
};
```

---

## 🔗 Backend Connection (Contact Form)

The contact form in `Contact.jsx` is configured to send `POST` requests to a Node.js backend.

**Endpoint:**

```
POST http://localhost:5000/api/contact
```

**Request Payload:**

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

> ⚠️ **Before deploying to production**, update the fetch URL in `Contact.jsx` from
> `http://localhost:5000/api/contact` to your live production API endpoint.

---

## 🚀 Deployment

### Frontend (Vercel / Netlify)

```bash
# Build the project
npm run build

# Deploy the dist/ folder to Vercel or Netlify
```

### Backend (Node.js on Render / Railway / VPS)

Ensure your `.env` file is configured:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=https://your-frontend-domain.com
NODE_ENV=production
```

---

## 📱 Mobile App

Download the official **Maa Design** app:

---

## 📞 Contact

**Maa Embroidery Design Studio & Institute**
- **Founder:** Sanjya Shiyal
- **Phone:** [+91 87585 88358](tel:8758588358)
- **Email:** [maadesignsembroidery@gmail.com](mailto:maadesignsembroidery@gmail.com)
- **Address:** 11, Surdhara Complex, Nr. Sardar Mall, Nikol Gam Road, Thakkar Nagar, Ahmedabad - 382350

---

## 📄 License

© 2025 **Maa Embroidery Design**. All rights reserved.
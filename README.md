# VIMAL Photos 📷

> A modern, responsive photography portfolio and gallery website featuring dynamic category filtering, a full-screen lightbox viewer, and a built-in admin dashboard with cloud synchronization.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vimaljuniorofficial/VimalPhotos)

---

## ✨ Features

- **Editorial & Neo-Brutalist Aesthetic**: Styled with bold typography (`Space Grotesk` & `Inter`), custom color accents per category, tactile button interactions, and responsive card grids.
- **Dynamic Photo Gallery**:
  - Filter by photo categories (*Landscape*, *Portrait*, *Street*, *Wedding*, or custom tags) with live photo counters.
  - Paginated gallery view with smooth transitions.
- **Full-Screen Lightbox**:
  - Responsive overlay with high-resolution image viewer, title, and caption.
  - Keyboard shortcuts (`←` / `→` arrow keys to navigate, `Esc` to close).
  - Touch swipe gestures for mobile and tablet users.
- **Protected Admin Dashboard (`/admin`)**:
  - Secured with password authentication (default: `admin123`).
  - Add new photos via direct file upload or image URL.
  - In-browser canvas image compression & optimization before Cloudinary upload.
  - Create and manage custom categories on the fly.
  - Edit or delete existing photos.
  - Manage site metadata: artist bio, hero image, contact info (Email, Phone, Instagram).
  - Password change management.
- **Hybrid Storage & Cloud Sync**:
  - Offline-first persistence via browser `localStorage`.
  - Automatic bidirectional sync with Firebase Realtime Database.
  - Realtime visual sync status dot in the admin bar.
- **Vercel Edge Ready**:
  - Zero-config single-page application (SPA) routing configured in `vercel.json`.
  - Global edge CDN distribution with optimized cache revalidation.

---

## 🌐 Deploy to Vercel

### Option 1: Automatic Deploy via GitHub (Recommended)

1. Push your code to your GitHub repository (`github.com/vimaljuniorofficial/VimalPhotos`).
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import"** next to **`VimalPhotos`**.
4. Vercel automatically detects `vercel.json`:
   - **Framework Preset**: *Other*
   - **Root Directory**: `./`
   - **Output Directory**: `public`
   - **Build Command**: `npm run build`
5. Click **Deploy**. Your photography portfolio will be instantly live on a global HTTPS `.vercel.app` domain!

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Link and deploy your project:
   ```bash
   vercel
   ```

3. Deploy directly to production:
   ```bash
   vercel --prod
   ```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18, v20, or v22)
- `npm`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vimaljuniorofficial/VimalPhotos.git
   cd VimalPhotos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Admin Access

- **URL**: `http://localhost:3000/admin` (or `https://your-app.vercel.app/admin` in production)
- **Default Password**: `admin123`
*(You can update this password directly in the **Site Settings** panel inside the dashboard)*

---

## 📂 Project Structure

```text
├── public/                 # Production static web assets
│   └── index.html          # Main HTML, styling, and client logic
├── server.js               # Node.js Express server for local development
├── vercel.json             # Vercel deployment & SPA routing configuration
├── package.json            # Project dependencies and npm scripts
├── metadata.json           # Application metadata
└── README.md               # Project documentation
```

---

## ⚙️ Vercel Configuration (`vercel.json`)

The included `vercel.json` ensures smooth single-page routing without 404 errors when directly visiting `/admin` or refreshing the page:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "framework": null,
  "outputDirectory": "public",
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS (CSS Variables, Grid, Flexbox)
- **Typography**: Space Grotesk, Inter
- **Deployment & Hosting**: [Vercel](https://vercel.com/) (Edge Network & Global CDN)
- **Local Dev Server**: Node.js & Express
- **Image Storage & CDN**: Cloudinary
- **Sync & Database**: Firebase Realtime Database + LocalStorage

---

## 📄 License

This project is licensed under the MIT License - feel free to customize and use it for your photography showcase!

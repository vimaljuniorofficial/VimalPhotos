# VIMAL Photos 📷

> A modern, responsive photography portfolio and gallery website featuring dynamic category filtering, a full-screen lightbox viewer, and a built-in admin dashboard with cloud synchronization.

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
- **Deployment Ready**:
  - Single-page application (SPA) routing with `_redirects` and `netlify.toml`.
  - Cache-control optimization via `_headers`.

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or v20+)
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

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
├── public/                 # Production static web assets
│   ├── index.html          # Main HTML, styling, and client logic
│   ├── _headers            # Netlify HTTP caching headers
│   ├── _redirects          # Netlify SPA catch-all rewrite rules
│   └── netlify.toml        # Netlify build configuration
├── server.js               # Node.js Express server (serves static files on port 3000)
├── netlify.toml            # Root Netlify deployment configuration
├── package.json            # Project dependencies and npm scripts
├── metadata.json           # Application metadata
└── README.md               # Project documentation
```

---

## 🔑 Admin Access

- **URL**: `http://localhost:3000/admin` (or `#/admin` on static hosts)
- **Default Password**: `admin123`
*(You can update this password directly in the **Site Settings** panel inside the dashboard)*

---

## 🌐 Deploy to Netlify

### Option 1: Automatic Deploy via GitHub (Recommended)
1. Go to [Netlify](https://app.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub account and select **`VimalPhotos`**.
3. Netlify will detect `netlify.toml` automatically:
   - **Publish directory**: `public`
   - **Build command**: *(leave blank or `npm run build`)*
4. Click **Deploy**.

### Option 2: Drag & Drop (Netlify Drop)
1. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the **`public`** folder directly into your browser.
3. Your site is instantly live with a secure HTTPS URL.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS (CSS Variables, Grid, Flexbox)
- **Typography**: Space Grotesk, Inter
- **Hosting / Server**: Express (Node.js) & Netlify Static Hosting
- **Image CDN**: Cloudinary
- **Sync**: Firebase Realtime Database + LocalStorage

---

## 📄 License

This project is licensed under the MIT License - feel free to customize and use it for your photography showcase!
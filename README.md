# 🎬 MovieFinder

A sleek, responsive movie-discovery app built with **React + Vite**, **Tailwind CSS**, and **Appwrite** — powered by **TMDB**’s API.

---

## 🚀 Demo

Run locally and open **<http://localhost:5173>** in your browser.
Or view the live demo at: **<https://react-movie-browser-gamma.vercel.app/>**

---

## 🎬 Follow-Along Tutorial

Created step-by-step by following tutorial by **JavaScript Mastery**:  
<https://www.youtube.com/watch?v=dCLhUialKPQ>

> Special thanks to **@adrianhajdin** & the JSM community!

---

## 🗂 Project Structure

_React source files live **one level down** in `src/`._

---

## 🔍 Features

| Category                 | Highlights                                                      |
| ------------------------ | --------------------------------------------------------------- |
| **Discover & Search**    | Popular-feed, debounced search                                  |
| **Real-Time Analytics**  | Track **search count** in Appwrite; display **Trending Movies** |
| **Responsive Design**    | Full-screen hero banner, Tailwind utilities, mobile-first       |
| **React Best Practices** | Hooks, `react-use` debounce, modular components                 |

---

## 🛠 Getting Started

### Prerequisites

- Node 16 +
- npm or Yarn
- Appwrite project (Database + Collection)

### Installation

1.  **Clone & Install**

        git clone https://github.com/<your-handle>/moviefinder.git
        cd moviefinder
        npm install        # or yarn

2.  **Environment**

    Create a `.env` in project root:

         VITE_TMDB_API_KEY=<your_tmdb_bearer_token>
         VITE_API_BASE_URL=https://api.themoviedb.org/3
         VITE_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
         VITE_APPWRITE_DATABASE_ID=<your_appwrite_database_id>
         VITE_APPWRITE_COLLECTION_ID=<your_appwrite_collection_id>
         VITE_APPWRITE_ENDPOINT=https://<your-appwrite-domain>/v1

3.  **Run**

         npm run dev        # or yarn dev

    Navigate to **<http://localhost:5173>** ✨

---

## 🙏 Acknowledgements

- JavaScript Mastery
- TMDB API
- Appwrite
- Tailwind CSS

---

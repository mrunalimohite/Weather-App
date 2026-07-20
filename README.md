# 🌤️ Modern React Weather Application

A sleek, responsive, and dynamic weather web dashboard built with **React**, **Vite**, and the **WeatherAPI**. The application allows users to check real-time global weather details, view a 24-hour horizontal forecast timeline, and query locations seamlessly.

## 🚀 Live Demo
*(Optional: Add your deployed site link here once hosted on GitHub Pages or Vercel)*
> **Live Link:** [View Live Site](https://modern-weather-app-project.netlify.app/)

---

## ✨ Features
* **Live Search:** Look up current weather details for any city globally.
* **Hourly Timeline:** Smoothly tracks temperature drops and rises at multiple intervals throughout the day.
* **Dynamic Icon Shifts:** Automatically updates weather icons (sun, storm clouds, rain) based on real-time API states.
* **Environment Safeguards:** Keeps private development variables secure using `.env` configurations.

---

## 🛠️ Built With
* **React 18** (Functional hooks architecture)
* **Vite** (Next-generation lightning-fast frontend tooling)
* **FontAwesome React Icons** (Modern styling anchors)
* **WeatherAPI** (Comprehensive global meteorological metrics provider)
* **CSS3** (Custom flexbox layouts and semi-transparent glassmorphism backgrounds)

---

## 📦 Local Installation & Setup

Follow these simple steps to run this application locally on your desktop device:

### 1. Clone the Repository
```bash
git clone https://github.com
cd YOUR_REPOSITORY_NAME
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Configure Your Environment Keys
Create a brand new file named `.env` directly in the root directory of your project folder and add your personal API token:
```env
VITE_API_KEY=your_weatherapi_secret_key_here
```
> *Note: Make sure your `.gitignore` file includes `.env` so your private API keys are never leaked to public code histories.*

### 4. Boot Up the Local Development Server
```bash
npm run dev
```
Open your browser window and navigate to `http://localhost:5173` to see your running web app!

---

## 📂 Project Structure Snapshot
```text
├── public/                 # Static assets folder
├── src/
│   ├── assets/             # Theme illustrations and cloud backdrops
│   ├── components/
│   │   ├── SearchSection.jsx    # City form handlers and button bindings
│   │   ├── CurrentWeather.jsx   # Core temperature layouts
│   │   └── HourlyWeather.jsx    # Horizontal time iteration panels
│   ├── App.jsx             # Main architecture layout & API state controller
│   ├── index.css           # Global typography definitions
│   └── main.jsx            # Virtual DOM entry mounting script
├── .env                    # Private API keys (Hidden)
├── package.json            # Scripts and configuration modules
└── README.md               # Documentation guide
```

---

## 👨‍💻 Author

Mrunali Mohite  
Frontend Developer


## ⭐ Show Your Support

If you like this project, please ⭐ the repository!
## 📝 License
This project is licensed under the MIT License - feel free to modify and build upon it as you like!

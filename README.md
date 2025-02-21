# FreshSaver 

<div align="center">
  <img src="public/logo.png" alt="FreshSaver Logo" width="200"/>
  
  [![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white)](https://firebase.google.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🎯 About <a name="about"></a>
FreshSaver is an innovative web application that revolutionizes how users manage their food inventory. By combining barcode scanning technology with intelligent expiration tracking, the app helps reduce food waste and promotes sustainable consumption habits.

<div align="center">
  <img src="path/to/dashboard-screenshot.png" alt="FreshSaver Dashboard" width="800"/>
</div>

## ✨ Key Features <a name="key-features"></a>

### 1. Smart Inventory Management
- **Barcode Scanning Integration**
  - Quick product addition using device camera
  - Automatic product information retrieval
  - Manual entry option for unlisted items
  
<div align="center">
  <img src="path/to/barcode-scanning.gif" alt="Barcode Scanning Demo" width="300"/>
</div>

### 2. Expiration Tracking System
- **Intelligent Date Monitoring**
  - Visual countdown for each product
  - Color-coded status indicators
  - Customizable notification thresholds

<div align="center">
  <img src="path/to/expiration-tracking.png" alt="Expiration Tracking" width="600"/>
  <p><em>Expiration tracking dashboard showing products sorted by expiration date</em></p>
</div>

### 3. Smart Notifications
- **Multi-channel Alerts**
  - Email notifications
  - Push notifications
  - Customizable alert frequency

### 4. Recipe Recommendation Engine
- **AI-Powered Suggestions**
  - Personalized recipe recommendations
  - Ingredient-based matching
  - Difficulty level filtering

<div align="center">
  <img src="path/to/recipe-suggestions.png" alt="Recipe Suggestions" width="600"/>
  <p><em>Recipe recommendations based on expiring ingredients</em></p>
</div>

## 🎬 Live <a name="demo"></a>
[View Live Deployment Here](https://fresh-saver.vercel.app/)

## 🛠 Technology Stack <a name="technology-stack"></a>

### Frontend
- **React**
- **Tailwind CSS**

### Backend (Firebase)
- **Authentication**
  - Email/Password
  - Google Sign-in
- **Firestore**
  - Real-time updates
  - Data validation

### External APIs
- **Open Food Facts API**
  - Product information
- **Edamam API**
  - Recipe suggestions
  - Ingredient matching

## 🚀 Getting Started <a name="getting-started"></a>

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Geethika-Kancharla/FreshSaver.git
   cd FreshSaver
   ```

2. **Environment Setup**
   ```bash
   touch .env
   ```
   Fill in your Firebase and API credentials in the .env file:
   ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm start
   ```

## 📁 Project Structure <a name="project-structure"></a>
```
Freshsaver/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── utils/
├── App.js
├── index.js
└── index.css
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```


## 📄 License <a name="license"></a>
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

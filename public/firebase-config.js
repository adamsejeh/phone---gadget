// ==========================================
// M-Gadgets Firebase Configuration & Setup
// ==========================================

// 1. Replace the placeholder values below with your Firebase Config keys:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Global Firebase references
let db = null;
let auth = null;

/**
 * Initializes Firebase App, Firestore, and Authentication.
 */
function initFirebase() {
  if (firebaseConfig.apiKey === "YOUR_API_KEY") {
    console.warn("⚠️ Firebase is using placeholder keys. Please update firebase-config.js with your real Firebase keys.");
    return false;
  }

  try {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    db = firebase.firestore();
    auth = firebase.auth();
    console.log("⚡ Firebase connected successfully!");
    return true;
  } catch (error) {
    console.error("❌ Firebase initialization error:", error);
    return false;
  }
}

// Export for app.js usage
window.firebaseConfig = firebaseConfig;
window.initFirebase = initFirebase;

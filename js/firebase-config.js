// ===== Firebase configuration =====
// STEP: Firebase Console -> Project settings -> Your apps -> Web app (</>) -> copy the config.
// Paste YOUR values below, replacing the placeholders. (This config is public by design;
// your data is protected by Firestore Security Rules, not by hiding this.)
// NEVER put an Admin SDK / service-account key in this project.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyBoPYmbH4SgCQHsQD6YRbxF4CMGfZRmjXs",
  authDomain: "saffron-bf5ba.firebaseapp.com",
  projectId: "saffron-bf5ba",
  storageBucket: "saffron-bf5ba.firebasestorage.app",
  messagingSenderId: "55479998306",
  appId: "1:55479998306:web:3f3500a4424e09287b3e3b",
  measurementId: "G-1C1XMG4LCP"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoPYmbH4SgCQHsQD6YRbxF4CMGfZRmjXs",
  authDomain: "saffron-bf5ba.firebaseapp.com",
  projectId: "saffron-bf5ba",
  storageBucket: "saffron-bf5ba.firebasestorage.app",
  messagingSenderId: "55479998306",
  appId: "1:55479998306:web:3f3500a4424e09287b3e3b",
  measurementId: "G-1C1XMG4LCP"
};

export const isConfigured = !firebaseConfig.apiKey.startsWith("PASTE");

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
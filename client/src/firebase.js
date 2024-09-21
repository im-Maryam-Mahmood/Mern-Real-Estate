// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import dotenv from 'dotenv';

// dotenv.config();
const firebaseConfig = {
  apikey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-37227.firebaseapp.com",
  projectId: "real-estate-37227",
  storageBucket: "real-estate-37227.appspot.com",
  messagingSenderId: "799942725574",
  appId: "1:799942725574:web:467f0dc714a46e61fcecc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
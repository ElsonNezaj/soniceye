// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1M47wxnuLMqOWozZgQfSJw0uz5l3mYcA",
  authDomain: "soniceye-919f6.firebaseapp.com",
  projectId: "soniceye-919f6",
  storageBucket: "soniceye-919f6.appspot.com",
  messagingSenderId: "235053582067",
  appId: "1:235053582067:web:46dbf5824633cda5339986",
  measurementId: "G-EHDFCDS3JY",
  databaseURL:
    "https://soniceye-919f6-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

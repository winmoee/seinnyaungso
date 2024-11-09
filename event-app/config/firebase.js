// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxNF97nLWb0E_Li9-1rfX9UHvVqFO6PcE",
  authDomain: "seinnyaungso.firebaseapp.com",
  projectId: "seinnyaungso",
  storageBucket: "seinnyaungso.firebasestorage.app",
  messagingSenderId: "1008924851450",
  appId: "1:1008924851450:web:85c963379864fa45e89d43",
  measurementId: "G-X6TCCRKM71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
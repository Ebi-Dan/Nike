
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAAIDWsmhUKtNHhW6MDL9btm9TRjDgV7rk",
  authDomain: "user-dashboard-99a0b.firebaseapp.com",
  projectId: "user-dashboard-99a0b",
  storageBucket: "user-dashboard-99a0b.appspot.com",
  messagingSenderId: "300032334992",
  appId: "1:300032334992:web:d5058341c4a8d28eae4c15",
  measurementId: "G-7MF48LXFLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYAfWhWP1GYIpWXZyx-NOPaV9xhwq7OYc",
  authDomain: "zchatapp-a97b2.firebaseapp.com",
  projectId: "zchatapp-a97b2",
  storageBucket: "zchatapp-a97b2.appspot.com",
  messagingSenderId: "407479204217",
  appId: "1:407479204217:web:8a0bf88379f6434bc057a8"
};

// Initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
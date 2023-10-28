import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1K6FbzaTlJ8gB7rov3d_BGyg6mFSNC-c",
  authDomain: "chat-d5b6d.firebaseapp.com",
  projectId: "chat-d5b6d",
  storageBucket: "chat-d5b6d.appspot.com",
  messagingSenderId: "727342513360",
  appId: "1:727342513360:web:c2f717538f9f2df498b2d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDADvJYvN_JOU9FykuEwO_oLn79uk-akPY",
  authDomain: "instavibe-93a29.firebaseapp.com",
  projectId: "instavibe-93a29",
  storageBucket: "instavibe-93a29.appspot.com",
  messagingSenderId: "106128664104",
  appId: "1:106128664104:web:c0b446096b50f71635b71d",
  measurementId: "G-XPVMVCSZCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 
import { getStorage } from "firebase/storage"; // Import storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_yaY8-GNf1JplTpO3PFHbGbxilXtNmoo",
  authDomain: "blogproject-6dee1.firebaseapp.com",
  projectId: "blogproject-6dee1",
  storageBucket: "blogproject-6dee1.appspot.com",
  messagingSenderId: "719495072032",
  appId: "1:719495072032:web:6aaa27b98156a46c4aaf45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
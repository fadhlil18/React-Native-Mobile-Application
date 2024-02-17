// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';





const firebaseConfig = {
  apiKey: "AIzaSyDzFdy5-Sxj_t2GFx7r-1GPHP5APqLZwJQ",
  authDomain: "apmob-fad7f.firebaseapp.com",
  projectId: "apmob-fad7f",
  storageBucket: "apmob-fad7f.appspot.com",
  messagingSenderId: "600202344489",
  appId: "1:600202344489:web:27be5eb8bfe31df9a44438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);



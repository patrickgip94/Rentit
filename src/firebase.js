// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOHRJx9pcI183TaOXQN6hPbotgWHD0X24",
  authDomain: "rentit-4cbba.firebaseapp.com",
  projectId: "rentit-4cbba",
  storageBucket: "rentit-4cbba.appspot.com",
  messagingSenderId: "105209913221",
  appId: "1:105209913221:web:c5029985127c14abbbaeec",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

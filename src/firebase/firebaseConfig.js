// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RwgAKzSrO3MFl96G_gUwK7CKthA1RGs",
  authDomain: "car-doctor-b07ce.firebaseapp.com",
  projectId: "car-doctor-b07ce",
  storageBucket: "car-doctor-b07ce.appspot.com",
  messagingSenderId: "401717772386",
  appId: "1:401717772386:web:ce65483f3d9a2995f9913b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

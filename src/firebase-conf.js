// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKvBhh5LzEWCZrvA0ye5L74z9yvkXZaZA",
  authDomain: "login-react-firebase-19640.firebaseapp.com",
  projectId: "login-react-firebase-19640",
  storageBucket: "login-react-firebase-19640.appspot.com",
  messagingSenderId: "231913022245",
  appId: "1:231913022245:web:9f6539e633581cd1a170cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
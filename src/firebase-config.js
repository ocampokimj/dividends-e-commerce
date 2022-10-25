// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChwKODgDr6GEqrF6uuThpKg_AipJ-ofD8",
  authDomain: "dividends-shopping.firebaseapp.com",
  projectId: "dividends-shopping",
  storageBucket: "dividends-shopping.appspot.com",
  messagingSenderId: "890571461663",
  appId: "1:890571461663:web:425863b20fb4d3332fb12a",
  measurementId: "G-8RH057LZ26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
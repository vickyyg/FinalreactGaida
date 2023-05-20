// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuC7tQvCirCqDKeT-YCyvstDbjxODP9Qw",
  authDomain: "green-grow-shop.firebaseapp.com",
  projectId: "green-grow-shop",
  storageBucket: "green-grow-shop.appspot.com",
  messagingSenderId: "1078861469016",
  appId: "1:1078861469016:web:610e2e84c7940abfdc812d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
// import firebase from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// //authentication 
// import {getAuth} from "firebase/auth"
// import "firebase/compact/firestore"
// import "firebase/compact/auth"
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDxE46nbPShld2FHyFVZD18KT2jLL5Jr-U",
//   authDomain: "clone-2e9c9.firebaseapp.com",
//   projectId: "clone-2e9c9",
//   storageBucket: "clone-2e9c9.firebasestorage.app",
//   messagingSenderId: "187016754380",
//   appId: "1:187016754380:web:610b6bf4553e001234fe69",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = app.firestore()




// Import the necessary Firebase modules from Firebase v9+ SDK

import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxE46nbPShld2FHyFVZD18KT2jLL5Jr-U",
  authDomain: "clone-2e9c9.firebaseapp.com",
  projectId: "clone-2e9c9",
  storageBucket: "clone-2e9c9.firebasestorage.app",
  messagingSenderId: "187016754380",
  appId: "1:187016754380:web:610b6bf4553e001234fe69",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Auth and Firestore
export const auth = getAuth(app); // Auth initialization
// export const db = getFirestore(app); // Firestore initialization
export const db = app.firestore();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_APIKEY,
  authDomain: "syntaxpunkdotcom.firebaseapp.com",
  projectId: "syntaxpunkdotcom",
  storageBucket: "syntaxpunkdotcom.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_GOOGLE_MESSAGING_APPID,
  measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
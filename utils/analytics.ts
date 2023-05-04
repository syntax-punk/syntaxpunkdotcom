// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let app:FirebaseApp, analytics: Analytics;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6OX-sDY6TL8KhSuepKucjZzcbx0ZGls",
  authDomain: "syntaxpunkdotcom.firebaseapp.com",
  projectId: "syntaxpunkdotcom",
  storageBucket: "syntaxpunkdotcom.appspot.com",
  messagingSenderId: "1026037541383",
  appId: "1:1026037541383:web:bab19facc56b7dec1b18a2",
  measurementId: "G-GJNXH3T6N1"
};

const initAnalytics = (): { app: any, analytics: any} => {
  // Initialize Firebase
  if (!app) app = initializeApp(firebaseConfig);
  if (!analytics) analytics = getAnalytics(app);
  
  return { app, analytics };
}

export { initAnalytics }
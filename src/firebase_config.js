// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAwUoQVp1vFLNLaUM3-pqzaqcGDKN1xCU",
  authDomain: "learn-with-firebase.firebaseapp.com",
  databaseURL: "https://learn-with-firebase-default-rtdb.firebaseio.com",
  projectId: "learn-with-firebase",
  storageBucket: "learn-with-firebase.appspot.com",
  messagingSenderId: "464801240094",
  appId: "1:464801240094:web:d201ca32af161e28fd0a0f",
  measurementId: "G-EY9R8R5Z4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
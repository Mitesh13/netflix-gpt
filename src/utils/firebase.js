// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC47gaif20hMJfI2Yu4goyaMGB7HLO_zfw",
  authDomain: "netflixgpt-d9f1e.firebaseapp.com",
  projectId: "netflixgpt-d9f1e",
  storageBucket: "netflixgpt-d9f1e.appspot.com",
  messagingSenderId: "252899878650",
  appId: "1:252899878650:web:7ba2f5190c9239215bcb43",
  measurementId: "G-XNSES3V8DP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();

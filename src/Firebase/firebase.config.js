// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3mWVdgLSNNFaFX4IHYIDGcOZDGFNSpIU",
  authDomain: "genius-gala.firebaseapp.com",
  projectId: "genius-gala",
  storageBucket: "genius-gala.appspot.com",
  messagingSenderId: "372254583485",
  appId: "1:372254583485:web:e91a008909d863ff3325d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
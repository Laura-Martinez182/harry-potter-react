// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzaq0_rWu3c61lilBRUBNUw6dNrUr4yfU",
  authDomain: "harry-potter-react.firebaseapp.com",
  projectId: "harry-potter-react",
  storageBucket: "harry-potter-react.appspot.com",
  messagingSenderId: "1088834081599",
  appId: "1:1088834081599:web:05ca6aa0c36b5d2c2ff98a",
  measurementId: "G-CF8PRYXP9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
//const analytics = getAnalytics(app);
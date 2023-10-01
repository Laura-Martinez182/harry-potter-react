import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDzaq0_rWu3c61lilBRUBNUw6dNrUr4yfU",
  authDomain: "harry-potter-react.firebaseapp.com",
  projectId: "harry-potter-react",
  storageBucket: "harry-potter-react.appspot.com",
  messagingSenderId: "1088834081599",
  appId: "1:1088834081599:web:05ca6aa0c36b5d2c2ff98a",
  measurementId: "G-CF8PRYXP9L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
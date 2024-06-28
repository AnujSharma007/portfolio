import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCA9VX2Q7c13LpdKnEJkbrZVYAiirBGrpw",
  authDomain: "anuj-sharma-portfolio.firebaseapp.com",
  projectId: "anuj-sharma-portfolio",
  storageBucket: "anuj-sharma-portfolio.appspot.com",
  messagingSenderId: "289377900966",
  appId: "1:289377900966:web:9e91fc7d71a068fafc1767",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

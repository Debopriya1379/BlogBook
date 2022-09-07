import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBO7IUkViKnHTzDt5FOhoON658M9-s-cLM",
  authDomain: "blogbook3.firebaseapp.com",
  projectId: "blogbook3",
  storageBucket: "blogbook3.appspot.com",
  messagingSenderId: "144623047182",
  appId: "1:144623047182:web:bc9f2e39a51e87797de25f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;
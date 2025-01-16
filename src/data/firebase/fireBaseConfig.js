import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVj0KwSIi9fFQYp5DciSiD1ilb0IcsXxU",
  authDomain: "phrasess.firebaseapp.com",
  projectId: "phrasess",
  storageBucket: "phrasess.firebasestorage.app",
  messagingSenderId: "1043268721120",
  appId: "1:1043268721120:web:2339d93621e8405a20f385"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
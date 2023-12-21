import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC3kjvswx_iJ6Fl21NidJPSGoXWkU0P8PM",
  authDomain: "gifsearch-db33f.firebaseapp.com",
  projectId: "gifsearch-db33f",
  storageBucket: "gifsearch-db33f.appspot.com",
  messagingSenderId: "124735573748",
  appId: "1:124735573748:web:789c0292db983c3ff558a1",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
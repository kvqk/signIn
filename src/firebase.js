import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALHexYPDFq4UE689Qn8dmeDgHJV0Mw3TM",
  authDomain: "form-56db3.firebaseapp.com",
  projectId: "form-56db3",
  storageBucket: "form-56db3.appspot.com",
  messagingSenderId: "472748448663",
  appId: "1:472748448663:web:8566f53c460e2c1d3e02d2",
  measurementId: "G-E6PE7MF6PH",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

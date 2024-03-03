import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlZibLufhyRTauJsZQnwrPtdJwqd1nq-0",
  authDomain: "karmify-eea6a.firebaseapp.com",
  projectId: "karmify-eea6a",
  storageBucket: "karmify-eea6a.appspot.com",
  messagingSenderId: "492857403083",
  appId: "1:492857403083:web:e8771778faaf177a56dd4e",
  measurementId: "G-PN8L6VSM3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


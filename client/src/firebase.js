import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDQsGI6-xBLiEpfKJcQiGjIrGT3ncEdAs",
  authDomain: "bitter-8d97a.firebaseapp.com",
  projectId: "bitter-8d97a",
  storageBucket: "bitter-8d97a.appspot.com",
  messagingSenderId: "594880475499",
  appId: "1:594880475499:web:d43b9f31f92d0b5897dc2e",
  measurementId: "G-B8QJ7NM8DJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

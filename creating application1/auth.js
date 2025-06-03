
// auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

// Replace with YOUR Firebase config
 const firebaseConfig = {
    apiKey: "AIzaSyBz_eWtXFMH2FCABDVLyPoyLr3MluY9-JI",
    authDomain: "ricky-and-morty-953cd.firebaseapp.com",
    databaseURL: "https://ricky-and-morty-953cd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ricky-and-morty-953cd",
    storageBucket: "ricky-and-morty-953cd.firebasestorage.app",
    messagingSenderId: "897933415568",
    appId: "1:897933415568:web:be2729aac24ec7145cf415",
    measurementId: "G-3R9W2B58HX"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Assign default role 'user' to new users
  await setDoc(doc(db, 'users', userCredential.user.uid), { role: 'user', email });
  return userCredential.user;
}

async function signIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

async function logout() {
  await signOut(auth);
}

function onAuthChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const role = userDoc.exists() ? userDoc.data().role : null;
      callback({ uid: user.uid, email: user.email, role });
    } else {
      callback(null);
    }
  });
}

export { signUp, signIn, logout, onAuthChange };

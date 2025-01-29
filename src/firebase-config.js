import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAuth } from 'firebase/auth'; // Import Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDGBo4SnN8ALh3GEQjuTdKQFpLGII4RKPw",
  authDomain: "bnf-bans.firebaseapp.com",
  projectId: "bnf-bans",
  storageBucket: "bnf-bans.firebasestorage.app",
  messagingSenderId: "639440833000",
  appId: "1:639440833000:web:4205410fec75804b9afc5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Firebase Auth instance

// Export both `db` and `auth` explicitly
export { db, auth }; // Named exports for Firestore and Auth
export default app; // Default export for the app instance

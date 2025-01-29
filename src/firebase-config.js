// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export default app;
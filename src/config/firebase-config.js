import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyAWlm0O_4A4KWPqABbArUL4eVHhfprG5ow",
  authDomain:"erelax-1e3e1.firebaseapp.com",
  projectId: process.env.PROJECT_ID,
  storageBucket:process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: "1:75838744815:web:577a5204d40caf6733531a",
};

// Initialize Firebase
const app = initializeApp(firebase-config);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

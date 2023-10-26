import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWlm0O_4A4KWPqABbArUL4eVHhfprG5ow",
  authDomain: "erelax-1e3e1.firebaseapp.com",
  projectId: "erelax-1e3e1",
  storageBucket: "erelax-1e3e1.appspot.com",
  messagingSenderId: "75838744815",
  appId: "1:75838744815:web:577a5204d40caf6733531a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
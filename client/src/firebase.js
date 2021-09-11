import firebase from 'firebase/app';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  /*
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_REGISTER_REDIRECT_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  */
  
  apiKey: "AIzaSyArpDeNJqk7s6R6LvOVYShqqwm06_ztqXU",
  authDomain: "ecommerce-bede1.firebaseapp.com",
  projectId: "ecommerce-bede1",
  storageBucket: "ecommerce-bede1.appspot.com",
  messagingSenderId: "964130333702",
  appId: "1:964130333702:web:57b6a97db4551facfccf87"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

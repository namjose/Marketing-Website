import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbva8X-XNYil5J9rGkn3H02Wdte24dNlM",
  authDomain: "testproject-b28f5.firebaseapp.com",
  databaseURL: "https://testproject-b28f5.firebaseio.com",
  projectId: "testproject-b28f5",
  storageBucket: "",
  messagingSenderId: "968721282091",
  appId: "1:968721282091:web:058491fb27b33e5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => {
  localStorage.setItem("auth", false);
  auth.signOut();
};

export default firebase;

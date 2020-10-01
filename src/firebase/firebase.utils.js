import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBC90fO4SPY02_65mmKqrfylO-KW2YNK_8",
  authDomain: "crwnshop-db.firebaseapp.com",
  databaseURL: "https://crwnshop-db.firebaseio.com",
  projectId: "crwnshop-db",
  storageBucket: "crwnshop-db.appspot.com",
  messagingSenderId: "517522819067",
  appId: "1:517522819067:web:db2f4e74089b1ecdab6d5e",
  measurementId: "G-9Y1TQTSK4S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

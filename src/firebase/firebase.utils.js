import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBz_Hjp82pX2xRRQuY1BtfTG0l0ud_J6uM",
  authDomain: "react-e-commerce-d540e.firebaseapp.com",
  databaseURL: "https://react-e-commerce-d540e.firebaseio.com",
  projectId: "react-e-commerce-d540e",
  storageBucket: "react-e-commerce-d540e.appspot.com",
  messagingSenderId: "963200218889",
  appId: "1:963200218889:web:c411a73f5846d8479c45d8",
  measurementId: "G-THVBN0TDM2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

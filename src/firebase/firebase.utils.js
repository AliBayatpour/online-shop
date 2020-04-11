import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCoF70Q8YbZyCL1PlEvN3Js5esnWpe47Ck",
  authDomain: "online-shop-fadfc.firebaseapp.com",
  databaseURL: "https://online-shop-fadfc.firebaseio.com",
  projectId: "online-shop-fadfc",
  storageBucket: "online-shop-fadfc.appspot.com",
  messagingSenderId: "745182097708",
  appId: "1:745182097708:web:65b46d000fd374e5c2fc89",
  measurementId: "G-33HWCBK7N1",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

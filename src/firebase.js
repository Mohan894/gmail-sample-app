// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDHp8A_DR5s3aW2LtF8XBizyuRl05Abp0",
    authDomain: "fir-40a7f.firebaseapp.com",
    projectId: "fir-40a7f",
    storageBucket: "fir-40a7f.appspot.com",
    messagingSenderId: "35846629973",
    appId: "1:35846629973:web:608b1fcbdbace3993142dc",
    measurementId: "G-VHXGVFL4B8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
import firebase from 'firebase/app';
 

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDOjiPOtZXInxaANGl6RiZRCe8-IFVQ_X8",
    authDomain: "royal-db-9eae7.firebaseapp.com",
    projectId: "royal-db-9eae7",
    storageBucket: "royal-db-9eae7.appspot.com",
    messagingSenderId: "825578620592",
    appId: "1:825578620592:web:310cfacadfe1223fe6dd75",
    measurementId: "G-0RM087WGT3"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider(); 
 provider.setCustomParameters({prompt:'select_account'});
 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8bnTb4nn09RTBzjtVUkn7UZ0BOvtHqyI",
    authDomain: "meetapp-prueba.firebaseapp.com",
    projectId: "meetapp-prueba",
    storageBucket: "meetapp-prueba.appspot.com",
    messagingSenderId: "565202488631",
    appId: "1:565202488631:web:00d27f92374aeee1c01eb2"
};

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const phoneProvider = new firebase.auth.PhoneAuthProvider();
export {
    firebase,
    db,
    firebaseConfig,
    phoneProvider,
}
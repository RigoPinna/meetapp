import * as firebase from 'firebase';
//Este es de pruena
// const firebaseConfig = {
//     apiKey: "AIzaSyDfxYpnQuTqbuXZdn-DULUsu268Gne2AZM",
//     authDomain: "meet-2bd40.firebaseapp.com",
//     projectId: "meet-2bd40",
//     storageBucket: "meet-2bd40.appspot.com",
//     messagingSenderId: "693777748003",
//     appId: "1:693777748003:web:a026d8a8abba7d32a6a196"
  // };
//Esta es la configuración que debe de usar
const firebaseConfig = {
    apiKey: "AIzaSyC8bnTb4nn09RTBzjtVUkn7UZ0BOvtHqyI",
    authDomain: "meetapp-prueba.firebaseapp.com",
    projectId: "meetapp-prueba",
    storageBucket: "meetapp-prueba.appspot.com",
    messagingSenderId: "565202488631",
    appId: "1:565202488631:web:00d27f92374aeee1c01eb2"
};
( firebase.apps.length === 0 ) && firebase.initializeApp( firebaseConfig );

const userStatic = 
  {
    uid:'dfX6rT1pCEDGEZ41sfut',
    image:'https://comunidav.org/php/api/Images/avatar.jpg',
    name: 'Ralph Edwards',
    phone: '(480) 555-0103'
  }
const storage = firebase.storage()
const db = firebase.firestore();
const phoneProvider = new firebase.auth.PhoneAuthProvider();
export {
    firebase,
    db,
    storage,
    firebaseConfig,
    phoneProvider,
    userStatic
}
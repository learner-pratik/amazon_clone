import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDU1wISNjnqP2YllsOpfj0kXT86JOxwotk",
    authDomain: "clone-react-2d2fa.firebaseapp.com",
    projectId: "clone-react-2d2fa",
    storageBucket: "clone-react-2d2fa.appspot.com",
    messagingSenderId: "48980964952",
    appId: "1:48980964952:web:c44171c6c12845f4067c2d",
    measurementId: "G-787ER5Q2GY"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
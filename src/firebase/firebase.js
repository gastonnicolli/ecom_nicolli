import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBh_R14C4mXjn2Ly7ktQrmpZnkShu3e5QI",
    authDomain: "ecommdietetica.firebaseapp.com",
    projectId: "ecommdietetica",
    storageBucket: "ecommdietetica.appspot.com",
    messagingSenderId: "650795844312",
    appId: "1:650795844312:web:4bd4e6d9c42259e2e80dad"
})

export const getFirebase = () =>  app

export const getFirestore = () => firebase.firestore(app)

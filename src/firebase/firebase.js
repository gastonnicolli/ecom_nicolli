import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    
    // apiKey: "AIzaSyBUdezx15d3iX-KbgC4THipgCd3aYO5aC8",
    // authDomain: "ediet-98583.firebaseapp.com",
    // projectId: "ediet-98583",
    // storageBucket: "ediet-98583.appspot.com",
    // messagingSenderId: "182416197740",
    // appId: "1:182416197740:web:56f3fb46bf2abfa1377049"

    apiKey: "AIzaSyBh_R14C4mXjn2Ly7ktQrmpZnkShu3e5QI",
    authDomain: "ecommdietetica.firebaseapp.com",
    projectId: "ecommdietetica",
    storageBucket: "ecommdietetica.appspot.com",
    messagingSenderId: "650795844312",
    appId: "1:650795844312:web:4bd4e6d9c42259e2e80dad"


    //Credenciales Benjamin 
    //apiKey: "AIzaSyCxqpR8RDnzKXDZTm3u9zIY3cFMYxoE4xM",
    // authDomain: "books-online-ch.firebaseapp.com",
    // projectId: "books-online-ch",
    // storageBucket: "books-online-ch.appspot.com",
    // messagingSenderId: "135002544176",
    // appId: "1:135002544176:web:460a54b6c1ad5f89f0f5f5",
})

export const getFirebase = () =>  app

export const getFirestore = () => firebase.firestore(app)

//  Credenciales Gaston
//  apiKey: "AIzaSyBh_R14C4mXjn2Ly7ktQrmpZnkShu3e5QI",
//     authDomain: "ecommdietetica.firebaseapp.com",
//     projectId: "ecommdietetica",
//     storageBucket: "ecommdietetica.appspot.com",
//     messagingSenderId: "650795844312",
//     appId: "1:650795844312:web:4bd4e6d9c42259e2e80dad"
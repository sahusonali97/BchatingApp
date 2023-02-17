import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
    firebase.initializeApp({

        apiKey: "AIzaSyDzvXfrsqLc08ywM64ixLgMUSmi4Ig83Es",
        authDomain: "b-chat-94d00.firebaseapp.com",
        projectId: "b-chat-94d00",
        storageBucket: "b-chat-94d00.appspot.com",
        messagingSenderId: "357888034304",
        appId: "1:357888034304:web:992a034540cb2e225bfae5"
    });
} catch (error) {
    if (!/already exists/u.test(error.message)) {
        console.error('firebase admin init error', error.stack);
    }
}

export const fb = {
    auth: firebase.auth(),
    storage: firebase.storage(),
    firestore: firebase.firestore()
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
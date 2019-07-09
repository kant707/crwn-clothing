import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJNEoLqC9YZd7yDH8vq-nsvnvcZn7XhYs",
    authDomain: "crwn-db-ad5c2.firebaseapp.com",
    databaseURL: "https://crwn-db-ad5c2.firebaseio.com",
    projectId: "crwn-db-ad5c2",
    storageBucket: "",
    messagingSenderId: "549988134581",
    appId: "1:549988134581:web:771e180c252cb4db"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
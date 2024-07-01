import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSvXb4zRb92i26y0pgXn4aNgtfS8PUW24",
    authDomain: "drive-yt-f28a6.firebaseapp.com",
    projectId: "drive-yt-f28a6",
    storageBucket: "drive-yt-f28a6.appspot.com",
    messagingSenderId: "487969975638",
    appId: "1:487969975638:web:34a317231636bcefd97af7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }
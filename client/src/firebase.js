import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVXm-nP3R7RroB8nv8SdAahO0apyImDiA",
  authDomain: "ig-clone-react-dd646.firebaseapp.com",
  databaseURL: "https://ig-clone-react-dd646-default-rtdb.firebaseio.com",
  projectId: "ig-clone-react-dd646",
  storageBucket: "ig-clone-react-dd646.appspot.com",
  messagingSenderId: "359733319371",
  appId: "1:359733319371:web:8d8e86b1e2e120cc2e6d4e",
  measurementId: "G-FQDJEJL6XQ"
});

// database access
const db = firebaseApp.firestore();

// authication access
const auth = firebase.auth();

// store data in db
const storage = firebase.storage();

export { db, auth, storage }
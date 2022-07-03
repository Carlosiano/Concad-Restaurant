import firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC5W7nPPR4pBawdJvUMgDQmz8pbWjAfsJ8",
  authDomain: "db-final-project-2976c.firebaseapp.com",
  databaseURL: "https://db-final-project-2976c-default-rtdb.firebaseio.com",
  projectId: "db-final-project-2976c",
  storageBucket: "db-final-project-2976c.appspot.com",
  messagingSenderId: "335731304350",
  appId: "1:335731304350:web:6d3a18086e5406b42e988f",
  measurementId: "G-KJD4NN4CB4",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase

export { auth, storage, db, fs };

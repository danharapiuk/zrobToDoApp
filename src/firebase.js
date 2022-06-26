import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBURhaXLPQ8EYOd_gh_RLfhr17igAk-iu4",
  authDomain: "todo-list-ebe9b.firebaseapp.com",
  databaseURL: "https://todo-list-ebe9b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-ebe9b",
  storageBucket: "todo-list-ebe9b.appspot.com",
  messagingSenderId: "433156406736",
  appId: "1:433156406736:web:873ae57e9f4c8f17528dd5"
});

const db = getFirestore(firebaseApp);

export default db;
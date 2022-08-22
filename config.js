//import firebase from firebase;
//require("@firebase/firestore");
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAvMVGo8JdDGWV4YCQkuZeLULOKzPVle_g",
  authDomain: "login-fe171.firebaseapp.com",
  databaseURL: "https://login-fe171.firebaseio.com",
  projectId: "login-fe171",
  storageBucket: "login-fe171.appspot.com",
  messagingSenderId: "683158792412",
  appId: "1:683158792412:web:8b02a35869071e14686c19"
};

const app=initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db;
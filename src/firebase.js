import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwUUjxK03eir6zBLrnRi90FuXl3iB1nag",
  authDomain: "twotruthsoneliegame.firebaseapp.com",
  projectId: "twotruthsoneliegame",
  storageBucket: "twotruthsoneliegame.appspot.com",
  messagingSenderId: "47547899762",
  appId: "1:47547899762:web:009cbb1791dd4680e9c7eb",
  measurementId: "G-0TG2XZZCV5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const config = firebaseConfig;

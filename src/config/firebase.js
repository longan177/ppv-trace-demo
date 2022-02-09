import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const main = {
  apiKey: "AIzaSyCFE9wEX9Jis_4DmVRTnU9jBv6YjrC0Wmk",
  authDomain: "kkm-kota-belud-trace.firebaseapp.com",
  databaseURL: "https://kkm-kota-belud-trace-default-rtdb.firebaseio.com",
  projectId: "kkm-kota-belud-trace",
  storageBucket: "kkm-kota-belud-trace.appspot.com",
  messagingSenderId: "569177481031",
  appId: "1:569177481031:web:cead9678fbf8eb0ed6f662",
  measurementId: "G-LWD6YS31N2",
};
const app = firebase.initializeApp(main);

// Initialize Firebase
export const auth = app.auth();
export const fs = firebase.firestore();
export const storage = firebase.storage();
export default app;

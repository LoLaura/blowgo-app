import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeQ67AX35AcUuYDR7uw50E7rAVyXIFy68",
    authDomain: "fireblogs-24d22.firebaseapp.com",
    projectId: "fireblogs-24d22",
    storageBucket: "fireblogs-24d22.appspot.com",
    messagingSenderId: "285982459949",
    appId: "1:285982459949:web:3134718129cb96a17b90a4",
    measurementId: "G-FEHBMJD72J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp;
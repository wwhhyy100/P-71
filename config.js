import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCKe5bHOiZ_0nqO8Wwnfg-bnEHHaLek1rA",
    authDomain: "p-71-6245a.firebaseapp.com",
    projectId: "p-71-6245a",
    storageBucket: "p-71-6245a.appspot.com",
    messagingSenderId: "67354709335",
    appId: "1:67354709335:web:c3da4a5cb82bb3db804212"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDF6Xd7XOT4E1fMLrSLAfdQDKJFXHCT_n8",
  authDomain: "project-71-da251.firebaseapp.com",
  projectId: "project-71-da251",
  storageBucket: "project-71-da251.appspot.com",
  messagingSenderId: "744625569796",
  appId: "1:744625569796:web:702a0c1f66d0af876f7551"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

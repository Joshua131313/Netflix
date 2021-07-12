
import firebase from 'firebase'

const  firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyAE5pj8XR83TWMQWsTDxq7Ywsob9Z0h_88",
    authDomain: "netflix-clone-67dd0.firebaseapp.com",
    projectId: "netflix-clone-67dd0",
    storageBucket: "netflix-clone-67dd0.appspot.com",
    messagingSenderId: "118356868062",
    appId: "1:118356868062:web:4133626f884119bc703b4f",
    measurementId: "G-Z4T3EKLQYG"
});

const db= firebaseApp.firestore()
const Fire = firebaseApp
export  {db, Fire}

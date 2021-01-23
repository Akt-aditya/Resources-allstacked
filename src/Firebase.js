// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBrgw5hOz1IyIPpzc6CWQHZzHCjOxo13Es",
  authDomain: "resorcesallstacked.firebaseapp.com",
  projectId: "resorcesallstacked",
  storageBucket: "resorcesallstacked.appspot.com",
  messagingSenderId: "40419943523",
  appId: "1:40419943523:web:7b8b7a39d87802ab8b8456",
  measurementId: "G-NCLC5Y3SB4"
};
const app = firebase.initializeApp({
 apiKey: firebaseConfig.apiKey,
 authDomain: firebaseConfig.authDomain,
 projectId : firebaseConfig.projectId,
 storageBucket: firebaseConfig.storageBucket,
 messagingSenderId: firebaseConfig.messagingSenderId,
 appId: firebaseConfig.appId,
 measurementId: firebaseConfig.measurementId
})
export const auth = app.auth();
{/*firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });*/}
  export default app;
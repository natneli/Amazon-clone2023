
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyBK5qlOVDVqzbghrWpYWhW9uULU3Ur1rhM",
//   authDomain: "nat-4ed21.firebaseapp.com",
//   projectId: "nat-4ed21",
//   storageBucket: "nat-4ed21.appspot.com",
//   messagingSenderId: "332182006511",
//   appId: "1:332182006511:web:0790bbabb539b03dfac91a",
//   measurementId: "G-3B27E44T88",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = app.firestore();


// export { auth, db };

// Another option
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//  import {initializeApp} from "firebase/app";
//  import {getAuth }from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBK5qlOVDVqzbghrWpYWhW9uULU3Ur1rhM",
  authDomain: "nat-4ed21.firebaseapp.com",
  projectId: "nat-4ed21",
  storageBucket: "nat-4ed21.appspot.com",
  messagingSenderId: "332182006511",
  appId: "1:332182006511:web:0790bbabb539b03dfac91a",
  measurementId: "G-3B27E44T88",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD-xL007ekVk9v0N20uRX6V55qLp8EkpR0",
//   authDomain: "nat-clone.firebaseapp.com",
//   projectId: "nat-clone",
//   storageBucket: "nat-clone.appspot.com",
//   messagingSenderId: "608764121258",
//   appId: "1:608764121258:web:80261597a48aba82ebc0d3",
//   measurementId: "G-C8V7VMLWG2",
// };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth= firebase.auth() ;
const db = app.firestore();

export {auth, db}

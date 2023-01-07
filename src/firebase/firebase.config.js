// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDI2Ovoowwh5Z2BEsuXZqxrM-f0BQFROmA",
  authDomain: "variety-furnishing.firebaseapp.com",
  projectId: "variety-furnishing",
  storageBucket: "variety-furnishing.appspot.com",
  messagingSenderId: "768887647124",
  appId: "1:768887647124:web:37e02479971b281e6e3d81"


  // apiKey: process.env.REACT_APP_apiKey, 
  // authDomain: process.env.REACT_APP_authDomain, 
  // projectId: process.env.REACT_APP_projectId, 
  // storageBucket: process.env.REACT_APP_storageBucket, 
  // messagingSenderId: process.env.REACT_APP_messagingSenderId, 
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
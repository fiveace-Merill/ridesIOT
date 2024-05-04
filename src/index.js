// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from 'firebase/firestore'
import { 
  getAuth,  
} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDWYjSMGFrBrdsrPxTvQz034WVkmJg0ns",
  authDomain: "ridesiot.firebaseapp.com",
  projectId: "ridesiot",
  storageBucket: "ridesiot.appspot.com",
  messagingSenderId: "512878002125",
  appId: "1:512878002125:web:b7b992cf165c79d807ce84",
  measurementId: "G-N6D4SX2RZG"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

//Initialize Authentication
export const auth = getAuth()

//Intialize a service
export const db = getFirestore()






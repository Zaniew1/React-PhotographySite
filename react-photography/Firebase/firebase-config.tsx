import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app'; 
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4bRI_AJIqel0pdZTzZWpYEUlpJtFFtBU",
  authDomain: "react-photography-c6b2f.firebaseapp.com",
  projectId: "react-photography-c6b2f",
  storageBucket: "react-photography-c6b2f.appspot.com",
  messagingSenderId: "9911131058",
  appId: "1:9911131058:web:4269b821e02e16baa8a2ab",
  measurementId: "G-D7PVTCJL2R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase.initializeApp(firebaseConfig));
const firebaseStorage = firebase.storage();
const firebaseFirestore = firebase.firestore();
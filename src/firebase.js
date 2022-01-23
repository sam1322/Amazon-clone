// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH_-EnK5pUKmNEsOBF1oEvIB00kGkVaPY",
  authDomain: "clone-faf47.firebaseapp.com",
  projectId: "clone-faf47",
  storageBucket: "clone-faf47.appspot.com",
  messagingSenderId: "596601532841",
  appId: "1:596601532841:web:12366e83591cba9f0614b8",
  measurementId: "G-5TB2PKRKES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth()
export {auth}
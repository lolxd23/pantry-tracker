// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAiIMt8WLzzWcZw1CKheMnCtJoDzxrukM",
  authDomain: "inventory-manegment.firebaseapp.com",
  projectId: "inventory-manegment",
  storageBucket: "inventory-manegment.appspot.com",
  messagingSenderId: "301032651195",
  appId: "1:301032651195:web:4bce8b23140446cefeec9e",
  measurementId: "G-C6XRV9BQP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export {firestore}

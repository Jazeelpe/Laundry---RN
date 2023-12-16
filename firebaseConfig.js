import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCeKHldxjtQX5Qg07dMFtjpyYKzpjWfASU",
    authDomain: "laundry---rn.firebaseapp.com",
    projectId: "laundry---rn",
    storageBucket: "laundry---rn.appspot.com",
    messagingSenderId: "109300140877",
    appId: "1:109300140877:web:720fca7b4cb740eded0504"
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
auth.languageCode = 'it';
export const db = getFirestore(app);
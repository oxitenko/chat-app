// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkB8CqKpv0CRhcKReT7ok0T6Ejxt2hgHQ",
    authDomain: "chat-app-bf19b.firebaseapp.com",
    projectId: "chat-app-bf19b",
    storageBucket: "chat-app-bf19b.appspot.com",
    messagingSenderId: "75646072976",
    appId: "1:75646072976:web:08a07fc32c485345af0015",
    measurementId: "G-Q61H23923E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
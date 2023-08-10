import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDOMtHgeOwcyW5YntqQTINd-jk8Fsl0kyI",
    authDomain: "my-app-6d65e.firebaseapp.com",
    databaseURL: "https://my-app-6d65e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-app-6d65e",
    storageBucket: "my-app-6d65e.appspot.com",
    messagingSenderId: "564896131968",
    appId: "1:564896131968:web:c2825bd0f9684550f6af65",
    measurementId: "G-PDKRN488P7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
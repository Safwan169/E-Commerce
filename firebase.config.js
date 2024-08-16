// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.DATA_1,
  authDomain:import.meta.DATA_2,
  projectId:import.meta.DATA_3,
  storageBucket:import.meta.DATA_4,
  messagingSenderId:import.meta.DATA_5,
  appId:import.meta.DATA_6,
  measurementId:import.meta.DATA_7
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
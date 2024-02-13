import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId:import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
    messagingSenderId:import.meta.env.VITE_MESSAGINSENDERID ,
    appId: import.meta.env.VITE_MESSAGINSENDERID
  };

  

  export const firebase = initializeApp(firebaseConfig);
  export const auth = getAuth(firebase)
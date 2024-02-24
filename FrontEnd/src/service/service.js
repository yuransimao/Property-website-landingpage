import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const DataFirebase = async() => {
  const resp = await fetch('http://localhost:3000/apiFirebaseClient');
  const data = await resp.json();
  
  return data;
}

const FirebaseConfig = async () => {
  const data = await DataFirebase();

  return {
    apiKey: data.apiKey,
    authDomain: data.authDomain,
    projectId: data.projectId,
    storageBucket: data.storageBucket,
    messagingSenderId: data.messagingSenderId,
    appId: data.appId
  };
}

const initFirebase = async () => {
  const config = await FirebaseConfig();
  const firebase = initializeApp(config);
  return firebase;
}

export const firebase = await initFirebase();
export const auth = getAuth(firebase);
export const Storage = getStorage(firebase);
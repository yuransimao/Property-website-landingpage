import { initializeApp } from "firebase-admin";
import { refreshToken } from "firebase-admin/app";


const AppFirebase = initializeApp({
    credential : refreshToken( process.env.GOOGLE_APPLICATION_CREDENTIALS),
    databaseURL: process.env.databaseURL
})


export {AppFirebase}
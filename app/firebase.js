import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: 'AIzaSyCYbfs6u753XeS5Pwls5QLvWCXJBdrWEYI',
  authDomain: 'ldn-weather-app.firebaseapp.com',
  projectId: 'ldn-weather-app',
  storageBucket: 'ldn-weather-app.appspot.com',
  messagingSenderId: '48432130792',
  appId: '1:48432130792:web:be9f947f77624dbc0fb75d',
  measurementID: 'G-MX377WVY8D',
}

let db, functions;
export async function init() {
  await initializeApp(firebaseConfig);
  db = getFirestore();
  functions = getFunctions();
  if (__DEV__) {
    connectFirestoreEmulator(db, "localhost", 8080)
    connectFunctionsEmulator(functions, "localhost", 5001)
  }
}

export { db, functions }

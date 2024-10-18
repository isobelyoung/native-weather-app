import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
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

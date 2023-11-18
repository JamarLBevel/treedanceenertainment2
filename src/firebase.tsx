import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import {Analytics} from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDEFKx8JiRJg5bo2t7PQafqB90NuZp-39M",
    authDomain: "treedanceentertainment-a873f.firebaseapp.com",
    projectId: "treedanceentertainment-a873f",
    storageBucket: "treedanceentertainment-a873f.appspot.com",
    messagingSenderId: "484872818811",
    appId: "1:484872818811:web:8cb8fd02da57cb303d52de",
    measurementId: "G-RP9JG2MYLY"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
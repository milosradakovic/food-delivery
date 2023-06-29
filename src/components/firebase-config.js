import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDlyD0ZCbYqW6uiNZZpItl_IvZo7olRD_0",
    authDomain: "fooddeliver-c162e.firebaseapp.com",
    projectId: "fooddeliver-c162e",
    storageBucket: "fooddeliver-c162e.appspot.com",
    messagingSenderId: "546967292992",
    appId: "1:546967292992:web:2864aecb42713734fde3a5"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

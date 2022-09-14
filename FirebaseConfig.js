// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAJTsReIvIzGffkZUdVXy4qHqQunYa3PxI',
  authDomain: 'brttracker-bdb50.firebaseapp.com',
  databaseURL: 'https://brttracker-bdb50.firebaseio.com',
  projectId: 'brttracker-bdb50',
  storageBucket: 'brttracker-bdb50.appspot.com',
  messagingSenderId: '473595464273',
  appId: '1:473595464273:web:cb7158467ad86532710670',
  measurementId: 'G-D2WFM1SQNK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const fire = getFirestore(app);

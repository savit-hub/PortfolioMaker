import firebase from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU31BanlZMa_NY_RLgLiWkSE87bF3Y3p8",
  authDomain: "portfoliomaker-f2b76.firebaseapp.com",
  projectId: "portfoliomaker-f2b76",
  storageBucket: "portfoliomaker-f2b76.appspot.com",
  messagingSenderId: "626728598527",
  appId: "1:626728598527:web:32c7ab99ca7aff49ecc5ca",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const database = {};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;

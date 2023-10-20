import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDZdCVQczYDFunL4lqafsxJ_c169TU51BA",
  authDomain: "assignment-10-auth-8e3db.firebaseapp.com",
  projectId: "assignment-10-auth-8e3db",
  storageBucket: "assignment-10-auth-8e3db.appspot.com",
  messagingSenderId: "699051278770",
  appId: "1:699051278770:web:97c2dc0b74f925bd32a4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
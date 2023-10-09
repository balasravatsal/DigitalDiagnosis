import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNCaWKBIka8y4jqnU0Bnlj2To3DPGalic",
  authDomain: "fir-auth-a18d9.firebaseapp.com",
  projectId: "fir-auth-a18d9",
  storageBucket: "fir-auth-a18d9.appspot.com",
  messagingSenderId: "62835523853",
  appId: "1:62835523853:web:34989f349341227accf044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
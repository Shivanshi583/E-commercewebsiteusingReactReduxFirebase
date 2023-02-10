
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDmlMB7O6-oE6EiLFGHw2LHUmB71AiSDtk",
  authDomain: "marketplaceproject-3dfce.firebaseapp.com",
  projectId: "marketplaceproject-3dfce",
  storageBucket: "marketplaceproject-3dfce.appspot.com",
  messagingSenderId: "120318685737",
  appId: "1:120318685737:web:aec2c7ca091ece2a432238"
};


const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app);
 export const db = getFirestore(app);
 export const storage =getStorage(app);
export default app;
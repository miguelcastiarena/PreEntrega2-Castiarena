
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXy26frRPH7_fPtMowgCN3MzkbHQvyZMc",
  authDomain: "reactentregacastiarena.firebaseapp.com",
  projectId: "reactentregacastiarena",
  storageBucket: "reactentregacastiarena.appspot.com",
  messagingSenderId: "257946820146",
  appId: "1:257946820146:web:2b542b25b9a3303f2d262b"
};


const app = initializeApp(firebaseConfig);

export  const database = getFirestore(app)
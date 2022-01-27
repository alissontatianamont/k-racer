import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDEPhry7NBZMg7N0tKMrms0N0f1LaEA8MY",
    authDomain: "k-racer.firebaseapp.com",
    projectId: "k-racer",
    storageBucket: "k-racer.appspot.com",
    messagingSenderId: "457569807727",
    appId: "1:457569807727:web:c16d8547b59c3628e28c9a"
  };
  const app =initializeApp(firebaseConfig)
 export  const db =getFirestore(app)
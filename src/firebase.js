import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtMis8aJ_Y2k0uToVrY-6mi2JKBBStn7Y",
  authDomain: "vue-geo-904ff.firebaseapp.com",
  projectId: "vue-geo-904ff",
  storageBucket: "vue-geo-904ff.appspot.com",
  messagingSenderId: "1040094020120",
  appId: "1:1040094020120:web:d5e26a9e0ebda0531cf96d",
  measurementId: "G-FWBZ7WRBC7",
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore()

export { firebaseApp, auth, createUserWithEmailAndPassword, db }

import firebase from "firebase"
import "firebase/firestone"

const firebaseConfig = {
  apiKey: "AIzaSyCU-_NGlTXaaZV981vz_xsumUc5VXG8EWo",
  authDomain: "platinados-38b76.firebaseapp.com",
  projectId: "platinados-38b76",
  storageBucket: "platinados-38b76.appspot.com",
  messagingSenderId: "386104571374",
  appId: "1:386104571374:web:d231ff1f70ec9299bf4aff"
};

const app = initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app)
}
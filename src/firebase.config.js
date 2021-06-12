import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbnaALZ0TPSpeMbP6oVoT7QrZul8lB-qo",
  authDomain: "anupwedshema.firebaseapp.com",
  projectId: "anupwedshema",
  storageBucket: "anupwedshema.appspot.com",
  messagingSenderId: "784949402288",
  appId: "1:784949402288:web:7f75a8b77fe2999b90b975",
  measurementId: "G-3D1M88P7L7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };

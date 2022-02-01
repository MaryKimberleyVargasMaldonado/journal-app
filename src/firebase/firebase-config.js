import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAhGOCv0lzyHBotCmhAOYp68bKqjrrGkQQ",
	authDomain: "react-app-curso-c6f23.firebaseapp.com",
	projectId: "react-app-curso-c6f23",
	storageBucket: "react-app-curso-c6f23.appspot.com",
	messagingSenderId: "383228271457",
	appId: "1:383228271457:web:f9c3b17209b083bd1a4320",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Base de datos
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

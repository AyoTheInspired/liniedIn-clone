import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBpRsCE7Myys9WSM38GA7EXQTMGl8bYRKQ",
	authDomain: "linkedin-clone-dac16.firebaseapp.com",
	projectId: "linkedin-clone-dac16",
	storageBucket: "linkedin-clone-dac16.appspot.com",
	messagingSenderId: "1030357635002",
	appId: "1:1030357635002:web:7dbdb46eedd5f029b69783",
	measurementId: "G-FN9B4ZM57J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

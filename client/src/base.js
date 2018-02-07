import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDb4ohRgfHLAgF_w9HZzH7_m2KgCVk9Mc4",
  authDomain: "brokerbros-b618a.firebaseapp.com",
  databaseURL: "https://brokerbros-b618a.firebaseio.com",
  projectId: "brokerbros-b618a",
  storageBucket: "brokerbros-b618a.appspot.com",
  messagingSenderId: "729425432702"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider(); 

export { app, base, facebookProvider, googleProvider }

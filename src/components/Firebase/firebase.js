import app from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAP1V6aG1vL3jdL6DlS2eGclD2LlUZIF5c",
  authDomain: "route-1a50f.firebaseapp.com",
  databaseURL: "https://route-1a50f.firebaseio.com",
  projectId: "route-1a50f",
  storageBucket: "route-1a50f.appspot.com",
  messagingSenderId: "143609314335",
  appId: "1:143609314335:web:a59e732d1ca01b009de92a"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

    // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
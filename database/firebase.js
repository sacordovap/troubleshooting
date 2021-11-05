import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAji4KtNZGfaUEORiKlpkXMAeP9vtTtOyk",
    authDomain: "troubleshooting-36db8.firebaseapp.com",
    projectId: "troubleshooting-36db8",
    storageBucket: "troubleshooting-36db8.appspot.com",
    messagingSenderId: "678490348420",
    appId: "1:678490348420:web:382c6a63aff26d93c85bd1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore()
  const storage =firebase.storage()
  
  export default{
      firebase,
      db,
      storage
  };
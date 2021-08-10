import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDx1XoZ6h5f_1DDzPkJWAW4ObMityyP9FM",
    authDomain: "fundful-1e85c.firebaseapp.com",
    projectId: "fundful-1e85c",
    storageBucket: "fundful-1e85c.appspot.com",
    messagingSenderId: "585180600750",
    appId: "1:585180600750:web:1eb5998f11d120a0ae503f",
    measurementId: "G-VRCYVVQPHR"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebaseConfig;
import React, { useState } from 'react'
import '../styles/output.css'
import firebase from 'firebase'


const SignupScreen = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const firebaseConfig = {
        apiKey: "AIzaSyDx1XoZ6h5f_1DDzPkJWAW4ObMityyP9FM",
        authDomain: "fundful-1e85c.firebaseapp.com",
        projectId: "fundful-1e85c",
        storageBucket: "fundful-1e85c.appspot.com",
        messagingSenderId: "585180600750",
        appId: "1:585180600750:web:1eb5998f11d120a0ae503f",
        measurementId: "G-VRCYVVQPHR"
      };
    
    function loginSubmit(e) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    // ..
  });
    }
    
    return (
       <div class="grid">
       <div class="grid justify-items-center mt-3 mb-10">
            <h3 class="text-4xl">Signup</h3>
        </div>
        <div class="grid grid-rows-2 justify-items-center align-items-center">
                <input placeholder="Email" type="email" class="border border-blue hover:border-transparent mb-5 w-1/3 h-12" onChange={e => setEmail(e.target.value)}></input>
                <input placeholder="Password" type="password" class="border border-blue hover:border-transparent w-1/3 h-12" onChange={e => setPassword(e.target.value)}></input>
                <a href="" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginSubmit}>Login</a>

        </div>
        </div>
    )
}

export default SignupScreen

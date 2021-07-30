import React, {useState} from 'react'
import '../App.css'

const HomeScreen = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDx1XoZ6h5f_1DDzPkJWAW4ObMityyP9FM",
    authDomain: "fundful-1e85c.firebaseapp.com",
    projectId: "fundful-1e85c",
    storageBucket: "fundful-1e85c.appspot.com",
    messagingSenderId: "585180600750",
    appId: "1:585180600750:web:1eb5998f11d120a0ae503f",
    measurementId: "G-VRCYVVQPHR"
  };  

  const [region, setRegion] = useState(null)
  const [county, setCounty] = useState(null)

  return (
    <div>
      <form>
            <input placeholder='Enter Your State' style={{"width" : "25%"}}></input>
            <input placeholder = 'Enter Your County' style={{'width': "50%"}}></input>
            <button>Search</button>
      </form>
    </div>
  );
}

export default HomeScreen

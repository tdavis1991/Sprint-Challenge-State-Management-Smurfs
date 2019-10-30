import React, { useState, useEffect } from "react";
import axios from 'axios';
import SmurfForm from './SmurfForm';
import { SmurfContext } from '../context/SmurfContext';
import "./App.css";

function App() {

  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data)
        console.log(smurfs)
      }).then(err => {
        console.log(err)
      })
  },[])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm />
      {smurfs.map((list, index) => (
        <div>
          <h3>{list.name}</h3>
          <p>{list.age}</p>
          <p>{list.height}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

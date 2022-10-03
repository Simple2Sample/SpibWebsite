import './App.css';
import { FetchAndDisplayImage } from './Fetchimage';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom'


function App() {
  return (

    <div className="App" title='Spib'>
      <div><FetchAndDisplayImage></FetchAndDisplayImage></div>
    </div>
   
  );
}

export default App;
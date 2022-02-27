import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {setNum(num+1)}}>Click Here!</button>
    </div>
  );
}

export default App;

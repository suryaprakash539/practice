import React from 'react'
import './App.css';
import Navbar from './containers/Navbar';
import Routes from './containers/Routes/index'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes/> 
    </div>
  );
}

export default App;

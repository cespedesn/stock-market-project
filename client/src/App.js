import './App.css';
import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Login from './Login';
import HomePage from './HomePage';


function App() {
  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(setCurrentUser)
      }
    })
  }, [])

  if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element = { <HomePage/> }/>
        <Route path='login' element = { <Login/> }/>
      </Routes>
    </div>
  );
}

export default App;

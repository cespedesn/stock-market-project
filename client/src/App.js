import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './Login'


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
      
    </div>
  );
}

export default App;

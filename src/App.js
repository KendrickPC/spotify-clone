import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify.js';

function App() {
  const [token, setToken] = useState();
  // 
  useEffect( () => {
    // Using getTokenFromUrl function from spotify.js
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // Hiding access tokens: resetting URL bar to NOT show the access token so that only the app knows the access token.
    const _token = hash.access_token;
    // Setting the state with the token in it
    if (_token) {
      setToken(_token);
    }
    console.log("token", token);
    // useEffect block so that the set of code runs only once the page is loaded.
  }, [token]);


  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login/>}
    </div>
  );
}

export default App;

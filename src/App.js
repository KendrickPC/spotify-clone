import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import { Login } from './components/login/Login';
import { getTokenFromUrl } from './spotify.js';
// SpotifyWebApi class from npm package installation


// This object spotify represents Spotify in our app
const spotify = new SpotifyWebApi();

export function App() {
  const [token, setToken] = useState();
  
  useEffect( () => {
    // Using getTokenFromUrl function from spotify.js
    const hash = getTokenFromUrl();
    window.location.hash = "";
    // Hiding access tokens: resetting URL bar to NOT show the access token so that only the app knows the access token.
    const _token = hash.access_token;
    
    // Setting the state with the token in it
    // If a token exists, we are setting the Access Token to the Spotify Access Token so that it can access Spotify Services.
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
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

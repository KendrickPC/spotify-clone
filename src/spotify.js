// https://developer.spotify.com
// documentation/web-playback-sdk

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2135ecab9b024f5bb5d8c2be7c41a583";

// https://developer.spotify.com/documentation/general/guides/scopes/
const scopes = [
  // Read access to a user’s currently playing content.
  "user-read-currently-playing",
  // Read access to a user’s recently played tracks.
  "user-read-recently-played",
  // Read access to a user’s player state.
  "user-read-playback-state",
  // Read access to a user's top artists and tracks.
  "user-top-read",
  // Write access to a user’s playback state
  "user-modify-playback-state",
];

// Extracts the Access Token from the URL once we have it.
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce( (initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&token&show_dialog=true`;



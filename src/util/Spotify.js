//import React from 'react';
//Need to register my app later today
const cID = "";
const redirectUri = "http://localhost:3000/";

let userToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    };

    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        let expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch !== null && expirationTimeMatch !== null) {
          accessToken = accessTokenMatch[1];
          expirationTime = Number(expirationTimeMatch[1]);
          window.setTimeout(() => accessToken = '', expirationTime * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken;
        } else {
          const requestingUrl = "https://accounts.spotify.com/authorize/?client_id=" + cID + "&response_type=token&redirect_uri=" + redirectUri;
          window.location = requestingUrl;
        };
      },
  
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => {
          return ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          });
        })
      } else {
        return [];
      }
    })
  },
  
  

    }

export default Spotify;

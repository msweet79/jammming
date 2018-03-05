import React from 'react';

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
      }

    }

export default Spotify;

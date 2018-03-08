//Need to hide cID.  Good coding practice
const cID = "32e8cdb109dc46c99a74792a2cde8b5c";
const redirectUri = "http://localhost:3000/";
//Used later.  Set to make later code easier to read
const requestingUrl = "https://accounts.spotify.com/authorize/?client_id=" + cID + "&response_type=token&redirect_uri=" + redirectUri;

//declared variables to be set later
let accessToken, expirationTime;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    //Obtain access token and exiration from URL
    let accessTokenMatch
      = window.location.href.match(/access_token=([^&]*)/);
    let expirationTimeMatch
        = window.location.href.match(/expires_in=([^&]*)/);

        //Truthy check to pull match from array
        if (accessTokenMatch && expirationTimeMatch) {
          accessToken = accessTokenMatch[1];
          expirationTime = Number(expirationTimeMatch[1]);

          //Set timeout.  Time is in mili seconds so multiply by 1000
          window.setTimeout(() => accessToken = '', expirationTime * 1000);
          window.history.pushState('Access Token', null, '/');
          return accessToken;
        } else {
          //Redirect to log-in after timeout
          //moved cost requestUrl to top
          window.location = requestingUrl;
        }
      },

  search(term) {
    //Get access token
    const accessToken = Spotify.getAccessToken();
    //Pass the search term to Spotify search
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
      //Re-wrote to throw error
      if (response.ok) {
        return response.json()
      }
      throw new Error('Request failed!')
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    if (!jsonResponse.tracks) {
      return []
    } else {
// If has results, parse results into track array
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri

      }))
    }
  }
)
  },
      //Re-wrote this block to throw errors.  (see above for new blcok)
      /*
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
  */

  savePlaylist(playlistName, playlistTracks) {
    // If playlist is not named or does not have tracks, stop
    if (!playlistName || !playlistTracks) {
      return;
    }
    
    //Use token to authroize
    accessToken = Spotify.getAccessToken();
    let headers = {Authorization: `Bearer ${accessToken}`};
    let userID;
    let playlistID;
    //Get user ID
    return fetch(`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      userID = jsonResponse.id;
      //Post playlist
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName })
      }).then(response => response.json()).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        
      //Simplified this code (see above)
      /*
      }).then(response2 => {
        return response2.json();       
      }).then(jsonResponse2 => {
        playlistID = jsonResponse2.id;
        headers = {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
        */
        
        //Post the tracks
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
          method: 'POST',
          headers: headers,
          //changed "uris" to uris
          body: JSON.stringify({ uris: playlistTracks })
        });
      });
    });
  }
};

export default Spotify;

import React from 'react';
import './app.css';
import Playlist from '../playlist/playlist';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Spotify from '../../util/Spotify.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    //Set default states
    this.state = {
      searchResults: [],
      playlistName: 'Tracks',
      playlistTracks: []
    }
    
    //Bind methods to app
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // Click + on track to add track to list of tracks in playlist
  // Don't add the same song twice to playlist
  addTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    let playlistIds = newPlaylist.map(song => song.id);
    if (!playlistIds.includes(track.id)) {
      newPlaylist.push(track);
      this.setState({playlistTracks: newPlaylist});
    }
  }

  //Click - to remove track from playlist
  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    let playlistIds = newPlaylist.map(song => song.id);
    let songId = playlistIds.indexOf(track.id);
    if (playlistIds.includes(track.id)) {
      newPlaylist.splice(songId, 1);
      this.setState({playlistTracks: newPlaylist});
    }
  }

  //Change playlist name
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
  
// Save the playlist to Spotify. Spotify.savePlaylist in Spotify.js
// Reset the playlist name and list of tracks in the playlist
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(song => song.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'NeW Playlist',
        playlistTracks: []
      })
    })
  }

  //Spotify.search located in spotify.js, search Spotify for search term
  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks})
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} isRemoval={false} onAdd={this.addTrack} />
            <Playlist tracks={this.state.playlistTracks} isRemoval={true} onRemove={this.removeTrack} name={this.state.playlistName} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

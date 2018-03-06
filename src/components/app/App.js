import React from 'react';
import './app.css';
import Playlist from '../playlist/playlist';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Spotify from '../../util/Spotify.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "Jammming Tracks",
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  //Spotify.getAccessToken();
//}

  addTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    let playlistIds = newPlaylist.map(song => song.id);
    if (!playlistIds.includes(track.id)) {
      newPlaylist.push(track);
      this.setState({playlistTracks: newPlaylist});
    }
  }

  removeTrack(track) {
    let newPlaylist = this.state.playlistTracks;
    let playlistIds = newPlaylist.map(song => song.id);
    let songId = playlistIds.indexOf(track.id);
    if (playlistIds.includes(track.id)) {
      newPlaylist.splice(songId, 1);
      this.setState({playlistTracks: newPlaylist});
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }
//need uri
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(song => song.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "Next Playlist",
        playlistTracks: []
      });
    });
  }

  search(term) {
    //let newResults = Spotify.search(term);
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks})
    });
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

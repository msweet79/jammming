import React from 'react';
import './app.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor (props) {
    super(props) {
      this.state = {
        searchResults: [
          {name: 'a', artist: 'b', album: 'c'},
          {name: 'd', artist: 'e', album: 'f'}
        ]
      };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylist = this.updatePlaylist.bind(this);


    }

  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div class="App">
      <!-- Add a SearchBar component -->
             <div class="App-playlist">
      <!-- Add a SearchResults component -->
      <!-- Add a Playlist component -->
            </div>
          </div>
      </div>

/*original code block
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
*/
    );
    //end of render method
  };
  //end of class App
}

export default App;

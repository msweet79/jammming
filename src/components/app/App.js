import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/playlist/playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
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
  }
}

export default App;

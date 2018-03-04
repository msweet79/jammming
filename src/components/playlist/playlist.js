import React, { Component } from 'react';
import './playlist.css';

class Playlist extends React.Component {
  constructor (props) {
    super()
  }
}

render () {
  return (
    <div class="Playlist">
      <input value="New Playlist"/>
      <!-- Add a TrackList component -->
      <a class="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  );
}

export default Playlist;

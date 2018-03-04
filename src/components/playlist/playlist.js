import React from 'react';
import './playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor (props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  };


render () {
  return (
      <div className="Playlist">
        <input defaultValue={this.props.name} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    );
  };
}

export default Playlist;

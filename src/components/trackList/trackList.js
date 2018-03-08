import React from 'react';
import './trackList.css';
import Track from '../track/track';

class TrackList extends React.Component {

  //Render tracks from the track aray
  render() {
    return (
      <div className="TrackList">
        { this.props.tracks.map(track => {
            return <Track track={track} 
            key={track.id} 
            onAdd={this.props.onAdd} 
            onRemove={this.props.onRemove} 
            isRemoval={this.props.isRemoval} />
          })
        }
      </div>
    )
  }
}

export default TrackList;

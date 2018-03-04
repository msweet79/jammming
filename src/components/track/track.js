import React from 'react';
import './track.css'

class Track extends React.Component {
  constructor (props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack () {
    this.props.onAdd(this.props.track);
  };

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

renderAction () {
  if (this.props.isRemoved) {
    return <a className='Track-action' onClick={this.removeTrack}>-</a>
  };
};

render () {
  return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{!this.props.isRemoval ? <div onClick={this.addTrack}>+</div> : <div onClick={this.removeTrack}>-</div>}</a>
      </div>
    );
  };
}

export default Track;

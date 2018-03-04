import React, { Component } from 'react';
import './track.css'

class Track extends Component {
  constructor (props) {

  }

renderAction () {
  if (this.props.isRemoved) {
    return <a className='Track-action' onClick={this.removeTrack}>-</a>
  };

  //end of removal - feature
}
render () {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3><!-- track name will go here --></h3>
        <p><!-- track artist will go here--> | <!-- track album will go here --></p>
      </div>
      <a className="Track-action"><!-- + or - will go here --></a>
    </div>
  );
  //end of render method
};
//end of class Track component
}

export default Track;

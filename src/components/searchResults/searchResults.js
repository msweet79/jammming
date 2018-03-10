import React from 'react';
import './searchResults.css';
import TrackList from '../trackList/trackList';

class SearchResults extends React.Component {
  render() {
    return(
      <div className="SearchResults">
        <a className="Recommendations" onClick={this.props.onRecommend}>TOP RECOMMENDATIONS</a>
        <div className="SearchResults-box">
          <h2>Results</h2>
          <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
        </div>
      </div>
    );
  }
}

//Re-wrote code below to show top recommendations
/*
class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} />
      </div>
    )
  };
}
*/
export default SearchResults;

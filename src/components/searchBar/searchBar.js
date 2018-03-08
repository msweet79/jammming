import React from 'react';
import './searchBar.css';

export class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    //Set default state
    this.state = {searchTerm: ""};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  };

  //Bind methods to SearchBar
  search() {
    this.props.onSearch(this.state.searchTerm);
  };

//Change search terms when form is changes
//e = event
handleTermChange(e) {
  this.setState({searchTerm: e.target.value});
}
  
  //**  May need to remove this!!!
  // Pass the search term to search function
  search () {
    this.props.onSearch(this.state.term)
  }

render () {
  return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  };
}

export default SearchBar;

import React from 'react';
import './searchBar.css';

const searchByOptionsObj = {
  'By Name': 'track',
  'By Album': 'album',
  'By Artist': 'artist'
};

//Revome extra export before class
class SearchBar extends React.Component {
  constructor (props) {
    super(props);
    //Set default state
    this.state = {searchTerm: ""};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  };

//This is redundant
/*
  //Bind methods to SearchBar
  search() {
    this.props.onSearch(this.state.searchTerm);
  };
*/

  //New Enter search code block
  search(e) {
    // Only search when a term is actually entered AND either the search button
    // is clicked or the "Enter" key is pressed.
    // Otherwise, if we send an empty query, we get a Bad Request response.
    if (this.state.term && (e.key === "Enter" || e.type === "click")) {
      // .search() passes the term up to parent App using
      // this.props.onSearch().
      this.props.onSearch(this.state.term, this.state.searchBy);
      e.preventDefault();
    }
  }

  handleTermChange(e) {
    // Re-render term when a change in the input field is triggered.
    this.setState({term: e.target.value});
  }

  getSearchByClass(searchByOption) {
    if (this.state.searchBy === searchByOption) {
      return 'active';
    }
    else {
      return '';
    }
  }

  handleSearchByChange(searchByOption) {
    this.setState({searchBy: searchByOption});
  }

  renderSearchByOptions() {
    return Object.keys(searchByOptionsObj).map(searchByOption => {
      let searchValue = searchByOptionsObj[searchByOption];
      return <li
        className={this.getSearchByClass(searchValue)}
        onClick={this.handleSearchByChange.bind(this, searchValue)}
        key={searchValue}>
        {searchByOption}
        </li>
    });
  }

//Re-write the code below to implement Enter to trigger search
/*
//Change search terms when form is changes
//e = event
handleTermChange(e) {
  this.setState({searchTerm: e.target.value});
}
*/
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

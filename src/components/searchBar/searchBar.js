import React, { Component } from 'react';
import './searchBar.css';

export class SearchBar extends React.Component {
  constructor (props) {
    super()
  }
}

render () {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <a>SEARCH</a>
    </div>
  );
};

export default SearchBar;

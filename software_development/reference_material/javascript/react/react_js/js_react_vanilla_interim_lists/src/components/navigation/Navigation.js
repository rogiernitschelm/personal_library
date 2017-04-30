import React from 'react';
import SearchBar from './search_bar/SearchBar'

const Navigation = (search_term) => {
  return (
    <div>
      <SearchBar onSearchTermChange={search_term => searchObject(search_term)}/>
    </div>);
}

export default Navigation;

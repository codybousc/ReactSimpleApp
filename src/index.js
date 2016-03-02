import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//YouTube API Key
const API_KEY = 'AIzaSyCjXuQOPTrrQsCRG9_13GPaBjXqpvWcm5Y';


//Create a new component that should produce some HTML
const App = () => {
  return (
    <div>
    <SearchBar />

    </div>
  )
}



//Component's generated HTML should be placed in DOM/on page
ReactDOM.render(<App />, document.querySelector('.container'));

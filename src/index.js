import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList'

import SearchBar from './components/search_bar';

//YouTube API Key
const API_KEY = 'AIzaSyCjXuQOPTrrQsCRG9_13GPaBjXqpvWcm5Y';

//Create a new component that should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: API_KEY, term: 'surfer girls'}, (data) => {
      this.setState({videos: data});
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}



//Component's generated HTML should be placed in DOM/on page
ReactDOM.render(<App />, document.querySelector('.container'));

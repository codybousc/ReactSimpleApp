import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component that should produce some HTML
const App = () => {
  return <div> Hello! </div>

}



//Component's generated HTML should be placed in DOM/on page
ReactDOM.render(<App />, document.querySelector('.container'));

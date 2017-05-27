import React from 'react';
import ReactDOM from 'react-dom';
// Import component
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDD0OIOG4cdYHkdyECuwTsLKD9aIbmZfSA";

// Builds the complete App.
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
}
// Render in DOM
ReactDOM.render( <App />, document.querySelector(".container") );

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDD0OIOG4cdYHkdyECuwTsLKD9aIbmZfSA";

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render( <App />, document.querySelector(".container") );

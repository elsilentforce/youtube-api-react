import React from 'react';
import ReactDOM from 'react-dom';
// Import components
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY = "AIzaSyDD0OIOG4cdYHkdyECuwTsLKD9aIbmZfSA";

YTSearch({ key: API_KEY, term: 'Huawei' }, data => console.log(data) );

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

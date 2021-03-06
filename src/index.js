import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import _ from 'lodash'
// Import components
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import API_KEY from './env.js'


// Builds the complete App.
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    // Set first video search as 'Huawei'
    this.videoSearch('Reactjs')
  }
  // Search a video by term
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    )
  }

}
// Render in DOM
ReactDOM.render(<App />, document.querySelector('.container'))

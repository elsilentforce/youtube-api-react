import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Import components
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyDD0OIOG4cdYHkdyECuwTsLKD9aIbmZfSA'


// Builds the complete App.
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
    }
    YTSearch({ key: API_KEY, term: 'Huawei' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
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

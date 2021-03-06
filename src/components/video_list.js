import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  // Creates an array of VideoList Items
  const VideoListItems = props.videos.map(
    (video) => {
      return (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect={props.onVideoSelect}
        />
      )
    }
  )

  return (
    <ul className="col-md-4 list-group">
      { VideoListItems }
    </ul>
  )
}

export default VideoList

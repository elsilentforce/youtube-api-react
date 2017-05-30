import React from 'react';

const VideoListItem = ({ video }) => {
  return(
    <li>
      <div className="list-group-item">
        <div className="video-list media">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;

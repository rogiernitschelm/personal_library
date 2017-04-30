import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={props.onVideoSelect} />
    );
  });

  return (
    <div>
      <span>total videos: {props.videos.length} </span>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </div>
  );
};

export default VideoList;

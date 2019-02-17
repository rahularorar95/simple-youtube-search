import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos ,onVideoSelect}) => {
  return (
    <div className="ui relaxed divided list">
      {videos.map(item => {
          return <VideoItem key={item.etag} video={item} onVideoSelect={onVideoSelect}/>
      })}
    </div>
  );
};

export default VideoList;

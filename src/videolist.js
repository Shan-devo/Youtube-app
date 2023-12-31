import React from "react";
import VideoItem from "./VideoItem";
import "./styles/styles.css";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
    //console.log(video.id);
  });

  return <div className=" list">{renderedVideos}</div>;
};
export default VideoList;

import React from "react";
import "./styles/styles.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div className="vidl">
      <div
        onClick={() => handleVideoSelect(video)}
        className=" video-item item"
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
        <div className="content">
          <div className="header ">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;

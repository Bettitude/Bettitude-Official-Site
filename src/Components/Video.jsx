import React from 'react';
import BettitudeVid from '../assets/BettitudeVid.mp4';

const Video = () => {
  return (
    <div className="w-full bg-black flex justify-center">
      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={BettitudeVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

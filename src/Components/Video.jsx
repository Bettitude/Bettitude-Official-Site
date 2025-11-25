import React from 'react';
import BettitudeVid from '../assets/BettitudeVid.mp4'

const Video = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto"
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
    </div>
  );
};

export default Video;
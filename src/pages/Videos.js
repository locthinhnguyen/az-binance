import React from 'react';

const listVideos = [
  './images/video1.png',
  './images/video2.png',
  './images/video3.png',
  './images/video2.png',
];

const Videos = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center py-[64px]">
        <div className="w-[92%] px-8 flex justify-center items-center flex-col">
          <h2 className="medium-h2 !text-[black]">Các video theo chủ để</h2>
          <div className="flex flex-row gap-[10px]">
            {listVideos?.map((item) => {
              return <img src={item} alt="video" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;

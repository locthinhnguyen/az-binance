import React from 'react';
import { lisCurriculum } from '../../contents/home';

const Curriculum = () => {
  return (
    <div className="flex flex-col py-5 gap-5 ">
      {lisCurriculum?.map((item) => {
        return (
          <div className="flex items-center gap-3 border-t border-b">
            <div className="p-3 ">
              <img src={item.image} alt="." className="rounded-[10px]" />
            </div>
            <div className="flex flex-col">
              <div className="px-4 py-3 flex items-center gap-3">
                <img src={item.tick} alt="" />
                <p className=" text-label-mid text-character-mark">
                  {item.title}
                </p>
              </div>
              <div className="mt-1 ml-10 mr-4 mb-4 ">
                <p className=" text-character-secondary-45 text-regular">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Curriculum;

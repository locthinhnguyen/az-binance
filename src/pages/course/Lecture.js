import React from 'react';
import { listLecture } from '../../contents/home';
import { Tag } from 'antd';
import Skills from './Skills';

const Lecture = () => {
  return (
    <div className="flex flex-col py-5 ">
      {listLecture?.map((item) => {
        return (
          <>
            <div className="flex justify-center px-5 py-3 gap-8 items-end">
              <img src={item.avatar} alt="avatar" className="" />
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className=" text-h2-medium">{item.name}</h2>
                  <p className=" text-description ">{item.description}</p>
                  <Tag
                    color="#000"
                    className=" !text-description !text-[#FADB14]"
                  >
                    {item.position}
                  </Tag>
                </div>
                <div className="flex flex-col gap-2">
                  <>
                    <p className=" text-description">{item.text}</p>
                    <p className=" text-description">{item.text1}</p>
                  </>
                  <p className="text-regular !text-[#1890FF]">
                    Xem full profile
                  </p>
                </div>
              </div>
            </div>
            <Skills />
          </>
        );
      })}
    </div>
  );
};

export default Lecture;

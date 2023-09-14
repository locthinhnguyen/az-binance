import React, { useState } from 'react';

import Explores from './Explores';
import Contents from './Contents';
import Curriculum from './Curriculum';
import Lecture from './Lecture';

export const CourseCrypto = () => {
  const listTabs = ['Tổng quan khóa học', 'Giáo trình học', 'Về giảng viên'];
  const [activeTab, setActiveTab] = useState('Tổng quan khóa học');

  const handleTabClick = (item) => {
    setActiveTab(item);
  };
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center px-8 gap-8">
        <div className="flex flex-col w-[70%]">
          <div className="flex flex-col px-5">
            <span className="flex items-center gap-2 py-3">
              <p className="regular-h5">Trang chủ</p>
              <span className="regular-h5">/</span>
              <p className="regular-h5">Khóa học online</p>
              <span className="regular-h5">/</span>
              <p className="regular">
                Khóa học Crypto & Blockchain Fundamental
              </p>
            </span>
            <h1 className="medium-h1 py-3">
              Khóa học Crypto & Blockchain Fundamental
            </h1>
            <div className="flex items-center gap-[10px] py-3">
              <img
                src="./images/course/lecturer.png"
                alt="."
                className=" rounded-full"
              />
              <span className="flex items-center gap-1">
                <p className="regular ">MR.Kanbapk</p>
                <p className="regular">-</p>
                <p className="description !text-black !text-sm">
                  Founder AZ Finance
                </p>
              </span>
            </div>
            <div className="pt-5 flex flex-row items-center gap-8 border-t border-b">
              {listTabs?.map((item) => {
                return (
                  <p
                    className={`titlecourse1 mt-2 mb-5  ${
                      activeTab === item
                        ? 'border-b-[4px] border-[#FADB14]'
                        : ''
                    }`}
                    onClick={() => handleTabClick(item)}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          {activeTab === 'Tổng quan khóa học'}
          <Contents />
          <Curriculum />
          <Lecture />
        </div>
        <Explores />
      </div>
    </div>
  );
};

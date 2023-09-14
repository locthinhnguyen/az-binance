import React, { useState } from 'react';
import { listPart } from '../../contents/home';

const Participants = () => {
  const [itemIndex, setItemIndex] = useState(undefined);

  return (
    <div className="flex justify-center bg-gradient-to-b from-black from-80% via-black to-white to-20%">
      <div className="container flex justify-center">
        <div className="w-[100%] pt-8 flex justify-center px-8 gap-8 flex-col ">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="./icons/group.svg" alt="." />
              <p className="label-larg">Khóa học của chúng tôi</p>
            </div>
            <h2 className="medium-h2">Khám phá series khóa học AZ 101</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {listPart?.map((item, index) => {
              return (
                <div
                  className="flex relative items-end "
                  key={item.id}
                  onMouseEnter={() => {
                    setItemIndex(index);
                  }}
                  onMouseLeave={() => {
                    setItemIndex(undefined);
                  }}
                >
                  <img src={item.img} alt="." className=" w-full" />
                  <div className="absolute overlay w-full duration-300 ">
                    <div className="flex justify-between items-end mt-4 mx-5 mb-5 gap-[70px]">
                      <h3 className="medium-h3 !leading-8 w-[50%]">
                        {item.title}
                      </h3>
                      {itemIndex === index ? (
                        <div className="items-center justify-end flex w-[100%] h-[65px]">
                          <img
                            src="./icons/group.svg"
                            alt="."
                            className="w-[24px] h-[24px]"
                          />
                          <p className="ml-3 label-mid !text-[#FAAD14] hover:opacity-80">
                            Nhận tư vấn ngay
                          </p>
                          <img
                            src="./icons/nextye.svg"
                            className="ml-1"
                            alt=""
                          />
                        </div>
                      ) : (
                        <p className="regular !text-[white]  w-[100%]">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;

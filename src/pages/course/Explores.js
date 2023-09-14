import React from 'react';
import { listCourse1, listCourseCrypto1 } from '../../contents/home';

const Explores = () => {
  return (
    <div className="flex flex-col gap-8 w-[30%]">
      {/* <div className=""> */}
      {listCourseCrypto1?.map((item) => {
        return (
          <div className="flex flex-col gap-2 px-5 py-2 w-full">
            <img src={item.image} alt="." className="" />
            <h5 className=" text-character-primary-85 text-h5-bold">
              {item.title}
            </h5>
            <div className="flex flex-row items-center gap-[10px]">
              <p className=" text-character-secondary-45 text-h3-medium">
                {item.price}
              </p>
              <img src="./icons/arrow1.svg" alt="." />
              <p className="text-character-primary-85 text-h3-medium">
                {item.discountprice}
              </p>
            </div>
            <p className=" text-description text-character-success">
              {item.save}
            </p>
            <button className="flex justify-center items-center gap-1 px-4 py-1 bg-[#FA8C16] border rounded">
              <p className="label-mid">Liên hệ </p>
              <img src="./images/course/wrapper.svg" alt="." />
            </button>
          </div>
        );
      })}
      {/* </div> */}
      <div className=" flex flex-col">
        <div className="px-5 py-2">
          <p className=" text-label-mid text-character-mark">
            Các khóa học khác
          </p>
        </div>
        {listCourse1?.map((item) => {
          return (
            <div className="px-5 py-2 flex justify-center gap-3">
              <img src={item.image} alt="" className="w-[50%]" />
              <span className="flex flex-col gap-[10px]">
                <h5 className=" text-h5-bold text-character-primary-85">
                  {item.title}
                </h5>
                <div className="py-2">
                  <button className="flex items-center gap-1">
                    <p className=" text-label-sm">Xem khóa học</p>
                    <img src="./icons/wrapper2.svg" alt="." />
                  </button>
                </div>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explores;

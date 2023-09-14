import React from 'react';
import { listCourse } from '../../contents/home';
import { Link } from 'react-router-dom';
const Course = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center">
        <div className="px-8 w-[100%] flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="./icons/group.svg" alt="." />
              <p className="regular-h5">Khóa học của chúng tôi</p>
            </div>
            <h1 className="medium-h1">Khám phá series khóa học AZ 101</h1>
          </div>
          <div className="flex flex-row gap-8">
            {listCourse?.map((item) => {
              return (
                <div className="w-full">
                  <img src={item.img} alt="." className="w-full" />
                  <div className="py-3">
                    <h3 className="medium-h3 !text-[black]">
                      {item.nameCourse}
                    </h3>
                    <p className=" label-mid !text-[black] py-[10px]">
                      {item.title}
                    </p>
                    <p className="regular-h5">{item.content}</p>
                  </div>
                  <Link className="py-3 flex items-center gap-1" to={'course'}>
                    <p className="label-mid !text-[black]">Xem khóa học</p>
                    <img src="./icons/wrapper2.svg" alt="." />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

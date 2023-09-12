import React from 'react';

const Course = () => {
  const listCourse = [
    {
      id: 1,
      img: './images/image1.png',
      nameCourse: 'Khóa học Crypto & Blockchain Fundamental',
      title: 'HỌC 8 BUỔI HỌC 2 THÁNG SUPORT 2 NĂM ',
      content:
        'Học về kiến thức nền tảng về crypto chuẩn nhất, bao gồm các thuật ngữ và các hoạt chính trên thị trường crypto nói riêng và Blockchain nói chung',
    },
    {
      id: 2,
      img: './images/image2.png',
      nameCourse: 'Khóa học phân tích kỹ thuật và giao dịch chuyên sâu',
      title: 'HỌC 8 BUỔI HỌC 2 THÁNG SUPORT 2 NĂM ',
      content:
        'Cách sử dụng Hệ thống quản lý rủi ro nâng cao Giảm thiểu rủi ro và bảo vệ lợi nhuận của bạn một cách hiệu quả.',
    },
    {
      id: 3,
      img: './images/image3.png',
      nameCourse: 'Khóa học research dữ liệu onchain trên Blockchain',
      title: 'HỌC 8 BUỔI HỌC 2 THÁNG SUPORT 2 NĂM ',
      content:
        'Hoc cách dự đoán biến động, nhịp độ thị trường thông qua phân tích dữ liệu , dòng tiền trên Blockchain (On-chain).',
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center">
        <div className="px-8 w-[92%] flex flex-col justify-center gap-8">
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
                <div className="w-[470px]">
                  <img src={item.img} alt="." />
                  <div className="py-3">
                    <h3 className="medium-h3 !text-[black]">
                      {item.nameCourse}
                    </h3>
                    <p className=" label-mid !text-[black] py-[10px]">
                      {item.title}
                    </p>
                    <p className="regular-h5">{item.content}</p>
                  </div>
                  <button className="py-3 flex items-center gap-1">
                    <p className="label-mid !text-[black]">Xem khóa học</p>
                    <img src="./icons/wrapper2.svg" alt="." />
                  </button>
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

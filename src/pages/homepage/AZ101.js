import React from 'react';

const AZ101 = () => {
  const listAZ = [
    'Các khóa học dạy bạn kiến thức đầu tư từ A đến Z',
    'Khóa học trực tuyến qua Zoom giúp bạn tham gia vào thị trường',
    'Phương pháp đầu tư căng cơ dài hạn',
    'Kỹ năng thiết yếu để giảm thiểu rủi ro khi đầu tư',
  ];
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center pt-[120px] pb-[64px]">
        <div className="w-[100%] flex items-center gap-5 justify-center">
          <div className="flex flex-col gap-3">
            <p className="text-[48px] text-[black] font-medium leading-[52px]">
              Bắt đầu tìm hiểu crypto <br /> với <br /> AZ101
            </p>
            <button className="flex items-center gap-1 px-5 bg-[#FADB14] rounded w-[39%] h-[40px] hover:shadow-orange-500  hover:shadow-[0_0_8px_2px]">
              <p className="label-mid !text-[black]">Xem các khóa học</p>
              <img src="./icons/wrapper2.svg" alt="." />
            </button>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              {listAZ?.map((item) => {
                return (
                  <li key={item} className="flex items-center gap-[10px]">
                    <img src="./icons/wrapper3.svg" alt="" />
                    <a className="medium-h4 !text-[black]" href="#123">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AZ101;

import React from 'react';

const Bar = () => {
  const listStatus = [
    {
      number: '100K',
      text: 'Người dùng tin tưởng',
    },
    {
      number: '40',
      text: 'Học viên đã đăng ký',
    },
    {
      number: '12+',
      text: 'Bài học',
    },
    {
      number: '102h',
      text: 'Học tập',
    },
  ];
  return (
    <div className="flex justify-center">
      <div className=" container flex justify-center py-8 px-8">
        <div className="w-[80%] flex justify-center bg-[black] rounded-[10px] gap-[100px]">
          {listStatus?.map((item) => {
            return (
              <div
                key={item.number}
                className=" flex flex-col p-5 items-center"
              >
                <p className=" medium-h1 !text-[#FFF]">{item.number}</p>
                <h5 className="regular-h5 !text-[#FFF]">{item.text}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bar;

import React from 'react';

const Header = () => {
  const listMenu = [
    {
      id: 1,
      text: 'Trang chủ',
    },
    {
      id: 2,
      text: 'Khóa học online',
    },
    {
      id: 3,
      text: 'Khóa học video',
    },
    {
      id: 4,
      text: 'Chính sách',
    },
    {
      id: 5,
      text: 'Liên hệ',
    },
  ];
  return (
    <header className="flex justify-center ">
      <div className="container flex items-center justify-between gap-4 px-[30px] ">
        <div className="flex items-center gap-2 p-[10px]">
          <img src="./icon-header.svg" alt="icon" />
          <p className="text-[#000] text-[22px] font-bold">AZ Finance</p>
        </div>
        <div className="menu flex items-center">
          <ul className="flex gap-[10px]">
            {listMenu?.map((item) => {
              return (
                <li key={item.id} className="p-4 items-center">
                  <a className="textMenu" href="#123">
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center p-[10px]">
          <button className="px-4 bg-[#FAFAFA] rounded text-[12px] font-medium">
            Kết nối ví
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

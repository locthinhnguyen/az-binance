import React from 'react';

const Nav = () => {
  const listNav = [
    {
      id: 1,
      text: 'Khám phá',
    },
    {
      id: 2,
      text: 'Dành cho bạn',
    },
    {
      id: 3,
      text: 'Đánh giá',
    },
    {
      id: 4,
      text: 'FAQ',
    },
    {
      id: 5,
      text: 'Media',
    },
    {
      id: 6,
      text: 'Nhận tư vấn',
    },
  ];
  return (
    <div className="flex justify-center bg-[#1D1D1D]">
      <div className="menu flex items-center">
        <ul className="flex gap-[10px]">
          {listNav?.map((item) => {
            return (
              <li key={item.id} className="p-4 items-center">
                <a className="label-mid" href="#123">
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

import React from 'react';

const DiscountCourse = () => {
  const listDiscount = [
    {
      image: './images/image4.png',
      title: 'Combo 3 khóa học AZ101',
      price: '$4489',
      discountprice: '$2285,78',
      save: 'Tiết kiệm hơn 50%',
    },
    {
      image: './images/image1.png',
      title: 'Khóa học Crypto & Blockchain Fundamental',
      price: '$999 ',
      discountprice: '$286.78',
      save: 'Tiết kiệm hơn 50%',
    },
    {
      image: './images/image2.png',
      title: 'Khóa học phân tích kỹ thuật và giao dịch chuyên sâu',
      price: '$1490 ',
      discountprice: '$500 ',
      save: 'Tiết kiệm hơn 50%',
    },
    {
      image: './images/image3.png',
      title: 'Khóa học research dữ liệu onchain trên Blockchain',
      price: '$2000 ',
      discountprice: '$1499',
      save: 'Tiết kiệm hơn 50%',
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center py-[64px]">
        <div className="w-[92%] flex justify-between gap-8 px-8">
          <div className="flex flex-col gap-5 justify-start">
            <div className="flex items-center gap-2">
              <img src="./icons/group.svg" alt="" />
              <p className="regular-h5">
                Tiết kiệm hơn khi mua nhiều khóa học cùng lúc
              </p>
            </div>
            <h1 className="medium-h1">Các khóa học đang giảm giá</h1>
            <p className="regular">
              Series khóa học AZ 101 đang giảm giá cho 100 học viên đăng kí đầu
              tiên, nhanh tay để không bỏ lỡ nhé.
            </p>
          </div>
          <div className="flex flex-row gap-8 w-full">
            {listDiscount?.map((item) => {
              return (
                <div className="flex flex-col">
                  <img
                    src={item.image}
                    alt="."
                    className="w-[470px] h-[180px]"
                  />
                  <h5 className="regualr-h5 !font-bold py-2 h-[48px] w-[211px]">
                    {item.title}
                  </h5>
                  <div className="flex flex-row items-center gap-[10px]">
                    <p className="regular-h5 !text-[24px] !font-medium">
                      {item.price}
                    </p>
                    <img src="./icons/arrow1.svg" alt="." />
                    <p className="medium-h3 !text-[black] pb-[10px]">
                      {item.discountprice}
                    </p>
                  </div>
                  <p className="description">{item.save}</p>
                  <button className="flex items-center gap-1 py-4">
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

export default DiscountCourse;

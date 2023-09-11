import React from 'react';

const FounderTalks = () => {
  return (
    <div className="flex justify-center">
      <div className="container pt-8 bg-[#1D1D1D] flex justify-center">
        <div className="w-[92%] flex flex-row items-center gap-8 px-8 mt-[-140px]">
          <div className="flex flex-col">
            <h2 className="medium-h2">Tâm sự của Founder </h2>
            <p className="regular-h5 !text-[#FFF]">
              Thị trường crypto là một thị trường rất màu mỡ và nhưng cũng khó
              để chiến thắng. Nếu đâu tư dễ dàng thì mọi người đều là triệu
              phú.Vì thế bạn cần có tư duy đúng đắn và luôn đặt đôi chân trên
              mặt đất để có thể thành công trên thị trường
            </p>
          </div>
          <div className="w-[324px]">
            <img src="./icons/signatrue1.png" alt="" />
            <div>.</div>
            <h3 className="medium-h3">MR.Kanbapk</h3>
            <div>.</div>
            <p className="regular-h5 !text-[#FFF]">Founder AZ Finance</p>
          </div>
          <img src="./icons/avt1.png" alt="avatar" className="" />
        </div>
      </div>
    </div>
  );
};

export default FounderTalks;

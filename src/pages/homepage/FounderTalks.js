import React from 'react';

const FounderTalks = () => {
  return (
    <div className="flex justify-center items-center bg-[#1D1D1D]">
      <div className="container pt-8 flex flex-col items-center gap-8">
        <div className="w-[1537px] flex flex-row items-center gap-5 px-8 mt-[-120px]">
          <div className="flex flex-col">
            <h2 className="medium-h2">Tâm sự của Founder </h2>
            <p className="regular-h5 !text-[#FFF]">
              Thị trường crypto là một thị trường rất màu mỡ và nhưng cũng khó
              để chiến thắng. Nếu đâu tư dễ dàng thì mọi người đều là triệu
              phú.Vì thế bạn cần có tư duy đúng đắn và luôn đặt đôi chân trên
              mặt đất để có thể thành công trên thị trường
            </p>
          </div>
          <div className="w-[650px] flex flex-col items-center gap-3 pt-8">
            <img src="./icons/signatrue1.png" alt="" />
            <div className="w-[33px] h-[4px] bg-[#FFF] ">.</div>
            <h3 className="medium-h3">MR.Kanbapk</h3>
            <div className="w-[33px] h-[4px] bg-[#FFF]">.</div>
            <p className="regular-h5 !text-[#FFF]">Founder AZ Finance</p>
          </div>
          <img src="./icons/avt1.png" alt="avatar" className="" />
        </div>
        <div className="w-[92%] flex flex-row items-center gap-5 px-8 mt-[-175px] ml-[100px]">
          <div className="w-[600px] flex flex-col items-center gap-3 pt-[150px] ">
            <img
              src="./icons/signatrue2.png"
              alt=""
              className="ml-[64px] w-[346px]"
            />
            <div className="w-[33px] h-[4px] bg-[#FFF] ml-[64px]">.</div>
            <h3 className="medium-h3 ml-[64px]">MR.Kanbapk</h3>
            <div className="w-[33px] h-[4px] bg-[#FFF] ml-[64px]">.</div>
            <p className="regular-h5 !text-[#FFF] text-center ml-[64px]">
              Co_Founder AZ Finance & Founder Octlantis
            </p>
          </div>
          <img src="./icons/avt2.png" alt="avatar" className="" />
          <div className="flex flex-col mt-[175px] gap-5 ">
            <h2 className="medium-h2">Tâm sự của Founder </h2>
            <p className="regular-h5 !text-[#FFF]">
              Từ năm 2021 tôi có thể đào tạo ra nhiều học viên có thể x100 tài
              sản của họ, không những thế họ quản lý rủi ro rất tốt, và có thể
              duy trì mất thu nhập ổn định hàng tháng. Đó là lí do vì sao bạn
              cần một người dẫn dắt đầy tâm huyết để có thể đưa bạn đến thành
              công ngắn nhất
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderTalks;

import React from 'react';

const ForAZFinance = () => {
  return (
    <div className="flex justify-center">
      <div className="container pt-[134px] w-[1537px] flex justify-center pb-[32px]">
        <div className="w-[92%] px-8 flex gap-8 items-start">
          <div className="flex items-center gap-2 w-[500px]">
            <h1 className="medium-h1">Về</h1>
            <div className="flex items-center gap-2 p-[10px]">
              <img
                src="./icon-header.svg"
                alt="icon"
                className="w-[90px] h-[35px]"
              />
              <p className="text-[#000] text-[36px] font-bold">AZ Finance</p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] w-[930px]">
            <h5 className="regular-h5 leading-6">
              AZ FINANCE là một trung tâm đạo tạo được công nhận rộng rãi tại
              Việt Nam về kỹ năng đầu tư cũng như tổ chức. Bạn sẽ được học hỏi
              từ những chuyên gia trong lĩnh vực mình đang họ.Tại AZ FINANCE,
              bạn được hoà mình và trải nghiệm các mảng khác nhau của thị trường
              crypto nói riêng và công nghệ blockchain nói chung. Giáo dục ở AZ
              FINANCE khuyến khích nhận thức văn hoá, đào sâu nền tảng vấn đề và
              phát triển độ nhạy bén trong đầu tư thông qua các kiến thức nền
              tảng và thực chiến
            </h5>
            <div className="flex items-center gap-1">
              <p className="label-mid !text-[black]">Thông tin về chúng tôi</p>
              <img src="./icons/wrapper2.svg" alt="." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForAZFinance;

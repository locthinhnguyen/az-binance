import React from 'react';
import { listCourseCrypto } from '../../contents/home';

const Contents = () => {
  return (
    <div className="flex flex-col">
      <div className="p-5 flex flex-col gap-2">
        <h4 className="medium-h4 !text-[#000]">About course</h4>
        <p className="regular-h5">
          Thị trường crypto (tiền điện tử) đã nhộn nhịp trở lại vào những tháng
          gần đây, báo hiệu 1 chu kỳ uptrend mới. Và xu hướng tiềm năng nhất
          trong đợt này chính là Defi (decentralized finance), hay còn gọi là
          tài chính phi tập trung. Rất nhiều cá nhân đã thành công ngoạn mục với
          những pha pump x5, x10 x20 tài khoản liên tục khiến cộng đồng đầu tư
          tiền điện tử đứng ngồi không yên. Trong khoá này học, MR.Kanbapk
          (Founder AZ101) sẽ hướng dẫn bạn chi tiết về kiến thức, cũng như cách
          đầu tư đúng đắn trong thị trường đầy màu mỡ này.
        </p>
      </div>
      <div className=" p-5">
        <img src="./images/course/container.png" alt="." />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h4 className="medium-h4 !text-[#000]">Những gì bạn sẽ học</h4>
        <div className="grid grid-cols-2 gap-8">
          {listCourseCrypto?.map((item) => {
            return (
              <ul className=" list-disc">
                <li className="ml-5 regular leading-5">{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;

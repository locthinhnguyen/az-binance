import React, { useState } from 'react';

const Question = () => {
  const listQuestion = [
    {
      id: 1,
      title: 'Về khóa học',
      list: [
        {
          content: 'AZ 101 là gì ?',
          text: 'AZ101 là một Series khóa học trực tuyến với các 3 giáo cấp độ chính cơ bản, nâng cao, và chuyên nghiệp, về các chủ đề bao gồm kiến thức nền tảng, kỹ năng giao dịch, kỹ năng phân tích và research. Đến với AZ 101, bạn sẽ tìm thấy nguồn cảm hứng từ các lớp học thực hành trực tuyến và các giảng viên đứng đầu trong lĩnh vực, để bạn có thể rút ngắn con đường đi đến thành coong trong đầu tư trên thị trường Crypto',
        },
        {
          content: 'Lớp học kéo dài bao lâu, tôi có quyền lợi gì khác không',
          text: 'Lớp học của tất cả các môn sẽ kéo dài 8 buổi trong 2 tuần, đông thời bạn sẽ nhận được đặt quên là nhận hỗ trợ tư vấn và giải đáp trong vòng 2 năm',
        },
        {
          content: 'Tôi sẽ học ở đâu nếu đã đăng kí',
          text: 'Hiện tại AZ Finnace sẽ giảng dạy trực tuyến thông qua nền tảng Zoom. Chúng tôi sẽ thêm bạn vào channel trên Zalo hoặc Telegram để gửi nhận link tham gia lớp học',
        },
      ],
    },
    {
      id: 2,
      title: 'Về crcrypto',
      list: [
        {
          content: 'Dữ liệu On chain là gì?',
          text: 'Dữ liệu on-chain là các dữ liệu của Blockchain. Có thể hiểu đơn giản Blockchain là tổng hợp những chuỗi khối chứa dữ liệu và gắn kết với nhau. Các dữ liệu này có thể là: Dữ liệu về Block (Phí gas, miner, time,...); Dữ liệu về Giao dịch (contract ví, số lượng token giao dịch,...); Hành động tương tác với Smart contract (tham gia bỏ phiếu quản trị, thêm thanh khoản,...).',
        },
        {
          content: 'Vì sao tôi phải học dữ liệu on chain',
          text: 'Tất cả các hoạt động của người dùng trên blockchain đều được lưu trữ và cập nhật theo realtime. Đặc biệt là các dữ liệu về hoạt động của "cá voi"/"cá mập" - holder có số lượng tài sản tiền điện tử lớn. Một trong những sự kiện biến động thị trường lớn nhất là vào ngày 12/3/2020, khi BTC bỗng dưng giảm đến 52%. Lúc bấy giờ, không một nhà phân tích kỹ thuật nào có thể dự đoán trước được điều này. Tuy nhiên, nếu nhìn vào dữ liệu on-chain, chúng ta có thể biết được biến động của BTC trong tương lai gần.',
        },
        {
          content: 'Crypto có phải Blockchain ?',
          text: 'Nói một cách dễ hiểu, Crypto là một ứng dụng nhỏ của blockchain, là sản phẩm tài chính, với tính minh bạch và hi tập trung. Khác với tiền pháp định như USD và VND, mức biến động của tiền kỹ thuật số khá cao, nên có thể nói, nếu biết đầu tư thì bạn có thể gia tăng tài khoản của bạn trong thời gian ngắn',
        },
        {
          content: 'Crypto có rủi ro không ?',
          text: 'Câu trả lời của tôi chắc chắn là có. Nhưng nếu bạn đã tham gia vào các hoạt động đầu tư dài hạn và đầu cơ ngắn hạn, thì bạn sẽ biết tất cả các sản phẩm tài chính đều rủi ro giống nhau, kể cả thị trường chứng khoán và Forex, cái bạn cần học là phân tích và đánh giá để có thể chọn đúng mã giao dịch tiềm năng dài hạn, và quản lí tiền của bạn đúng cách',
        },
      ],
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(1);

  const handleTitleClick = (id) => {
    setSelectedTitle(id);
  };

  return (
    <div className="flex justify-center bg-[black]">
      <div className="container flex justify-center py-[64px]">
        <div className="w-[100%] px-8 flex justify-between gap-[120px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="medium-h1 !text-[#FFF]">Các câu hỏi thường gặp</h1>
            <div className="flex flex-col gap-8">
              <p className="regular !text-[#FFF]">
                Ở đây bạn sẽ tìm thấy một số câu hỏi thường gặp. Nếu bạn vẫn cần
                trợ giúp, vui lòng liên hệ với chúng tôi. <br /> Chúng tôi luôn
                sẵn lòng hỗ trợ bạn.
              </p>
              <button className="px-5 label-mid !text-[black] bg-[#FADB14] rounded w-[124px] h-[40px] hover:shadow-orange-500 hover:shadow-[0_0_8px_2px]">
                Nhận hỗ trợ
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <p className="label-mid leading-8">Lọc theo chủ đề</p>
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <button
                  className={`label-mid px-5 border rounded h-[40px] py-2 ${
                    selectedTitle === 1
                      ? 'bg-[#FADB14] !text-black'
                      : 'text-white'
                  }`}
                  onClick={() => handleTitleClick(1)}
                >
                  Về khóa học
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className={`label-mid px-5 border rounded h-[40px] py-2 ${
                    selectedTitle === 2
                      ? 'bg-[#FADB14] !text-black'
                      : 'text-white'
                  }`}
                  onClick={() => handleTitleClick(2)}
                >
                  Về crcrypto
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              {listQuestion.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    selectedTitle === item.id ? 'block' : 'hidden'
                  }`}
                >
                  {item.list.map((question) => (
                    <div key={question.content} className="flex flex-col">
                      <span className="px-4 py-3 flex items-center gap-3">
                        <img src="./icons/down.svg" alt="" />
                        <p className="label-larg">{question.content}</p>
                      </span>
                      <p className="regular !text-[#FFF] ml-10 mt-1 mb-4 mr-4 leading-5">
                        {question.text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

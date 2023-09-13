import React from 'react';
import Avatar from 'react-avatar';
import { useState } from 'react';

const Feedback = () => {
  const listFeedback = [
    {
      id: 1,
      text: 'Tôi đến với AZ Finance để biết chất lượng lớp học và giám tuyển. Điều đó thực sự xứng đáng với chi phí thành viên đối với tôi.',
      name: 'Jason R, Học viên AZ ',
    },
    {
      id: 2,
      text: 'Tôi hiểu rằng, ngay cả khi công việc không hoàn hảo thì đó vẫn là một công việc đang được tiến hành. Và lý do tôi tham gia khóa học AZ101 là để phát triển một kỹ năng. Tôi cảm thấy đó là một không gian an toàn.',
      name: 'Jason R, Học viên AZ ',
    },
    {
      id: 3,
      text: 'Tôi ất thích khóa học AZ101! Đây là một khóa học câp tốc tuyệt vời và nó đã giúp tôi tiết kiệm rất nhiều thời gian để tự tìm kiếm. Tôi dự định sẽ tham gia một số khóa học nữa trong thời gian sắp tới',
      name: 'Jason R, Học viên AZ ',
    },
    {
      id: 4,
      text: 'Tôi muốn giới thiệu khóa học AZ101 cho bất kỳ ai đang cố gắng quảng bá về hoạt động kinh doanh của mình. Nó đã giúp tôi tiết kiệm rất nhiều thời gian!',
      name: 'Jason R, Học viên AZ ',
    },
    {
      id: 5,
      text: 'Khóa học AZ101 là yếu tố thay đổi cuộc chơi. Thay vì chìm đắm trong chuỗi thất bại vô tận, tôi đã có một mindset mới để thay đổi phương pháp đầu tư cho bản thân',
      name: 'Jason R, Học viên AZ ',
    },
  ];
  const [selectedFeedback, setSelectedFeedback] = useState(1);

  const handleAvatarClick = (id) => {
    setSelectedFeedback(id);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="container flex py-[64px] justify-center">
        <div className="w-[92%] p-8 flex gap-8 items-start justify-between">
          <div className="flex flex-col w-[500px]">
            <h2 className="medium-h2 !text-[#000]">Học viên nói gì về</h2>
            <div className="flex items-center gap-2 p-[10px]">
              <img src="./icon-header.svg" alt="icon" className="" />
              <p className="text-[#000] text-[36px] font-bold">AZ Finance</p>
            </div>
            <div className="flex flex-row gap-5">
              {listFeedback.map((feedback) => (
                <Avatar
                  key={feedback.id}
                  src={`./images/feedback/avt${feedback.id}.png`}
                  alt=""
                  className={`!w-[56px] !h-[56px] ${
                    feedback.id === selectedFeedback
                      ? ''
                      : 'opacity-50 duration-500'
                  }`}
                  onClick={() => handleAvatarClick(feedback.id)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            {selectedFeedback && (
              <div className="flex flex-col items-center gap-[10px]">
                <img
                  src="./icons/quote.svg"
                  alt="."
                  className="w-[48px] h-[48px]"
                />
                <h3 className="regular leading-8 text-center">
                  {
                    listFeedback.find(
                      (feedback) => feedback.id === selectedFeedback
                    ).text
                  }
                </h3>
                <div className="flex items-center gap-1">
                  <p className="w-[33px] h-[4px] bg" />
                  <p className="regular-h5">
                    {
                      listFeedback.find(
                        (feedback) => feedback.id === selectedFeedback
                      ).name
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

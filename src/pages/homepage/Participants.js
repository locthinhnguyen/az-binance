import React from 'react';

const Participants = () => {
  const listPart = [
    {
      img: './images/part1.png',
      id: 1,
      title: 'Nhà đầu tư lĩnh vực khác',
      text: 'Nhà đầu tư chứng khoáng, chủ doanh nghiệp muốn đầu tư về thị trường tiền điện tử',
    },
    {
      img: './images/part2.png',
      id: 2,
      title: 'Nhà đầu tư thua lỗ',
      text: 'Bạn đã đầu tư lâu năm nhưng chịu lỗ khá nhiều, lên bờ xuống ruộng. Bạn muốn nắm bắt phương pháp đầu tư an toàn va hiệu quả ?',
    },
    {
      img: './images/part3.png',
      id: 3,
      title: 'Người đi làm',
      text: 'Bạn kinh doanh tự do, làm việc văn phòng đã có tích lũy tiết kiệm nhưng chưa biết quản lý và gia tăng dòng tiền như thế nào ?',
    },
    {
      img: './images/part4.png',
      id: 4,
      title: 'Sinh viên',
      text: 'Bạn là sinh viên, và muốn bắt đầu tích lũy kiến  đầu tư lúc còn đang ngồi ghế nhà trường',
    },
    {
      img: './images/part5.png',
      id: 5,
      title: 'Nội trợ',
      text: 'Bạn là nội trợ  không có thời gian đi làm nhưng vẫn muốn một đầu tư để có một nguồn thu nhập thụ động ?',
    },
    {
      img: './images/part6.png',
      id: 6,
      title: 'Người đã về hưu',
      text: 'Bạn là người đã về hưu, nhưng có niềm đam mê với đầu tư nhưng vẫn chưa thực hiện được ?',
    },
  ];
  return (
    <div className="flex justify-center bg-gradient-to-b from-black from-80% via-black to-white to-20%">
      <div className="container flex justify-center">
        <div className="w-[100%] pt-8 flex justify-center px-8 gap-8 flex-col ">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 justify-center">
              <img src="./icons/group.svg" alt="." />
              <p className="label-larg">Khóa học của chúng tôi</p>
            </div>
            <h2 className="medium-h2">Khám phá series khóa học AZ 101</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {listPart?.map((item) => {
              return (
                <div
                  className="flex justify-between relative items-end"
                  key={item.id}
                >
                  <img src={item.img} alt="." className=" w-full" />
                  <div className="absolute overlay w-full">
                    <div className="flex justify-between relative items-end">
                      <div className="flex justify-between p-5 items-end gap-14">
                        <h3 className="medium-h3 !leading-8 w-full">
                          {item.title}
                        </h3>
                        {/* <div className="w-full"> */}
                        <p className="regular !text-[white]">{item.text}</p>

                        {/* <div className="items-center justify-end hidden !hover:block">
                            <img
                              src="./icons/group.svg"
                              alt="."
                              className="w-[24px] h-[24px]"
                            />
                            <p className="ml-3 label-mid !text-[#FAAD14]">
                              Nhận tư vấn ngay
                            </p>
                            <img
                              src="./icons/nextye.svg"
                              className="ml-1"
                              alt=""
                            />                           
                          </div> */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;

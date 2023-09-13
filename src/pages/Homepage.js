import React from "react";

const Homepage = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center relative">
        <img
          src="./container.gif"
          alt="container"
          className="w-[92%] rounded-[20px]"
        />
        <div className="absolute flex items-center flex-col">
          <div className="flex flex-col gap-5 p-5 items-center w-[736px] pt-[150px]">
            <h1 className="text-[64px] font-medium text-[#FFF] text-center">
              Chào mừng bạn đến với AZ finance
            </h1>
            <h6 className="text-[20px] font-normal text-[#FFF] font1 text-center">
              Hãy để lại địa chỉ email và tên của ban, chúng tôi sẽ liên hệ và
              tư vấn chi tiết cho ban nhé !
            </h6>
            <button className="flex items-center gap-1">
              <p className="label-mid">Khám phá</p>
              <img src="./icons/wrapper.svg" alt="." />
            </button>
          </div>
          <div className="pt-[145px] w-[100%] px-8 flex justify-center">
            <form className=" w-[1180px] h-[129px] bg-[black] flex flex-col items-center rounded-[10px] mt-[100px]">
              <h4 className="medium px-5 py-3 w-full text-center">
                Nhận tư vấn miễn phí ngay
              </h4>
              <div className="px-5 py-3 flex flex-row gap-4 justify-center w-full">
                <div className=" border flex items-center w-full rounded">
                  <img
                    src="./icons/user-icon.svg"
                    alt=""
                    className="px-2 py-1 bg-[#F0F2F5] "
                  />
                  <input
                    placeholder="Họ và Tên"
                    className="px-2 py-[3px] max-md:text-[12px] w-full "
                  />
                </div>
                <div className=" border rounded flex items-center w-full">
                  <img
                    src="./icons/email-icon.svg"
                    alt=""
                    className="px-2 py-1 bg-[#F0F2F5]"
                  />
                  <input
                    placeholder="Email"
                    className="px-2 py-[3px] max-md:text-[12px] w-full"
                  />
                </div>
                <button className="bg-[#FADB14] flex items-center gap-1 px-5 rounded justify-center">
                  <img src="./icons/send-icon.svg" alt="" />
                  <p className="label-mid !text-[black]">Gửi</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

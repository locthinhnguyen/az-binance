import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex justify-center py-8">
        <div className="p-8 rounded-[10px] bg-[white] w-full flex flex-col  items-center">
          <div className="flex flex-col items-center justify-center p-5 ">
            <h1 className="medium-h1 text-center">
              Số lượng có hạn <br /> Đăng kí khóa học ngay hôm nay
            </h1>
            <h6 className="h6 font1">
              Để lại địa chỉ email và tên của ban, chúng tôi sẽ liên hệ và tư
              vấn chi tiết về khóa học Crypto 101
            </h6>
          </div>
          <form className="flex justify-center p-5 gap-6 max-md:flex-col max-md:items-center md:w-[787px]">
            <div className="border flex rounded max-md:w-full w-full">
              <img
                src="./icons/user.svg"
                alt=""
                className="px-2 py-1 bg-[#F0F2F5]"
              />
              <input
                placeholder="Họ và Tên"
                className="px-2 py-1 max-md:text-[12px] w-full"
              />
            </div>
            <div className="border flex rounded max-md:w-full w-full">
              <img
                src="./icons/email.svg"
                alt=""
                className="px-2 py-1 bg-[#F0F2F5]"
              />
              <input
                placeholder="Email"
                className="px-2 py-1 max-md:text-[12px] w-full"
              />
            </div>
            <button className="flex items-center justify-center gap-1 px-5 w-[85px] bg-[#FADB14] rounded  hover:shadow-orange-500  hover:shadow-[0_0_8px_2px] max-md:px-4 max-md:w-[77px]">
              <img
                src="./icons/send.svg"
                alt="."
                className=" max-md:min-w-[16px] max-md:min-h-[16px]"
              />
              <p className="text-[16px] font-medium text-white">Gửi</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

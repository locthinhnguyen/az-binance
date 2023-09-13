import React from "react";

const Footer = () => {
  const footerList = [
    {
      title: "Company",
      links: [
        {
          name: "About us",
          link: "",
        },
        {
          name: "Careers",
          link: "",
        },
        {
          name: "Portfolio",
          link: "",
        },
      ],
    },

    {
      title: "Blockhain Development",
      links: [
        {
          name: "DApp Development",
          link: "",
        },
        {
          name: "NFT development",
          link: "",
        },
        {
          name: "Smart contracts",
          link: "",
        },
        {
          name: "Private Blockchain Solution",
          link: "",
        },
        {
          name: "Decentralize Wallet integration",
          link: "",
        },
      ],
    },
    {
      title: "Software Development",
      links: [
        {
          name: "Android/iOS  Application Development",
          link: "",
        },
        {
          name: "Software Development Outsourcing",
          link: "",
        },
        {
          name: "UI/UX Design",
          link: "",
        },
      ],
    },
    {
      title: "2D/3D Creative Design",
      links: [
        {
          name: "Animation",
          link: "",
        },
        {
          name: "Modeling",
          link: "",
        },
        {
          name: "2D/3D Creative Design",
          link: "",
        },
        {
          name: "NFT Art",
          link: "",
        },
      ],
    },
  ];
  // const service = [
  //   {
  //     title: 'Company',
  //     content: [
  //       {
  //         title: 'About us',
  //         link: '',
  //       },
  //       {
  //         title: 'Careers',
  //         link: '',
  //       },
  //       {
  //         title: 'Portfolio',
  //         link: '',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Sevice',
  //     content: [
  //       {
  //         title: 'Blockchain Application',
  //         link: '',
  //       },
  //       {
  //         title: 'Software Development',
  //         link: '',
  //       },
  //       {
  //         title: '2D/3D Creative Design',
  //         link: '',
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className=" flex justify-center  bg-[white]">
      <div className="container py-8 px-8 flex justify-center">
        <div className=" w-[92%] flex justify-between">
          <div className="flex flex-col gap-4 w-[185px]">
            <div className="flex items-center gap-2">
              <img src="./icons/logo2.svg" alt="logo" className="" />
              <p className="text-[22px] font-bold leading-8 text-[#000]">
                AZ Finance
              </p>
            </div>
            <div className="max-md:flex max-md:gap-2 max-md:flex-col">
              <div className="flex items-center gap-2">
                <img src="./icons/mail-icon.png" alt="mail" />
                <p className="description !text-[#8C8C8C]">
                  hr.dep@luckytech.io
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="./icons/location.svg" alt="" />
                <p className="description !text-[#8C8C8C]">
                  C4- C8 Buu Long ward 15, district 10, Ho Chi Minh City
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src="./icons/phone.svg" alt="" />
                <p className="description !text-[#8C8C8C]">0899.068.898</p>
              </div>
            </div>
            <div className=" flex flex-row gap-4 max-md:hidden">
              <img src="./icons/face.svg" alt="." />
              <img src="./icons/ins.svg" alt="." />
              <img src="./icons/twi.svg" alt="." />
              <img src="./icons/whats.svg" alt="." />
            </div>
          </div>
          <div className="flex gap-[52px] max-md:hidden">
            {footerList?.map((item) => {
              return (
                <div key={item.title} className="flex flex-col gap-2">
                  <h5 className="text-[16px] font-bold text-[#8C8C8C]">
                    {item.title}
                  </h5>
                  {item.links?.map((link) => {
                    return (
                      <p
                        key={link.name}
                        className="description !text-[#8C8C8C]"
                      >
                        {link.name}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {/* <div className="flex gap-[52px] md:hidden max-md:py-[32px]">
            {service?.map((ser) => {
              return (
                <div key={ser.title} className="flex flex-col gap-2">
                  <h5 className="text-[16px] font-bold text-[#626262]">
                    {ser.title}
                  </h5>
                  {ser.content?.map((contents) => {
                    return (
                      <p
                        key={contents.title}
                        className="text-[12px] font-normal text-[#626262]"
                      >
                        {contents.title}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className=" flex flex-row gap-4 md:hidden">
            <img src="./face.svg" alt="." />
            <img src="./ins.svg" alt="." />
            <img src="./twi.svg" alt="." />
            <img src="whats.svg" alt="." />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

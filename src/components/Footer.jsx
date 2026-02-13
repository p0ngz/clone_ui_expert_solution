const Footer = () => {
  return (
    <div id="footer" className="bg-primary-blue text-white">
      <div
        id="footer-container"
        className="grid grid-cols-12 w-full  h-auto  px-5 py-10 sm:p-10  "
      >
        <div
          id="left-footer"
          className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-3"
        >
          <div id="wrapper-left-footer" className="lg:flex lg:gap-5">
            <div id="logo" className="w-32 h-12">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/5f6af1c6ab7d726c8ba6ca15_Master%20Logo.svg"
                alt="Oho-chat"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              id="service-info"
              className="w-full h-auto mt-10 sm:mt-6 lg:mt-0 text-xs grid grid-cols-4 gap-4 lg:gap-0 text-xs md:text-xs"
            >
              <div id="feature" className="col-span-2 sm:col-span-1">
                <h1 id="topic" className="font-semibold mb-2">
                  ฟีเจอร์
                </h1>
                <div id="menu-topic">
                  <p className="py-1 hover:underline cursor-pointer">แชท</p>
                  <p className="py-1 hover:underline cursor-pointer">แชทบอท</p>
                  <p className="py-1 hover:underline cursor-pointer">รายชื่อ</p>
                  <p className="py-1 hover:underline cursor-pointer">
                    แดชบอร์ด
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">เคส</p>
                  <p className="py-1 hover:underline cursor-pointer">
                    ส่งแชทอัตโนมัติ
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    บรอดแคสต์
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    แชทบนเว็บ
                  </p>
                </div>
              </div>
              <div id="service-detail" className="col-span-2 sm:col-span-1">
                <h1 id="topic" className="font-semibold mb-2">
                  การใช้บริการ
                </h1>
                <div id="menu-topic">
                  <p className="py-1 hover:underline cursor-pointer">
                    แพ็กเกจและราคา
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    ขั้นตอนการชำระเงิน
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    ข้อตกลงและเงื่อนไขการชำระเงิน
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    นโยบายข้อมูลส่วนบุคคล
                  </p>
                </div>
              </div>
              <div id="WareHouse" className="col-span-2 sm:col-span-1">
                <h1 id="topic" className="font-semibold mb-2">
                  คลังข้อมูล
                </h1>
                <div id="menu-topic">
                  <p className="py-1 hover:underline cursor-pointer">
                    อัปเดตล่าสุด
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">บทความ</p>
                  <p className="py-1 hover:underline cursor-pointer">
                    ตัวอย่างลุกค้า
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    คลิปสอนใช้งาน
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    คลังข้อมูลบริการลูกค้า
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    คู่มือการใช้งาน
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    คำถามที่พบบ่อย
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    สำหรับนักพัฒนา
                  </p>
                </div>
              </div>
              <div id="about-us" className="col-span-2 sm:col-span-1">
                <h1 id="topic" className="font-semibold mb-2">
                  เกี่ยวกับเรา
                </h1>
                <div id="menu-topic">
                  <p className="py-1 hover:underline cursor-pointer">
                    เกี่ยวกับ Oho Chat
                  </p>
                  <p className="py-1 hover:underline cursor-pointer">
                    ร่วมงานกับเรา
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="partner-container"
            className="hidden sm:flex w-full justify-center lg:justify-start items-center gap-3 mt-10"
          >
            <div id="meta" className="h-10 rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/64afd425fa0b799cb2126e5c_MBP%20Badge%20-%20Dark%20backgrounds%402x-p-500.png"
                alt="Meta Business Partner"
                className="w-full h-full object-contain"
              />
            </div>
            <div id="line" className="h-10 rounded-lg overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633ea1701907f64968cb2b0e_Screen%20Shot%202565-10-06%20at%2016.34.22.png"
                alt="LINE Agency Partner"
                className="h-full object-contain"
              />
            </div>

            <div
              id="google-cloud"
              className="h-10 bg-white rounded-lg px-2 flex items-center justify-center"
            >
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633e9f401907f65794cb1b88_Screen%20Shot%202565-10-06%20at%2016.21.52.png"
                alt="Google Cloud Partner"
                className="h-8 object-contain"
              />
            </div>
            <div
              id="depa"
              className="h-10 bg-white  px-3 rounded-lg flex items-center justify-center gap-2"
            >
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6244213d6b83a7c596398392_logo-depa.png"
                alt="depa"
                className="h-8 object-contain"
              />
            </div>
          </div>
        </div>
        <div
          id="right-footer"
          className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-4 xl:col-start-7 mt-10 lg:mt-0 px-4 sm:px-0"
        >
          <div
            id="button-container"
            className="w-full flex justify-center items-center gap-4"
          >
            <div className="w-full sm:w-1/2 flex  justify-center gap-3">
              <button
                id="call-demo"
                className="w-full py-4 sm:py-2 text-white text-sm font-medium border-1 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                โทรนัดเวลากลับ
              </button>
              <button
                id="register"
                className="w-full py-4 sm:py-2 text-white text-sm font-medium bg-red-400 rounded-lg hover:bg-red-600 transition"
              >
                สมัครใช้งานฟรี
              </button>
            </div>
          </div>
          <div
            id="contact-container"
            className="flex justify-center gap-16 ps-10 sm:ps-0 mt-8 text-xs"
          >
            <div id="contact-container-left" className="flex flex-col gap-4">
              <div id="contact-facebook" className="flex items-center gap-1">
                <div className="w-4 h-4 mask-icon mask-icon-facebook" />
                <p className="text-xs">@getohochat</p>
              </div>
              <div id="contact-line" className="flex items-center gap-1">
                <div className="w-4 h-4 mask-icon mask-icon-line" />
                <p className="text-xs">@ohochat</p>
              </div>
              <div id="contact-mail" className="flex items-center gap-1">
                <div className="w-4 h-4 mask-icon mask-icon-mail" />
                <p className="text-xs">hello@oho.chat</p>
              </div>
            </div>
            <div id="contact-container-right" className="flex flex-col gap-4">
              <div id="contact-instagram" className="flex items-center gap-1">
                <div className="w-4 h-4 mask-icon mask-icon-instagram" />
                <p className="text-xs">oho.chat</p>
              </div>
              <div id="contact-youtube" className="flex items-center gap-1">
                <div className="w-4 h-4 mask-icon mask-icon-youtube" />
                <p className="text-xs">oho chat</p>
              </div>
              <div id="contact-tiktok" className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#4843e7">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </div>
                <p className="text-xs">oho.chat</p>
              </div>
            </div>
          </div>
          <div
            id="open-close-info"
            className="text-xs flex flex-col items-start sm:items-center justify-center mt-8 gap-3 ps-10"
          >
            <div className="flex flex-col gap-1 items-start ">
              <span className="text-sm font-medium">
                วันเวลาทำการ: จันทร์-ศุกร์ เวลา 9:00-18:00 น.
              </span>
              <span className="text-xs font-light">
                กด 1 ติดต่อฝ่ายขาย หรือ กด 2 ติดต่อฝ่ายดูแลลูกค้า
              </span>
              <div id="contact-tel" className="flex items-center gap-2">
                <img
                  src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/674e9357f95404e27ca90714_icon_phonecall%20(1).png"
                  alt="phone"
                  className="w-4 h-4"
                />
                <span className="text-xs">02-096-4654</span>
              </div>
            </div>
          </div>
          <div
            id="partner-container"
            className="sm:hidden w-full flex flex-col items-center justify-center mt-10"
          >
            <div className="grid grid-cols-2 gap-4 px-10">
              <div className="col-span-2 flex items-center justify-center gap-2">
                <div
                  id="meta"
                  className="w-fit bg-white rounded-xl  flex items-center justify-center"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/64afd425fa0b799cb2126e5c_MBP%20Badge%20-%20Dark%20backgrounds%402x-p-500.png"
                    alt="Meta Business Partner"
                    className="w-fit h-10 object-cover rounded-xl"
                  />
                </div>
                <div
                  id="line"
                  className="w-fit bg-white rounded-xl flex items-center justify-center"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633ea1701907f64968cb2b0e_Screen%20Shot%202565-10-06%20at%2016.34.22.png"
                    alt="LINE Agency Partner"
                    className="w-fit h-10 object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="px-10 col-span-2 rounded-xl">
                <div
                  id="depa"
                  className="w-auto bg-white  px-2 rounded-xl flex items-center justify-center gap-3 "
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6244213d6b83a7c596398392_logo-depa.png"
                    alt="depa"
                    className=" h-10 rounded-xl object-contain"
                  />
                  <span className="text-black text-xs font-light">
                    Pre ISO/IEC 29110 <br />
                    Ref.CW-P11S-HBPJ
                  </span>
                </div>
              </div>

              <div className="px-10 col-span-2 rounded-xl">
                <div
                  id="google-cloud"
                  className="bg-white rounded-xl px-2 flex items-center justify-center"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633e9f401907f65794cb1b88_Screen%20Shot%202565-10-06%20at%2016.21.52.png"
                    alt="Google Cloud Partner"
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            id="store-container"
            className="w-full flex gap-5 justify-center items-center mt-10"
          >
            <a id="app-store" href="#" className="block">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633beda0c3b7123436a7adce_app-store.svg"
                alt="Download on App Store"
                className="w-full h-10 object-cover"
              />
            </a>
            <a id="google-store" href="#" className="block">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633bed967c9820e6547a6f64_google-play.svg"
                alt="Get it on Google Play"
                className="h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        id="license"
        className="w-full flex justify-center items-center py-4"
      >
        <p className="text-xs font-light">© 2024 Oho.chat All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

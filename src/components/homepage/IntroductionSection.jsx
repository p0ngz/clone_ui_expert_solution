const IntroductionSection = () => {
  return (
    <div
      id="introduction-section"
      className="bg-[url('https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/63f3415d2d342c664717419c_hero_bg_blurry.webp')] lg:pt-10 bg-no-repeat bg-scroll bg-[length:1440px] bg-[position:50%_90%]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          id="left"
          className="col-span-1 w-full h-auto px-8 py-10 flex flex-col items-center justify-start gap-10"
        >
          <div id="icon-company" className="w-full flex justify-start">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/5f6af1c6ab7d726c8ba6ca15_Master%20Logo.svg"
              alt="Oho-chat"
              className="w-[80px] h-[35px]w-full h-full object-contain"
            />
          </div>
          <div
            id="introduction-description"
            className="w-full flex justify-start"
          >
            <div className="text-4xl font-semibold text-gray-900">
              โอ้โหแชท!
              <br />
              ระบบจัดการแชทบริการลูกค้า
              <br />
              เพิ่มประสิทธิภาพทีมแอดมิน
              <br />
              ครบจบในที่เดียว
              <br />
            </div>
          </div>
          <div
            id="button-container"
            className="w-full flex justify-center items-center gap-3 sm:gap-5"
          >
            <button
              id="test-case-btn"
              className="py-3 rounded-lg w-full text-center text-white bg-primary-blue hover:bg-primary-red transition-colors hover:cursor-pointer"
            >
              ทดลองใช้พรี คลิก!
            </button>
            <button
              id="test-showcase-btn "
              className="py-3 rounded-lg w-full text-center text-white bg-primary-red hover:bg-primary-blue transition-colors hover:cursor-pointer"
            >
              บัตรสาธิจการใช้งานฟรี
            </button>
          </div>
          <div id="contact-info" className="w-full flex justify-start">
            <p className="text-lg text-gray-400">
              สอบถามเพิ่มเติม{" "}
              <span className="underline text-red-400 font-semibold">LINE</span>{" "}
              หรือ 02-096-4654
            </p>
          </div>
        </div>
        <div id="right" className="col-span-1 px-8">
          <img
            src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/673aeb32ea86ab95d11b2025_Final_AW_HERO_BANNER-p-500.png"
            alt="introduction-image"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div
        id="download-container"
        className="w-full flex flex-col items-center justify-center gap-5 py-10 lg:pt-0 mx-auto bg-linear-to-b from-white to-[#f7dce0]"

      >
        <h2 className="text-center text-gray-400 text-lg ">
          ดาวน์โหลดแอปพลิเคชัน Oho Chat ได้ทั้งใน iOS และ Android
        </h2>
        <div
          id="store-container"
          className="w-full flex gap-5 justify-center items-center"
        >
          <div id="app-store" href="#" className="">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633beda0c3b7123436a7adce_app-store.svg"
              alt="Download on App Store"
              className="w-full h-14 object-contain"
            />
          </div>
          <div id="google-store" href="#" className="">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633bed967c9820e6547a6f64_google-play.svg"
              alt="Get it on Google Play"
              className="h-10 h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;

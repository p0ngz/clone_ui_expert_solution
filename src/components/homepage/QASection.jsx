const QASection = () => {
  return (
    <div
      id="qa-section"
      className="w-full px-6 sm:px-16 md:px-10 py-20 bg-[url('https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/63f35b63427729c2bb86d764_testimonial_video_bg_blurry.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-stretch">
          {/* Left - Text Content */}
          <div className="flex-1 px-8 py-10 md:px-12 md:py-14 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-red-500 leading-snug">
              คำถามที่พบบ่อย
            </h2>
            <div className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed space-y-1">
              <p>รวมทุกข้อสงสัยเกี่ยวกับโอ้โหแชท</p>
              <p>คลิกอ่านเพิ่มเติม เพื่อค้นหาข้อมูลที่<br className="hidden lg:block"/>คุณต้องการ</p>
            </div>
            <div className="mt-8 w-full ">
              <button className="px-10 sm:px-30 py-3  flex-1 rounded-2xl bg-card-btn hover:bg-red-500 hover:cursor-pointer transition-colors text-white">
                <span>อ่านเพิ่มเติม</span>
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:w-[45%] shrink-0 p-5">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/675949f56407c8142b012bea_Oho%20Chat_%E0%B8%84%E0%B8%B3%E0%B8%96%E0%B8%B2%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%9A%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%A2.png"
              alt="qa img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QASection;

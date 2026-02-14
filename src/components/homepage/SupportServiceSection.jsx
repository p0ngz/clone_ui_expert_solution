const SupportServiceSection = () => {
  return (
    <div
      id="support-section"
      className="w-full px-6 sm:px-16 md:px-10 py-20 bg-[url('https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/63f35b63427729c2bb86d764_testimonial_video_bg_blurry.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-stretch">
          {/* Left - Text Content */}
          <div className="flex-1 px-8 py-10 md:px-12 md:py-14 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-red-500 leading-snug">
              โอ้โห สอบใช้ระบบฟรี
            </h2>
            <div className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed space-y-1">
              <p>สามารถนัดเวลาเพื่อให้ทีมงานอธิบายฟีเจอร์และตัวระบบ</p>
              <p>ใช้เวลาไม่เกิน 45 นาที</p>
              <p>ติดต่อสอบถามหรือแจ้งปัญหา</p>
              <p>ทุกวันจันทร์-ศุกร์ 10.00-18.00 น.</p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-sm lg:max-w-md">
              <button className="flex-1 rounded-lg bg-red-100 hover:bg-red-200 hover:cursor-pointer transition-colors">
                <a
                  href="tel:020964654"
                  className="flex flex-col items-center gap-2 px-5 py-2.5 text-sm font-light"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6200d6515c2d6111e778e20d_icon_call.png"
                    alt="call"
                    className="w-4 h-4 object-contain"
                  />
                  02-096-4654
                </a>
              </button>
              <button className="flex-1 rounded-lg bg-red-100 hover:bg-red-200 hover:cursor-pointer transition-colors">
                <a
                  href="mailto:hello@oho.chat"
                  className="flex flex-col items-center gap-2 px-5 py-2.5 text-sm font-light"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6200d651e806ec6e7241482a_icon_mail.png"
                    alt="mail"
                    className="w-4 h-4 object-contain"
                  />
                  hello@oho.chat
                </a>
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:w-[45%] shrink-0 p-5">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6507fcd13e87670e4fa235de_Image_9.webp"
              alt="Support team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServiceSection;

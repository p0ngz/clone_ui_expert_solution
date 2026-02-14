import CardResult from "../shared/CardResult";

const resultData = [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/67db9ea75203d0ff23613394_Oho%20Chat_Case%20study_Furring%20line%20(1).png",
    description:
      "เปลี่ยนทุกแชทให้เป็นลูกค้าด้วย Oho Chat ระบบรวมแชท รองรับธุรกิจขนาดใหญ่",
    subDescription:
      "หมดปัญหาแชทตกหล่น ตอบช้า บริหารทีมยาก วัดผลการทำงานไม่ได้ มารู้จัก Oho Chat ระบบรวมแชทที่จะช่วยให้แอดมินตอบแชทไวขึ้น เพิ่มโอกาสปิดการขาย และเจ้าของธุรกิจสามารถมอนิเตอร์การตอบแชทหลายแอปพลิเคชันได้ในจอเดียว",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/678647daa08bc05b3b9064d6_Oho%20Chat_Case%20study_%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%B5%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%87.png",
    description:
      "เชื่อมต่อระบบรวมแชทกับ n8n สร้างแชทบอททำงานสลับกับแอดมิน พร้อม 3 ตัวอย่างการใช้งานจริง",
    subDescription:
      "เรียนรู้การใช้งาน ai chatbot ที่ทำงานอัตโนมัติและสลับกับคนได้อย่างลงตัว ผ่านการเชื่อมต่อระบบรวมแชท Oho Chat และ n8n พร้อม 3 ตัวอย่างใช้งานจริงของธุรกิจค้าขาย คลินิก และภาครัฐ ส่งต่อบทความนี้ให้ทีงานของุณเลย! มีประโยชน์ในชีวิตประจำวันแน่นอน",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/676106a8fce316ee301d92dc_Oho%20Chat_Case%20study_Rei%20clinic.png",
    description:
      "เซลใช้ไลน์ส่วนตัวคุยในไลน์กลุ่ม ตรวจสอบการทำงานยาก ใช้ฟีเจอร์แชทกลุ่ม จาก Oho Chat",
    subDescription:
      "หลายธุรกิจเจอปัญหาเซลใช้ไลน์ส่วนตัวในไลน์กลุ่ม ทำให้ไม่สามารถมอนิเตอร์งานได้ เมื่อเซลลาออกก็นำข้อมูลลูกค้าไปด้วย ปัญหานี้แก้ไขได้ง่าย ๆ ด้วยฟีเจอร์แชทกลุ่มจากระบบรวมแชท Oho Chat",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/676101ed5d35f3853db8a389_Oho%20Chat_Case%20study_FitSloth.png",
    description:
      "รวมแชทหลายเพจ พร้อมตั้งค่าการมองเห็นช่องทาง ด้วยฟังก์ชัน Channel Visibility จาก Oho Chat",
    subDescription:
      "มีแชทหลายเพจ หลายสาขา อยากรวมทั้งหมดมามอนิเตอร์ในที่เดียว แต่อยากให้แอดมินเห็นแค่บางช่องทาง ต้องใช้ฟังก์ชันตั้งค่าการมองเห็นช่องทางจากระบบรวมแชท Oho Chat",
    linkUrl: "",
  },
];
const ResultSection = () => {
  return (
    <div
      id="result-section"
      className="px-8 py-10 w-full h-auto bg-[linear-gradient(180deg,#edecfd,#fee)]"
    >
      <h2 className="text-2xl md:text-3xl text-center text-black font-semibold">
        ผลการใช้งานจริงจากลูกค้า
      </h2>
      <div
        id="result-list-container"
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {resultData.map((result, index) => (
          <CardResult
            key={index}
            description={result.description}
            subDescription={result.subDescription}
            linkUrl={result.linkUrl}
            imageUrl={result.imageUrl}
          />
        ))}

      </div>
      <div id="all-case">
        <p className="text-center underline text-text-blue">ดูบทความทั้งหมด</p>
      </div>
    </div>
  );
};

export default ResultSection;

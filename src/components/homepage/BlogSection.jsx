import CardResult from "../shared/CardResult";

const resultData = [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/690841fa74712982d133977f_OHO_web-blog-OG.png",
    description:
      "Furring Line ธุรกิจขายฝ้า ผนัง ใช้ Oho ทำให้ลูกค้าได้ข้อมูลสินค้าเร็ว ลดการตอบคำถามซ้ำ ๆ เซลโฟกัสงานขายได้เต็มที่",
    subDescription:
      "Oho Chat ช่วยให้ลูกค้าเข้าถึงข้อมูลสินค้าได้เร็วขึ้น เซลไม่ต้องตอบคำถามซ้ำ ๆ มีเวลาโฟกัสการขายลูกค้าตัวจริงที่พร้อมซื้อ ธุรกิจรองรับแชทที่เพิ่มขึ้น ได้ด้วยเซลจำนวนเท่าเดิม",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/68ddddea227915f8d007abb3_%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%81%E0%B8%8A%E0%B8%97%E0%B8%81%E0%B8%B1%E0%B8%9A%20n8n%20%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%8A%E0%B8%97%E0%B8%9A%E0%B8%AD%E0%B8%97%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%81%E0%B8%AD%E0%B8%94%E0%B8%A1%E0%B8%B4%E0%B8%99%20%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%203%20%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%87.webp",
    description:
      "เชื่อมแชทบอท กับ API ข้อมูลทอง รู้อย่างนี้ย้ายมาใช้ Oho ตั้งนานแล้ว แก้ทุกปัญหา เพิ่มโอกาสตัดสินใจซื้อ",
    subDescription:
      "ธุรกิจห้างทองหลีเต้ง เชื่อมต่อแชทบอทกับ API ราคาทอง ลูกค้าสามารถกดเช็คราคาทองผ่านแชทได้แบบเรียลไทม์ บอกราคาแม่นยำ รวดเร็ว ธุรกิจไม่ต้องคอยตอบคำถามซ้ำ ๆ ออมทองผ่านแชทสะดวก เก็บข้อมูลลูกค้าเป็นระบบ แก้ทุกปัญหาที่เคยมี",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/68be789183187222652c0533_%E0%B9%80%E0%B8%8B%E0%B8%A5%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%20%20%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A2%E0%B8%B2%E0%B8%81%20%20%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%9F%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%20%E0%B9%81%E0%B8%8A%E0%B8%97%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%20%E0%B8%88%E0%B8%B2%E0%B8%81%20Oho%20Chat%20(1).png",
    description:
      "Rei Clinic เชื่อม Oho กับ CRM ระบบสะสมแต้ม ตอบเร็วทุกหัตถการ ด้วยแชทบอท และคลังสื่อ",
    subDescription:
      "เมื่อจำนวนคนไข้ที่ทักมามากขึ้น Oho Chat ช่วย Rei Clinic ดูแลทั้งคนไข้ใหม่และเก่าได้อย่างมีประสิทธิภาพ พร้อมกับเชื่อมระบบ CRM ที่มีอยู่แล้วให้เรียกใช้ข้อมูลลูกค้าได้อย่างลื่นไหลง่าย ๆ ในที่เดียว",
    linkUrl: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/611f7b07b43f5829bf1ca02f/68be77b5be1aead243329fe4_%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%81%E0%B8%8A%E0%B8%97%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9E%E0%B8%88%20%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%20Oho%20Chat%20(2).png",
    description:
      "FitSloth สร้างบริการแบบ Customize ให้ลูกค้าได้สะดวกด้วยฐานข้อมูลบน Oho ติดแท็ก เก็บข้อมูล ส่งต่อแชทได้ลื่นไหล",
    subDescription:
      "แอปวางแผนการกิน สร้างสุดยอดความประทับใจให้ลูกค้าด้วยการมอบบริการแบบ Customize ด้วยการใช้ Oho Chat ให้สามารถเก็บข้อมูลลูกค้าครบถ้วน ช่วยบริหารแชทหลังบ้านให้เป็นระบบ ตอบแชทไวเพิ่มประสิทธิภาพทีมงาน",
    linkUrl: "",
  },
];
const BlogSection = () => {
  return (
    <div id="blog-section" className="px-8 w-full h-auto">
      <h2 className="text-2xl md:text-3xl text-center text-black font-semibold">
        บทความล่าสุด
      </h2>
      <p className="text-black font-light text-center mt-3 mb-5">
        ติดตามบทความ สาระน่ารู้
        การตลาดที่จะช่วยทำให้แบรนด์ของคุณเปลี่ยนจากคนรู้จักมาเป็นคนรู้ใจ
      </p>
      <div
        id="blog-list-container"
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
      >
        {resultData.map((result, index) => (
          <CardResult
            key={index}
            description={result.description}
            subDescription={result.subDescription}
            linkUrl={result.linkUrl}
            imageUrl={result.imageUrl}
            isBlog={true}
          />
        ))}
      </div>
      <div id="all-case">
        <p className="text-center underline text-text-blue">ดูเคสทั้งหมด</p>
      </div>
    </div>
  );
};

export default BlogSection;

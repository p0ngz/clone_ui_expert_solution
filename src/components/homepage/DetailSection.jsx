import Card from "../shared/Card.jsx";
import BoxStatistic from "../shared/BoxStatistic.jsx";
const partnerDetail = [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669f9ba5ea891d60aac54834_Client_coway_11_11zon.webp",
    typeBusiness: {
      th: "ธุรกิจออนไลน์",
      en: "Digital and Online Business",
    },
    detail: [
      "โทรหาฐานลูกค้าเก่า อัพโปรลูกค้าใหม่",
      "ตรวจสอบสต็อกสินค้าทันที่พร้อมที่ลูกค้าสั่ง",
      "จัดกลุ่มแบ่งประเภทลูกค้าใช้บริเวณ ส่งแก็ตอัตโนมัติ",
      "ติดตามเคสลูกค้าใช้ ส่งอะไรเมื่อเดือนก่อน",
    ],
    logoUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66aa420be36e142327a63747_3.png",
    description:
      "Coway กับแอ กันครีพเวอร์ ส่งข้อมูลที่ไรวอล์ต เพิ่มประสิทธิภาพไม่มีสิ้น",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66aa42bb46ec5ffaf7e7c9c5_Client_Fastship_11zon.webp",
    typeBusiness: {
      th: "ธุรกิจโลจิสติกส์",
      en: "Logistics & B2B",
    },
    detail: [
      "มอนิเตอร์แชทลูกค้า Real time พร้อมทั้งวัดผลทีมงาน",
      "เชื่อม API กับ CRM และระบบที่มีอยู่แล้วได้",
      "ลดงานซ้ำซ้อน ค้นหาข้อมูลลูกค้าได้ทันที",
      "ติดตามเคสลูกค้า เช่น สถานะขนส่ง Sales pipeline",
    ],
    logoUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66aa420b727dd8819aeaf426_5.png",
    description: "Fastship รวมแพทเชื่อม API เพื่อตอบโจทย์ความต้องการธุรกิจ",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669f9ba5c6977aa521b400c7_Client_phyathai2_12_11zon.webp",
    typeBusiness: {
      th: "ธุรกิจโรงพยาบาลและคลินิก",
      en: "Health & Beauty",
    },
    detail: [
      "ส่งแพ็ก ฐานข้อมูล ดูลค้ำม้าหรือไม้ชุ่นผอ",
      "รับแชทจาก ม.ม. ทีมการตลาด ส่งเริ่มรายได้ทันที",
      "แชทบนเว็บ ออโตอีเมล์ คลังข้อมูล ลดความผิดพลาด",
      "แจ้งเตือน ทางหลายแท็ก ทางหลายสาขาในที่เดียว",
    ],
    logoUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669e7a4c663149ec078f0fbd_4.png",
    description: "พญาไท 2 บริการลูกค้าที่เหนือกว่า ตอบทุกช่องทาง 24 ชั่วโมง",
  },
];

const statisticData = [
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd10c53464bdde7fef149a_Success_04.png",
    description: "ข้อความที่ตอบลูกค้ามากกว่า",
    amount: "193 ล้าน",
    unit: "ข้อความ",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd10c5218b214cad49c363_Success_03.png",
    description: "แชทบอทที่ตั้งไว้มากกว่า",
    amount: "39,134",
    unit: "คำตอบ",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd10c570547b19c2c93cef_Success_01.png",
    description: "มีการติดแท็กไปแล้วกว่า",
    amount: "11.6 ล้าน",
    unit: "แท็ก",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd10c5c0dbec3b59734b95_Success_02.png",
    description: "ธุรกิจที่ใช้งานอยู่",
    amount: "4,255",
    unit: "ธุรกิจ",
  },
];
const DetailSection = () => {
  return (
    <div id="detail-section" className="bg-[linear-gradient(180deg,_#fee,_#eaeafa)]  py-20 sm:p-20 md:p-10">
      <div id="detail-container" className="my-20">
        <div
          id="video-container"
          className="w-full flex flex-col items-center justify-center gap-3 px-10 py-20"
        >
          <h1 className="text-2xl md:text-3xl text-center text-text-blue font-semibold">
            เริ่มใช้งานโอ้โหแชท ระบบจัดการแชทอันดับ 1
          </h1>
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              src="https://www.youtube.com/embed/T18Hff2GNEk?list=PLE6ctx0JUnfdVWl3AF20GvIuVcc_2qPQU"
              title="เริ่มต้นใช้งาน Oho Chat | ขั้นที่ 1 การสร้างบัญชีผู้ใช้งาน"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-2xl shadow-xl/20"
            ></iframe>
          </div>
        </div>
        <div id="partner-business">
          <div className="flex flex-col items-center justify-center gap-2 py-10 ">
            <h1 className="text-2xl md:text-3xl text-center text-text-blue font-semibold">
              จัดการแชท Omnichannel ให้ธุรกิจชั้นนำ
            </h1>
            <h2 className="text-xl md:text-xl text-center text-gray-400 font-semibold">
              ทั้งการตลาด การขาย การบริการครบ จบในที่เดียว
            </h2>
          </div>
          <div
            id="list-business-container"
            className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-8  md:px-5lg:px-16"
          >
            {partnerDetail.map((partner, index) => (
              <Card
                key={index}
                imageUrl={partner.imageUrl}
                typeBusiness={partner.typeBusiness}
                detail={partner.detail}
                logoUrl={partner.logoUrl}
                description={partner.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div id="statistic-container" className="mt-20">
        <h1 className="text-2xl md:text-3xl text-center text-text-blue font-semibold">
          สถิติการใช้งาน จากลูกค้าที่ไว้วางใจเรา
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 mt-10">
          {statisticData.map((stat, index) => (
            <BoxStatistic
              key={index}
              iconUrl={stat.iconUrl}
              description={stat.description}
              amount={stat.amount}
              unit={stat.unit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSection;

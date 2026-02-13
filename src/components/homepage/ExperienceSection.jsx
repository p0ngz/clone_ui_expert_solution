import { useState, useEffect, useRef } from "react";
import BoxExperience from "../shared/BoxExperience";
import DetailExperience from "../shared/DetailExperience";
const experienceListData = [
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd0c7177e2e9f211727d73_show_chart.png",
    title: "เพิ่มยอดขาย",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd0be990785d9f87f9a67f_checkbox-marked-circle-outline.png",
    title: "รวมแชท",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd0b9d26032d0b1af6ad89_tag_faces.png",
    title: "ใช้งานง่าย",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fbb7fa8c83d247eb05828c_24.png",
    title: "เพิ่มประสิทธิภาพ",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd0c715f24c10876526c35_support_agent.png",
    title: "พร้อมซัพพอร์ท",
  },
  {
    iconUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/61fd0c7138f6b52760f60c22_privacy_tip.png",
    title: "ปลอดภัย",
  },
];

const dataDetailExperience = [
  {
    title: "ใช้งานง่าย",
    description:
      "ฟังก์ชันใช้งานง่ายไม่ซับซ้อน ไม่ต้องเก่งเทคโนโลยีก็ใช้ได้ เชื่อมต่อและติดตั้งง่าย ภายใน<br/> 5 นาที เมนูเป็นภาษาไทย ช่วยให้ธุรกิจคุณประหยัด ไม่ต้องเขียนโค้ด ไม่ต้องสร้าง<br/> แอปพลิเคชันใหม่ ไม่ต้องปวดหัวกับกราฟและชาร์ตที่ไม่จำเป็น",
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6200fe45bfff196cef5d6dd4_benefit_easytouse.png",
  },
  {
    title: "เพิ่มยอดขาย",
    description: `สร้างโอกาสเพิ่มยอดขาย เพราะตอบเร็ว ไม่พลาดซักแชท เปลี่ยนลูกค้าขาจรให้เป็นลูกค้า<br/>ระยะยาว วัดผลแอดมินได้`,
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/63cf54028f476222850d2114_image1.png",
  },
];
const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseRef = useRef(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // auto-rotate every 10s
    const rotate = () => {
      setActiveIndex((prev) => (prev + 1) % dataDetailExperience.length);
    };

    intervalRef.current = setInterval(() => {
      if (!pauseRef.current) rotate();
    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div
      id="experience-section"
      className="w-full py-8 bg-[linear-gradient(180deg,_#eaeafa,_#fff)] px-6 sm:px-6"
    >
      <h2 className="text-2xl md:text-3xl text-center text-text-blue font-semibold">
        ให้ Customer Experience ที่ดี
        <br /> เป็นเรื่องง่ายและทำได้จริง
      </h2>
      <div
        id="experience-list-container"
        className="hidden md:w-2/3 lg:w-full sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8 sm:gap-8 md:gap-2 mt-8 lg:px-0 max-w-4xl mx-auto place-items-center"
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        {experienceListData?.map((data, index) => (
          <BoxExperience
            key={index}
            iconUrl={data?.iconUrl}
            title={data?.title}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <DetailExperience
        title={dataDetailExperience[activeIndex]?.title}
        description={dataDetailExperience[activeIndex]?.description}
        imageUrl={dataDetailExperience[activeIndex]?.imageUrl}
      />
    </div>
  );
};

export default ExperienceSection;

import BoxPartnerPill from "../shared/BoxPartnerPill";
import BoxPartner from "../shared/BoxPartner.jsx";
const heartOfBusinessData = [
  {
    percent: "83",
    title: "มีการติดต่อกับธุรกิจผ่านการแชท",
  },
  {
    percent: "90",
    title: "ให้ความสำคัญกับการตอบกลับโดยทันทีจากธุรกิจ",
  },
  {
    percent: "70",
    title: "มีแนวโน้มใช้บริการกับธุรกิจที่มีการตอบผ่านแชท",
  },
  {
    percent: "80",
    title: "Gen Z และ Millennials แชทติดต่อธุรกิจมากกว่าช่องทางอื่น",
  },
];

const partnerIconData = [
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d12cf4bfa7341a6b8b9_Client%27s%20Logo.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a283567dc3a9d54fc6f8b_1.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d127324d99b3e8ec17a_Client%27s%20Logo-2.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6687da66d656f8849a56f506_thai%20pbs.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6668193dca0908f8a4cceab5_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28352a8cb732070f4158_6.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28354b732665a48e93a1_7.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d0e1253ba2a1356e7ad_Client%27s%20Logo-10.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2836be11861b3eed1b7b_8.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6385d42c717fc9208c265232_Frame%20507.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6385d44c74a7331fa255008e_Frame%20508.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d0c3287363e2df0102d_Client%27s%20Logo-16.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d0c2377a2cc0c6fd5bf_Client%27s%20Logo-14.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad6d0c010b9cbda51963af_Client%27s%20Logo-17.jpg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28368aa2b99af1de443c_9.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28363b9a9eccfaf2cd6c_4.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2835c1c3a5e5ef59d1d4_5.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66bef0460489a9e32c45e804_logo_coway%20(2).png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28375d0f50e4621c5819_10.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2836ffd0c6497ee8a479_11.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2836f45c4035b7b0ca74_12.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2836f7a2507304bfe0db_14.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28362c5a8afebf64b9c3_15.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2837d2c56e731fb5d1ed_16.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/64ba53647582765aec3d441c_logo_chularat.jpeg",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66d1a140f3c61b3747a317a4_logo_425degree.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2837e1e202e29555499e_18.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66d1a140b62a5bd50d0ed356_logo_prince%20hospital.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28370bf2c1287dec3869_21.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2837f8e9588b26afa35f_29.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2837c5c0e3d4c7aebe3c_22.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a283780ae2c0395571812_23.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66beee14e26aa183a4675194_logo_lotte.webp",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28363d668678317ec30d_3.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6668192795931fb07916a547_proud.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28374e5ac19ecffaa4d0_24.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28372db768da6318c5be_26.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6668192789b296f6268ba69d_plus%20dental.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a2837b6606c529cc0b3ee_27.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/669a28374cd0a51300a38da4_28.png",
  "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/67efc44007322b1fb56b80db_image%20(29).png",
];

const partnerBusinessData = [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/64afd425fa0b799cb2126e5c_MBP%20Badge%20-%20Dark%20backgrounds%402x.png",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad7789cd95df172f1a14bb_Client%27s%20Logo.jpg",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad77896b427124b6aebd24_Client%27s%20Logo-1.jpg",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62ad778a2377a2a285701616_Client%27s%20Logo-2.jpg",
    description:
      "ผ่านหลักสูตรการรับรอง <br>Pre-ISO-IEC29110 <br>เป็นผู้ประกอบการดิจิตัลจากสำนักงานส่งเสริมเศรษฐกิจดิจิทัล",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/633ea2bc44145d5ded2895fa_Screen%20Shot%202565-10-06%20at%2016.40.47.png",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66a9bcbbdf181baf262a4a7f_Untitled%20design%20(9).png",
    description: "",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/66a9be35d3e41c129afaf269_Untitled%20design%20(12).png",
    description: "",
  },
];

const PartnerSection = () => {
  return (
    <div
      id="partner-section"
      className="w-full px-10 sm:px-25 md:px-10 py-20 rounded-xl bg-[#edecfd] "
    >
      <div
        id="heart-of-business"
        className="w-full h-full px-5  py-10 bg-white rounded-xl shadow-xl/20"
      >
        <h2 className="text-2xl md:text-3xl text-center text-black font-semibold">
          ทำไมแชทคือหัวใจหลักของธุรกิจ?
        </h2>
        <div
          id="heart-of-business-list"
          className="mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {heartOfBusinessData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-start gap-3 p-5 border-b border-gray-200 sm:border-b-0 md:border-b-0 md:border-r ${
                index === heartOfBusinessData.length - 1 ? "md:border-r-0" : ""
              }`}
            >
              <div className="text-2xl font-semibold text-text-blue">
                {item.percent}%
              </div>
              <div className="text-center text-sm text-black font-light">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="partner-list-container" className="my-45">
        <h2 className="text-2xl md:text-3xl text-center text-black font-semibold">
          ลูกค้าที่ไว้วางใจ
        </h2>
        <div id="partner-list" className="mt-8">
          <div className="max-w-5xl mx-auto">
            <div
              id="partner-list-grid"
              className="grid grid-cols-3 min-[400px]:grid-cols-4 min-[600px]:grid-cols-5 min-[750px]:grid-cols-6 min-[900px]:grid-cols-7 lg:grid-cols-9 gap-3 md:gap-4"
            >
              {partnerIconData.map((src, index) => (
                <BoxPartner key={index} imageUrl={src} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="partner-business-container" className="hidden sm:block my-45">
        <h2 className="text-2xl md:text-3xl text-center text-black font-semibold">
          พันธมิตรทางธุรกิจ
        </h2>
        <div id="partner-business-list" className=" mt-8">
          <div className="max-w-5xl mx-auto">
            <div
              id="partner-business-list"
              className="flex flex-wrap justify-center items-center gap-6"
            >
              {partnerBusinessData.map((partner, index) => (
                <BoxPartnerPill
                  key={index}
                  imageUrl={partner.imageUrl}
                  description={partner.description}
                  wide={!!partner.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;

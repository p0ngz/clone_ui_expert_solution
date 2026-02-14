const Card = ({
  imageUrl,
  typeBusiness,
  detail = [],
  logoUrl,
  description,
}) => {
  return (
    <div
      className="col-span-1 w-full  p-3 rounded-xl overflow-hidden shadow-lg bg-white flex flex-col"
    >
      {/* Hero Image */}
      <div className="w-full h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt={typeBusiness?.en || ""}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="py-6 flex flex-col gap-4 flex-1">
        {/* Category */}
        <p className="text-sm text-black font-semibold">{typeBusiness?.th}</p>

        {/* Title */}
        <h2 className="text-xl font-bold text-card-title text-center">
          {typeBusiness?.en}
        </h2>

        {/* Bullet Points */}
        <ul className="text-sm text-gray-700 space-y-1" style={{ fontFamily: "'IBM Plex Sans Thai', sans-serif", fontWeight: 400 }}>
          {detail.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>

        {/* Customer Section */}
        <div className="flex flex-col items-center gap-3 mt-auto pt-4">
          <h3 className="text-card-title font-semibold">ลูกค้าของเรา</h3>
          {logoUrl && (
            <img
              src={logoUrl}
              alt="customer logo"
              className="h-14 object-contain"
            />
          )}
          {description && (
            <p className="text-sm text-gray-400 text-center underline font-semibold">{description}</p>
          )}
        </div>

        {/* Read More Button */}
        <button className="w-full py-2 mt-4 border-1 border-card-btn text-card-btn rounded-lg  hover:bg-text-blue hover:text-white hover:cursor-pointer transition">
          อ่านเพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default Card;

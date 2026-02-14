import React from "react";

const BoxPartnerPill = ({ imageUrl, description, alt = "partner", linkUrl, wide = false }) => {
  const content = (
    <div
      className={`bg-white rounded-2xl shadow-md flex items-center h-20 transition-shadow hover:shadow-lg ${
        wide ? "gap-4 px-5" : "px-4 justify-center"
      }`}
    >
      <div className={`shrink-0 ${wide ? "w-24 h-16 md:w-32 md:h-20" : "w-full h-12"}`}>
        <img src={imageUrl} alt={alt} className="w-full h-full object-contain" />
      </div>

      {description && wide && (
        <div className="text-xs md:text-sm text-gray-700 leading-snug" dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </div>
  );

  if (linkUrl) return (
    <a href={linkUrl} className="inline-block hover:cursor-pointer">
      {content}
    </a>
  );

  return content;
};

export default BoxPartnerPill;

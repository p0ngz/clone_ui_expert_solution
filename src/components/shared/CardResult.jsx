const CardResult = ({
  description,
  subDescription,
  imageUrl,
  linkUrl,
  isBlog = false,
}) => {
  return (
    <div className="col-span-1 bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">
      <div
        id="image-result"
        className="h-1/2 lg:h-1/3 flex items-start justify-between gap-3"
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt="thumb"
            className="w-full h-full  object-cover shadow-sm"
          />
        )}
      </div>
      <div id="result-info" className="h-1/2 lg:h-2/3 px-5 pt-5 pb-15">
        {description && (
          <h3 className="text-sm font-semibold text-gray-800">{description}</h3>
        )}
        {subDescription && (
          <p className="mt-2 text-sm text-gray-600 font-light leading-relaxed">
            {subDescription}
          </p>
        )}
      </div>
      <div className={`${isBlog ? "block" : "hidden"} px-5 pb-3 `}>
        <p className="text-start underline text-xs  md:text-sm text-text-blue font-light">ดูเคสทั้งหมด</p>
      </div>
    </div>
  );
};

export default CardResult;

const CardFeature = ({
  imageUrl,
  title,
  description,
  features = [],
  linkUrl,
  reverse = false,
}) => {
  return (
    <div id="card-feature" className="w-full bg-white my-20">
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6`}>
        <div id="left" className="w-full">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain"
            />
          )}
        </div>

        <div id="right" className="w-full">
          {title && (
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
          )}
          {description && (
            <div className="mb-4 text-gray-600">
              {typeof description === "string" && description.includes("<") ? (
                <p className="font-light">{description}</p>
              ) : (
                // validate <br/> and split by it
                description.split(/<br\s*\/?>/i).map((part, i) => (
                  <p key={i} className="font-light mb-2">
                    {part}
                  </p>
                ))
              )}
            </div>
          )}

          <ul className="space-y-3 ">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-center justify-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  {f?.iconUrl ? (
                    <img
                      src={f?.iconUrl}
                      alt="icon"
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    <span className="text-sm">•</span>
                  )}
                </div>
                <div className="text-gray-700 leading-tight flex items-center">
                  {f?.title && <span className="font-medium">{f.title}</span>}
                </div>
              </li>
            ))}
          </ul>

          {
            <div className="mt-4">
              <a
                href={linkUrl}
                className="text-indigo-600 font-medium inline-flex items-center gap-2"
              >
                อ่านเพิ่มเติม
                <span className="text-indigo-400">›</span>
              </a>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CardFeature;

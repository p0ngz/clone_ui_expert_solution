const BoxStatistic = ({ iconUrl, description, amount, unit }) => {
  return (
    <div className="col-span-1 flex flex-col items-center gap-3">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={description}
          className="w-[70%] h-[70%] lg:w-[80%] lg:h-[80%] object-contain"
        />
      )}
      <p className="text-xs md:text-sm text-black text-center font-light">{description}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-xl lg:text-2xl font-semibold text-black">{amount}</span>
        <span className="text-base text-gray-500">{unit}</span>
      </div>
    </div>
  );
};

export default BoxStatistic;

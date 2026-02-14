import { useEffect } from "react";

const BoxExperience = ({ iconUrl, title, active = false, onClick }) => {
  useEffect(() => {}, [active]);

  const baseClasses =
    "flex flex-col items-center justify-center py-3 rounded-2xl border transition-all shadow-sm text-red-500 border-red-100 hover:border-red-400 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-200 w-full";

  return (
    <button
      type="button"
      className={`${baseClasses} md:w-36 md:h-36 ${active ? "bg-red-200 border-red-400" : "bg-white"}`}
      onClick={onClick}
    >
      {iconUrl && (
        <img src={iconUrl} alt={title} className="w-10 h-10 md:w-14 md:h-14 mb-2 object-contain" />
      )}
      <span className="text-base md:text-sm font-light text-black mt-1 text-center">{title}</span>
    </button>
  );
};

export default BoxExperience;

const DetailExperience = ({ title, description, imageUrl }) => {
  return (
    <>
      <div
        id="description-experience"
        className="text-center mt-10 flex flex-col gap-5"
      >
        <h2 className="text-2xl">{title}</h2>
        <p className="font-light">{description}</p>
      </div>
      <div id="experience-img">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
};

export default DetailExperience;

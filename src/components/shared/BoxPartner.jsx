const BoxPartner = ({ imageUrl, title, linkUrl }) => {
  const content = (
    <div className="w-full aspect-square bg-white rounded-2xl shadow-md flex items-center justify-center rounded-2xl transition-shadow hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title || "partner"}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );

  if (linkUrl) {
    return (
      <a href={linkUrl} className="inline-block hover:cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
};

export default BoxPartner;

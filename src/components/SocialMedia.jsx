const SocialMedia = ({ src, alt }) => {
  return (
    <a href="#">
      <div className="flex items-center justify-center rounded-full bg-white p-4">
        <img src={src} alt={alt} />
      </div>
    </a>
  );
};

export default SocialMedia;

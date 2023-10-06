const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex w-full flex-col rounded-[20px] px-10 py-16 shadow-3xl">
      <div className="flex w-fit items-center justify-center rounded-full bg-coral-red p-2">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="info-text mt-3">{subtext}</p>
    </div>
  );
};

export default ServiceCard;

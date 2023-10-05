const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer bg-card bg-cover bg-center bg-no-repeat max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center max-sm:p-4 sm:h-40 sm:w-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className="w-[127px] object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

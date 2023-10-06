import { star } from "../assets/icons";

const Review = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center md:max-w-md">
      <div className="flex items-center justify-center">
        <img
          src={imgURL}
          alt={customerName}
          className="w-[120px] rounded-full"
        />
      </div>
      <p className="info-text">{feedback}</p>
      <div className="flex items-center gap-2.5">
        <img src={star} alt="rating" className="w-[24px]" />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-2xl font-bold">{customerName}</h3>
    </div>
  );
};

export default Review;

import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, rating, price }) => {
  return (
    <div className="m-auto flex w-fit flex-1 flex-col">
      <img src={imgURL} alt={name} className="w-[280px]" />
      <div className="mt-4 flex items-center gap-2.5">
        <img src={star} alt="rating" className="w-[24px]" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
        {name}
      </h3>
      <p className="font-montserrat text-xl font-semibold leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

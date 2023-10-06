import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="max-container flex flex-col flex-wrap items-center justify-center gap-11 lg:flex-row-reverse"
    >
      <div className="flex w-full flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping adventure that transforms your experience with
          unbeatable bargains. From top-tier choices to astonishing discounts,
          we provide unmatched value that distinguishes us from the rest
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Embark on a boundless voyage, tailored to fulfill your individual
          desires, surpassing even the loftiest of expectations. Your journey
          with us is truly extraordinary
        </p>
        <div className="mt-11 flex w-full items-center gap-5">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={offer}
          alt="Special Offer"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};
export default SpecialOffer;

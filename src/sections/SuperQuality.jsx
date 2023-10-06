import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Indulge in the ultimate blend of comfort and style with our
          painstakingly crafted footwear. Our designs are engineered to enhance
          your journey, delivering unparalleled quality, innovation, and a dash
          of sophistication
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our relentless pursuit of perfection guarantees your absolute
          satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img src={shoe8} alt="Super Quality Shoe" className="w-[570px]" />
      </div>
    </section>
  );
};
export default SuperQuality;

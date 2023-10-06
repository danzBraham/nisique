import Review from "../components/Review";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section
      id="customer-reviews"
      className="max-container flex flex-col items-center justify-center gap-16"
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h2 className="font-palanquin text-4xl font-bold capitalize">
          What Our
          <span className="text-coral-red"> Customer </span> Say?
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Listen to heartfelt tales from our delighted customers as they share
          their extraordinary journeys with us
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-14 lg:flex-row">
        {reviews.map((review) => (
          <Review key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;

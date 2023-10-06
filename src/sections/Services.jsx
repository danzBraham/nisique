import { ServiceCard } from "../components";
import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className=" max-container grid w-full grid-cols-1 gap-9 lg:grid-cols-3"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};
export default Services;

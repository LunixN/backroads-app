import { servicesDetails } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />
      <div className='section-center services-center'>
        {servicesDetails.map((service) => {
          return <Service key={service.id} {...servicesDetails} />;
        })}
      </div>
    </section>
  );
};
export default Services;

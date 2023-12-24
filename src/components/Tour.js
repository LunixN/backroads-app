import { tours } from "../data";
const Tour = () => {
  return (
    <div className='section-center featured-center'>
      {tours.map((tour) => {
        const { id, title, img, text, date, country, days, price } = tour;

        return (
          <article className='tour-card' key={id}>
            <div className='tour-img-container'>
              <img src={img} className='tour-img' alt={title} />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{title}</h4>
              </div>
              <p>{text}</p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>
                  {country}
                </p>
                <p>{days} Days</p>
                <p>From ${price}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Tour;

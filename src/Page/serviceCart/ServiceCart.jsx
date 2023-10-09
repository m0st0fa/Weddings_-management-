/* eslint-disable react/prop-types */
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

import { Link } from "react-router-dom";


const ServiceCart = ({ cart }) => {

  const { title, image, description, id } = cart;

  return (
    <div className="card bg-blue-200">
      <figure><img className="h-50" src={image} data-aos="fade-up"
        data-aos-duration="3000" /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="card-actions justify-center">
          {
            description.length > 100 ?
              <p>{description.slice(0, 100)}
                <Link className="text-blue-600 items-center flex" to={`/news/${id}`}>  Read more <BsFillArrowUpRightSquareFill></BsFillArrowUpRightSquareFill>  </Link>
              </p>
              : <p>{description}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
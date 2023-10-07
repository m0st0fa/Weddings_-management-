/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";


const ServiceCart = ({ cart }) => {

  const { title, image, description, id } = cart;

  return (
    <div className="card bg-blue-200">
      <figure><img className="h-50" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="card-actions justify-center">
          {
            description.length > 100 ?
              <p>{description.slice(0,80)}
                <Link className="text-blue-600 items-center" to={`/news/${id}`}> Read more </Link>
              </p>
              : <p>{description}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
/* eslint-disable react/prop-types */

 
 const ServiceCart = ({cart}) => {
    console.log(cart)
    const {title,image,description} = cart;
    
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">More deatils</button>
          </div>
        </div>
      </div>
    );
 };
 
 export default ServiceCart;
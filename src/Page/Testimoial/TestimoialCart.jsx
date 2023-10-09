/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";



const TestimoialCart = ({ item }) => {
    const { name, image,bio,id } = item;

    return (
        <div className="card bg-blue-300 rounded" data-aos="fade-up"
        data-aos-duration="3000">
            <figure><img className="" src={image} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                {
                    bio.length > 100?
                    <p>{bio.slice(0,100)}
                    <Link className="text-red-500" to={`/deatils/${id}`}>
                       <button className="flex items-center"> Click to see More <BsFillArrowUpRightSquareFill></BsFillArrowUpRightSquareFill></button>
                       </Link>
                    </p>:
                    <p>{bio}</p>

                }
                
            </div>
        </div>
    );
};

export default TestimoialCart;
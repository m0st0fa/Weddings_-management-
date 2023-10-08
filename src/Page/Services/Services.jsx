import { useEffect } from "react";
import { useState } from "react";
import ServiceCart from "../serviceCart/ServiceCart";

const Services = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setCarts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    console.log(carts)
    return (
        <div>
            <h2 className="text-5xl font-bold text-center text-teal-800"> Our Services </h2>
            <div className="grid gap-3 md:grid-cols-3 my-10">

                {
                    carts.map(cart => <ServiceCart key={cart.id} cart={cart}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default Services;
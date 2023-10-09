import { useEffect } from "react";
import { useState } from "react";
import TestimoialCart from "../Testimoial/TestimoialCart";


const Testimonials = () => {
    const [test, setTest] = useState([])
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold text-balck items-center">Testimonials</h2>
            <div className="grid grid-cols-3 gap-3">
            {
                test.map(item=> <TestimoialCart key={item.id} item={item}></TestimoialCart>)
            }
        </div>
        </div>
    );
};

export default Testimonials;
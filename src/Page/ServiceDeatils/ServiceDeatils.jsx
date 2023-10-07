import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const ServiceDeatils = () => {
    const { id } = useParams()
    const Deatils = useLoaderData()
    const idInt = parseInt(id);
    const deatil = Deatils.find((deatil) => deatil.id === idInt);

    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-16 bg-gray-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="max-w-sm rounded-lg shadow-2xl" src={deatil.image} />
                    <div>
                        <h1 className="text-5xl font-bold">{deatil.title}</h1>
                        <p><small>{deatil.description.slice(0, 600)}</small></p>
                        <button className="my-2 btn btn-accent">This Event Price:{deatil.price}$</button>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <Footer></Footer>
            </div>
        </div>

    );
};

export default ServiceDeatils;
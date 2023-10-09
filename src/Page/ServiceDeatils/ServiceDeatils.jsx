import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const ServiceDeatils = () => {
    const { id } = useParams()
    const Deatils = useLoaderData()
    const idInt = parseInt(id);
    const news = Deatils.find((news) => news.id === idInt);

    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-16 bg-gray-200" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="max-w-sm rounded-lg shadow-2xl" src={news.image} />
                    <div>
                        <h1 className="text-5xl font-bold">{news.title}</h1>
                        <p><small>{news.description.slice(0, 600)}</small></p>
                        <button className="my-2 btn btn-accent">This Event Price:{news.price}$</button>
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
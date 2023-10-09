import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


const TestimoialCartDeatils = () => {
    const {id} = useParams()
    const Deatils = useLoaderData()
    const IdInt = parseInt(id)
    const deatils = Deatils.find((deatils)=> deatils.id === IdInt)
    return (
        <div>
            <div>
            <NavBar></NavBar>
            </div>
             <div className=" bg-amber-200 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="w-full" src={deatils.image} />
                    <div>
                        <h1 className="text-5xl font-bold mb-10">{deatils.name}</h1>
                        <p><small>{deatils.bio}</small></p>
                        <p><small>{deatils.education}</small></p>
                    </div>
                </div>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default TestimoialCartDeatils;
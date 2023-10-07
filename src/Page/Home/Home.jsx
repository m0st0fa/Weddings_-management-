import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";
import ForeverMemory from "./ForeverMemory";

 
 const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <ForeverMemory></ForeverMemory>
            <Footer></Footer>
        </div>
    );
 };
 
 export default Home;
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";

 
 const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
 };
 
 export default Home;
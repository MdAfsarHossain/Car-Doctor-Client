// import Home from "../components/Home/Home";
// import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* <Navbar></Navbar> */}
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
        <Products></Products>
        <OurTeam></OurTeam>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

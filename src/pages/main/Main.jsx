import Advantages from "../../Components/Advantages/Advantages";
import Home from "../../Components/Home/Home";
import Navbar from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";

const main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Advantages />
     
      <Contact />
    </>
  );
};

export default main;

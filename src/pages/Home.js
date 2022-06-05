import React from 'react';
import Hero from "../components/hero/index"
import Alianzas from "../components/alianzas/index"
 import Equipo from "../components/equipo/index"
 import Contacto from "../components/contacto/index"
import Footer from "../components/footer"
import Testimonial from "../components/testimonials/index";

 const Home = () => {
  return (
    <>
    <a href=" https://api.whatsapp.com/send/?phone=5492966485088&text&app_absent=0" class="float" target="_blank">
    <img src="./whatsapp.svg" alt="Whats app"/>
</a>
    <div className="w-full ">
    
    <Hero />
    <Equipo/>
    <Testimonial/>
    <Alianzas />
    <div className=" py-20">
        <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-28 bg-classicBlue  -mt-1   "></div>
        <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-44 bg-classicBlue  -mt-28   "></div>
        <Contacto />
    </div>
    <Footer /> 
  </div>
  </>
  );
};
export default Home;

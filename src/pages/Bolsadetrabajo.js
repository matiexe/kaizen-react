import React from 'react';
import {NavLink} from "react-router-dom";
import Footer from '../components/footer';
export const Bolsadetrabajo = () => {
  return (
      <>
  <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
  <div className=" grid md:grid-cols-2 gap-x-4 sm:px-6 sm:text-left md:text-left lg:text-left">
      <div>
          <h1 className=" tracking-tight font-custom  text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ">
              <span className=" title-container font-custom block xl:inline">¿Ansiedad? … ¡Nosotros también!</span>
          </h1>
          <p className="mt-3 text-sm font-custom text-gray-500 sm:mt-5 sm:text-sm sm:mx-auto md:max-w-xl lg:max-w-xl md:mt-5 md:text-lg lg:mx-0">
          Estamos trabajando para presentarles nuestra bolsa de trabajo, y con la misma, tenemos dos objetivos. El primero, es ayudar a conectar entre empresas y profesionales, para contribuir en oferta y demanda de empleo. Por otro lado, queremos recolectar datos para poder presentar información sobre el Ecosistema IT de Santa Cruz, a pesar de que cualquier persona de Argentina pueda registrarse. 
          </p>
          <p className="mt-3 text-sm font-custom text-gray-500 sm:mt-5 sm:text-sm sm:mx-auto md:max-w-xl lg:max-w-xl md:mt-5 md:text-lg lg:mx-0">
          Buscamos poder brindar información y contribuir en lo que respecta a Modernización, Innovación, Desarrollo Tecnológico y Educación IT a la provincia. Si estas en IT, tu registro es importante: Aunque no estés buscando empleo, y tu emprendimiento o empresa no este buscando profesionales, tu registro nos aporta mucha información.
          </p>
          <div className=" inline-flex gap-1 ">
                
         </div>
      </div>
      <div className="justify-end  lg:-mt-14 sm:justify-end md:justify-end lg:justify-end xl:justify-end  ">
          <div className="rounded-md w-full h-full ">
              <img className=" md:w-full md:h-auto md:rounded-none mx-auto "
                   src="/inprogress.jpg" alt="" width="500" height="600" />
          </div>
      </div>
  </div>
</main>
<Footer/>
</>
);
};

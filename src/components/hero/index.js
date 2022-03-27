import React from "react";
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const index = () => {
    return (

        <div class="pt-22">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
         
          <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 class="my-4 text-5xl text-blue-kai font-custom leading-tight">
             Quienes Somos ?
            </h1>
            <p class="leading-normal  font-custom text-base mb-8">
            Somos un equipo de trabajo distribuido por la República Argentina, unidos por la pasión por la tecnología y queremos tener la oportunidad de poder colaborar con vos en tus emprendimientos. 
            </p>
            <p class="leading-normal  font-custom text-base mb-8">
            Contáctanos si lo que buscas es asesoramiento o consultoría informática, gestión de proyectos de TI, desarrollos web o automatización de procesos
            </p>
            <button class="mx-auto lg:mx-0 hover:underline bg-blue-kai text-white hover:text-blue-kai hover:bg-white  hover:border-blue-kai font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={() => scroll.scrollTo(1900)}>
              Contactanos
            </button>
          </div>
        
          <div class="w-full md:w-3/5 py-6 text-center">
            <img class="w-10 h-30 ml-1 pl-20 md:w-4/5 z-50" src="/images/Hero.svg" />
          </div>
        </div>
        
      </div>
      
        // <div className="px-6  xl:px-0" >
        //     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center mx-auto container">
        //         <div className="xl:mt-8">
        //             <div className="text-2xl lg:text-4xl xl:text-6xl tracking-1px  font-custom">
        //                 <h1 className="mt-2  text-blue-kai lg:mt-0 ">Quienes Somos ? </h1>
        //             </div>
        //             <h2 className="text-lg lg:text-xl font-custom tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-color-gray-light"> Somos un equipo de trabajo distribuido por la República Argentina, unidos por la pasión por la tecnología y queremos tener la oportunidad de poder colaborar con vos en tus emprendimientos. Contáctanos si lo que buscas es asesoramiento o consultoría informática, gestión de proyectos de TI, desarrollos web o automatización de procesos</h2>
        //             <button className="flex items-center relative  justify-center border-2 border-white mt-4 md:p-8 lg:mt-10 rounded-3xl hover:text-blue-kai hover:bg-white  hover:border-blue-kai lg:text-s, font-custom text-white  lg:p-8 bg-blue-kai " onClick={() => scroll.scrollTo(1900)}>
        //                 Contactanos         
        //             </button>
        //         </div>
        //         <div className="w-full custom-height shadow-xl bg-blue-kai mt-8 lg:mt-0 rounded-3xl relative">
        //             <div className="-ml-8 xl:-ml-20 w-1/3">
        //                 <img loading="lazy" className src="/images/cloud_1.png" alt="cloud" />
        //             </div>
        //             <div className="w-full flex justify-center">
        //                 <img loading="lazy" className="absolute inset-26 m-auto w-2/3 md:-mb-20 xl:-mb-40" src="/images/Hero.svg" alt="saly" />
        //             </div>
        //             <div className>
        //                 <img loading="lazy" className="absolute xl:-mt-10 w-1/4 right-0" src="/images/cloud_2.png" alt="cloud" />
        //             </div>
        //             <div className>
        //                 <img loading="lazy" className="absolute ml-16 xl:ml-20 pb-14 xl:pb-20 w-1/5 left-0 bottom-0" src="/images/cloud_2.png" alt="cloud" />
        //             </div>
        //         </div>
        //     </div>
       
        // </div>
    );
};

export default index;

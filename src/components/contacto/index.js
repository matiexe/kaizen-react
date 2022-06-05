import React from 'react'
 import { InlineWidget } from "react-calendly";


const index = () => {
    return (
        <>
                 <div className="mx-auto  relative  lg:-mt-96  container px-4 pb-2 xl:px-0 mt-14">
                   
                    <div className="xl:flex  items-center lg:mt-12">
                        <div className="mt-6  inset-y-4 lg:mt-0">
                            <div className="flex -mt-72  sm:-mt-72 md:-mt-72 lg:-mt-20 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={188} height={3} viewBox="0 0 188 3" fill="none">
                                    <line x1="9.1809e-05" y1="1.5" x2="187.922" y2="1.50003" stroke="#FFFF" strokeWidth={3} />
                                </svg>
                                <i className="fas fa-phone w-1/12 h-1/12 text-white pl-1  "></i>

                            </div>
                            <h1 className="pr-2 mt-8 text-white text-2xl lg:text-5xl font-custom tracking-1px lg:w-10/12  leading-9">Contactanos</h1>
                            <p className="w-10/12 lg:w-7/12 lg:pt-12 md:pt-10 leading-8 text-white sm:text-white  md:text-white xl:text-gray-600 font-semibold mt-5 mb-12">Envianos tus consultas o programa una reunion con nosotros a través de Calendly!</p>
                        </div>
          
                        <div className="lg:flex justify-items-center space-x-4   ">
                        <div className="flex-shrink-0  pl-3.5 pr-3.5  py-8 bg-card-gray rounded-3xl mt-6 w- lg:mt-0" >
                        <InlineWidget  url="https://calendly.com/nicolas_ft" />
                        </div>
{/*                         
                        <div className="flex-shrink-0  px-8  py-8 bg-card-gray rounded-3xl mt-6 w- lg:mt-0" >
                            <div className="relative mb-4">
                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nombre</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Telefono</label>
                <input type="email" id="phone" name="phone" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label fohtmlForr="message" className="leading-7 text-sm text-gray-600">Tu mensaje</label>
                <textarea id="message" name="message" rows="4" className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/> 
            </div>
            <button className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">Enviar</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            
        </>
    );
}


export default index;

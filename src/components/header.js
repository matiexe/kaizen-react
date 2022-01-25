import React, { useState } from "react";
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { NavLink } from "react-router-dom";

const Header = () => {
    const [nav, setNav] = useState(false);
    
    return (
        <>
   
        <nav className="bg-white shadow-lg sticky top-0 z-40 ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    <div className=" inset-y-0 left-0 flex items-center sm:hidden sm:w-full">
                        <button type="button"  onClick={() => setNav(!nav)}
                                className="inline-flex items-center  justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <svg className="block h-6 w-6" xmlns="./assets/logo.svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="./assets/logo.svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        {nav && (
                                <ul id="list" className=" py-2  border-r bg-white w-full absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none">
                                        <a href="/bolsa">
                                            <span className="ml-2 font-bold">Bolsa de Trabajo</span>
                                        </a>
                                    </li>
                                    <NavLink to="/services">
                                        <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none flex justify-center" onClick="dropdownHandler(this)">
                                            
                                                <span className="ml-2 font-bold">Servicios</span>
                                           
                                        </li>
                                    </NavLink>
                                    <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai flex items-center focus:text-blue-kai focus:outline-none">
                                        <a href="/equipo">
                                            <span className="ml-2 font-bold">Equipo</span>
                                        </a>
                                    </li>
                                    <li  className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none flex justify-center">
                                        <a href="#">
                                            <span onClick={() => scroll.scrollTo(7500)} className="ml-2 font-bold">Contacto</span>
                                        </a>
                                    </li>
                                </ul>
                        )}
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <NavLink to={"/"}>
                                <button className={"flex-1 flex "} >
                                    <img className="block w-14 lg:hidden h-12 w-auto"
                                         src="/logo.svg" alt="Workflow"/>
                                    <img className="hidden w-14  lg:block h-12 w-auto"
                                         src="/logo.svg"
                                         alt="Workflow"/>
                                    <span className="hidden lg:block text-2xl w-28 h-7 py-2 font-custom">Kaizen IT</span>

                                    <span className="block lg:hidden text-2xl w-28 h-7 py-2 font-custom">Kaizen IT</span>
                                </button>
                            </NavLink>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">

                                <NavLink className="text-gray-700  hover:text-blue-400 px-3 py-4 rounded-md text-lg font-medium" to="/bolsa">
                                Bolsa de Trabajo
                                </NavLink>
                                <NavLink className="text-gray-700 hover:text-redNaphtol px-3 py-4 rounded-md text-lg font-medium" to="/services">
                                    Servicios
                                </NavLink> 
                                <NavLink className="text-gray-700 hover:text-orange-400 px-3 py-4 rounded-md text-lg font-medium" to="/equipo">
                                        Equipo
                                </NavLink>

                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="  md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="#"
                               className=" lg:block cursor-pointer hidden ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-custom text-white bg-blue-600 hover:bg-blue-700">
                                <button type="button" className="" onClick={() => scroll.scrollTo(3000)}>Contacto</button>
                            </a>
                            <a href="#"
                               className="block cursor-pointer lg:hidden ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-custom text-white bg-blue-600 hover:bg-blue-700">
                                <button type="button" className="" onClick={() => scroll.scrollTo(7000)}>Contacto</button>
                            </a>
                            {/*<li className="cursor-pointer">*/}
                            {/*    <button type="button" className="bg-blue-kai text-white rounded-md px-4 py-1 uppercase font-custom hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" onClick={() => scroll.scrollTo(2600)}>Contacto</button>*/}
                            {/*</li>*/}
                            <a className= "lg:block hidden ml-8 whitespace-nowrap inline-flex items-center justify-center  py-2 text-base font-medium text-gray-600 ">
                                |
                            </a>
                            <a href="#"
                               className="lg:block hidden hover:text-blue-400 ml-8  whitespace-nowrap inline-flex items-center justify-center px-2 py-2  text-base font-custom text-gray-600">
                                ESP | ENG
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
        </>
        // <div className=" sticky top-0 z-40 bg-white mx-auto w-full     ">
        //     <nav className="relative   flex container w-full px-6 xl:pl-26">
        //         <div className="lg:flex justify-between w-full py-12 hidden">
        //         <div className="lg:w-2/3 xl:w-1/2 ">
        //               <a href="#" >
        //                   <img  width={45} height={45} className=" inline-block" src="/logo.svg" alt="" />
        //                      <span className="pl-1  text-2xl font-custom">Kaizen IT</span>
        //               </a>
        //         </div>
        //             <div className="lg:w-2/3 xl:w-1/2 ">
        //                 <ul className="font-custom text-lg flex justify-evenly items-center text-color-gray-light">
        //                     <li className="hover:text-blue-kai cursor-pointer">
        //                         <a href="#">Projectos</a>
        //                     </li>
        //                     <li className="hover:text-blue-kai cursor-pointer">
        //                         <a href="#">Servicios</a>
        //                     </li>
        //                     <li className="hover:text-blue-kai cursor-pointer">
        //                         <a href="#" >E-learning</a>
        //                     </li>
        //                     <li className="cursor-pointer">
        //                     <button type="button" className="bg-blue-kai text-white rounded-md px-4 py-1 uppercase font-custom hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" onClick={() => scroll.scrollTo(2600)}>Contacto</button>
        //                     </li>
        //                     {/* <li className="cursor-pointer">
        //                         <a href="#">FAQ’s</a>
        //                     </li>
        //                     <li className="cursor-pointer">
        //                         <a href="#">Pricing</a>
        //                     </li> */}
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //
        //     <nav className="lg:hidden py-4 relative px-6 xl:px-0">
        //         <div className="flex py-2 justify-between items-center">
        //             <div>
        //             <a href="" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
        //       <img  className="w-6 h-6 inline-block" src="/logo.svg" alt="" />
        //
        //         <span className="pl-1  text-2xl  font-custom">Kaizen IT</span>
        //       </a>
        //             </div>
        //             <div className=" flex items-center">
        //                 {nav && (
        //                     <ul id="list" className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20">
        //                         <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">Projectos</span>
        //                             </a>
        //                         </li>
        //                         <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none flex justify-center" onClick="dropdownHandler(this)">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">Servicios</span>
        //                             </a>
        //                         </li>
        //                         <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai flex items-center focus:text-blue-kai focus:outline-none">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">E-learning</span>
        //                             </a>
        //                         </li>
        //                         <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-blue-kai focus:text-blue-kai focus:outline-none flex justify-center" onClick="dropdownHandler(this)">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">Contacto</span>
        //                             </a>
        //                         </li>
        //                         {/* <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">FAQ’s</span>
        //                             </a>
        //                         </li>
        //                         <li className=" flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
        //                             <a href="#">
        //                                 <span className="ml-2 font-bold">Pricing</span>
        //                             </a>
        //                         </li> */}
        //                     </ul>
        //                 )}
        //                 <div className="xl:hidden" onClick={() => setNav(!nav)}>
        //                     <div >
        //                         {nav ? (
        //                             <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                                 <path stroke="none" d="M0 0h24v24H0z" />
        //                                 <line x1={18} y1={6} x2={6} y2={18} />
        //                                 <line x1={6} y1={6} x2={18} y2={18} />
        //                             </svg>
        //                         ) : (
        //                             <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        //                                 <path stroke="none" d="M0 0h24v24H0z" />
        //                                 <line x1={4} y1={8} x2={20} y2={8} />
        //                                 <line x1={4} y1={16} x2={20} y2={16} />
        //                             </svg>
        //                         )}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        
    );
};

export default Header;

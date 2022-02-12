import react from "react";
import {NavLink} from "react-router-dom"
import {animateScroll as scroll} from "react-scroll";

const footer = () => {
    return (
        <footer className="border-t border-gray-200 ">
            <div className=" container flex flex-wrap items-center justify-center px-4 py-6  mx-auto  lg:justify-between">

                <div className="flex-shrink-0 grid col-2 pt-4  w-full lg:w-auto justify-center flex items-center">
                    <NavLink to={"/"}>
                        <button className={"flex-1 flex"}>
                            <img className="block w-14 justify-center lg:hidden h-16 w-auto"
                                 src="/logo.svg" alt="Workflow"/>
                            <img className="hidden w-14 lg:block h-16 w-auto"
                                 src="/logo.svg"
                                 alt="Workflow"/>
                            <span className="hidden lg:block justify-center text-4xl h-7 py-3 pl-2 font-custom">Kaizen IT</span>
                            <span className="block lg:hidden justify-centers text-3xl h-7 py-3 pl-2 font-custom">Kaizen IT</span>
                        </button>
                    </NavLink>
                    <div className="grid flex pt-2 items-center justify-center ">
                    <div className="gap-1 inline-flex">
                    <img className="h-5" alt="SantaCruz" src="./Argentina_flag_icon.svg"></img>
                    <span className=" text-sm text-zinc-500 font-custom">Santa Cruz: Rio Gallegos - Calafate</span>
                    </div>
                    <div className="gap-1 inline-flex">
                    <img className="h-5" alt="SantaCruz" src="./Argentina_flag_icon.svg"></img>
                    <span className=" text-sm text-zinc-500  font-custom">Buenos Aires</span>
                    </div>
                    <div className="gap-1 inline-flex">
                    <img className="h-5" alt="SantaCruz" src="./Argentina_flag_icon.svg"></img>
                    <span className=" text-sm text-zinc-500 font-custom">Cordoba</span>
                    </div>
                    </div>
                </div>

                <div className="flex py-6  w-full lg:w-auto flex-wrap justify-center">
                    <ul className="flex items-center space-x-4">
                        <NavLink to="/bolsa"><a className=" hover:text-blue-400 font-custom ">Bolsa de Trabajo</a></NavLink>
                        <NavLink to="/services"><a className=" hover:text-red-500 font-custom ">Servicio</a></NavLink>
                        <NavLink to="/equipo"><a className=" hover:text-orange-400 font-custom" >Equipo</a></NavLink>
                    </ul>
                </div>
                <div className="flex justify-center  w-full lg:w-auto mt-4 lg:mt-0">
                    <a target="_blank" href="https://www.facebook.com/kaizenitnow">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-6 h-6  rounded-sm  text-blue-600  hover:text-white hover:bg-blue-600"
                            viewBox="0 0 24 24">
                            <path
                                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            ></path>
                        </svg>
                    </a>
                    <a target="_blank" href="https://twitter.com/KaizenITnow" className="ml-3">
                        <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-6 h-6  rounded-sm text-blue-300 hover:text-white hover:bg-blue-300 "
                            viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                            ></path>
                        </svg>
                    </a>
                    <a  target="_blank" href="https://www.instagram.com/kaizen_it/" className="ml-3">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-6 h-6 rounded-sm text-pink-400 hover:text-white hover:bg-pink-400"
                            viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path
                                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                            ></path>
                        </svg>
                    </a>
                    <a  target="_blank" href="https://www.linkedin.com/company/kaizenitnow/about/" className="ml-3">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-6 h-6 rounded-sm text-blue-500 hover:text-white hover:bg-blue-500"
                            viewBox="0 0 24 24">
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </div>
                <div className="flex items-center py-6 my-4 lg:my-0">
                    <form className="flex cursor-pointer flex-wrap items-center justify-center">
                        <button type="button" className=" px-6 py-2 text-white bg-red-500  border-0 rounded focus:outline-none font-custom hover:bg-red-700" onClick={() => scroll.scrollTo(1900)}>Contactenos</button>
                    </form>
                </div>

            </div>
            <div className="bg-color-gray py-5">
                <h1 className="text-base text-color-gray-light text-center">Kaizen IT © - 2021-{new Date().getUTCFullYear()}</h1>
            </div>
        </footer>
        // <>
        //     <div className="bg-blue-kai px-4 lg:px-0 py-10 lg:py-32 ">
        //         <div className="w-full lg:flex justify-between mx-auto container">
        //             <div className="lg:w-1/2 justify-between lg:flex">
        //                 <div className="flex flex-col mt-4 lg:mt-0">
        //                     <ul>
        //                         <li>
        //                             <p href className="text-lg text-white tracking-wide font-custom">
        //                                 Servicios
        //                             </p>
        //                         </li>
        //                         <li className="mt-6">
        //                             <a href className="text-base text-white tracking-wide">
        //                                 Proyectos
        //                             </a>
        //                         </li>
        //                         <li className="mt-2">
        //                             <a href className="text-base text-white tracking-wide">
        //                                 Equipo
        //                             </a>
        //                         </li>
        //                         <li className="mt-2">
        //                             <a href className="text-base text-white tracking-wide">
        //                                 E-Learning
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //
        //                 <div className="flex flex-col mt-4 lg:mt-0 lg:items-center">
        //                     <ul>
        //                         <li>
        //                             <p href className="text-lg text-white tracking-wide font-custom">
        //                                 Nuestras Redes
        //                             </p>
        //                         </li>
        //                         <div className="flex w-2/5 sm:w-1/4 lg:w-full justify-between lg:px-4 items-center mt-6">
        //                             <li className>
        //                             <Link href="https://www.linkedin.com/company/kaizenitnow/"  className="w-8 h-8">
        //                                  <button className=" text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
        //                                      <i className="fab fa-linkedin"></i>
        //                                  </button>
        //                             </Link>
        //                             </li>
        //                             <li className>
        //                             <Link href="https://www.facebook.com/kaizenitnow"  className="w-8 h-8">
        //                                  <button className=" text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
        //                                      <i className="fab fa-facebook"></i>
        //                                  </button>
        //                             </Link>
        //                             </li>
        //                             <li className>
        //                             <Link href="https://www.instagram.com/kaizen_it/"  className="w-8 h-8">
        //                                  <button className=" text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
        //                                      <i className="fab fa-instagram"></i>
        //                                  </button>
        //                             </Link>
        //                             </li>
        //                             <li className>
        //                             <Link href="https://api.whatsapp.com/send/?phone=5492966485088&text&app_absent=0"  className="w-8 h-8">
        //                                  <button className=" text-white w-8 h-8  outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-blue-kai hover:border-2 hover:border-blue-kai" type="button">
        //                                      <i className="fab fa-whatsapp"></i>
        //                                  </button>
        //                             </Link>
        //                             </li>
        //
        //
        //                         </div>
        //                     </ul>
        //                 </div>
        //             </div>
        //
        //         </div>
        //     </div>
        //     <div className="bg-color-gray py-5">
        //         <h1 className="text-base text-color-gray-light text-center">©2022 - Kaizen-IT. Todos los derechos reservados</h1>
        //     </div>
        // </>
    );
};

export default footer;

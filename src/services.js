import React from 'react'
import Navbar from "../components/Header";
import Footer from "../components/footer";
import Services from "../components/service/Service";
import { motion } from "framer-motion";
import Contacto from "../components/contacto";
export default function services() {

    return(
        <>
            <Navbar/>
            <div className="">
                <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className=" grid md:grid-cols-2 gap-x-4 sm:px-6 sm:text-left md:text-left lg:text-left">
                        <div>
                            <h1 className=" tracking-tight font-extrabold  text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ">
                                <span className=" title-container block xl:inline">Servicios que Proporcionamos</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-sm sm:mx-auto md:max-w-xl lg:max-w-xl md:mt-5 md:text-lg lg:mx-0">
                                Nuestro conocimiento y experiencia pueden hacer que los datos funcionen para usted,
                                ya sea que esté haciendo crecer un negocio,
                                comercializando una campaña o analizando sus fuentes de datos existentes.
                            </p>
                        </div>
                        <div className="justify-end  lg:-mt-14 sm:justify-end md:justify-end lg:justify-end xl:justify-end  ">
                            <div className="rounded-md w-full h-full ">
                                <img className=" md:w-full md:h-auto md:rounded-none mx-auto "
                                     src="/service.svg" alt="" width="500" height="600" />
                            </div>
                        </div>
                    </div>
                </main>
                <div className="relative  ">
                    <div className="relative  inset-x-0 top-0 py-20 sm:py-20 md:py-20 lg:py-28 bg-gradient-to-t rounded-lg -rotate-1 from-illuminatingYellow via-white to-white shadow-md "></div>
                </div>
                <div>
                    <div className="relative py-32  ">
                        <div className="relative inset-x-0 top-0  ">
                            <div className="relative ...">
                                <div className="absolute inset-x-0 bottom-2 h-16 ...">
                                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 ">
                                        <motion.div className="lg:text-center text-center"
                                                    animate={{ y: -10 }}
                                                    initial={{y: 20 }}
                                                    transition={{  duration: 1 }}
                                        >
                                            <h2 className="text-xl leading-8 font-semibold tracking-tight text-classicBlue sm:text-3xl ">Nuestros Servicios</h2>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <Services
                                title={'Prototipos, Diseños UX/UI'}
                                description={'Cada cliente, cada proyecto, cada producto tiene sus necesidades y apunta a cumplir con necesidades diferentes.\n' +
                                '                    Detrás de cada sistema encontramos usuarios diferentes, por lo que los diseños y navegaciones deben estar pensados para dichos usuarios.\n' +
                                '                    En Kaizen diseñamos experiencias pensando en los usuarios de cada cliente, proporcionando navegaciones intuitivas que hacen a nuestros productos fácil de usar y adoptar.\n' +
                                '                    Prototipamos junto a nuestros clientes para podamos ir construyendo codo a codo un producto acorde a cada necesidad de caso.'}
                                img={'./UxUI.svg'}

                                order={'service xl:order-last lg:order-last  sm:w-full  lg:w-10/12  md:-mt-16 md:h-60 lg:-mt-14 md:h-52 md:-mt-24 lg:h-60 xl:h-5/6  bg-opacity-20 rounded-full bg-illuminatingYellow pointer-events-none transform'}
                            />
                            <Services
                                title={'Desarrollo de Software'}
                                description={'Trabajamos sobre diferentes tecnologías para poder cumplir exactamente con las necesidades de nuestros clientes. ' +
                                'Cubrimos desarrollos en Web, Desktop y Cloud en función de optimizar sus requerimientos y entregando un producto escalable de calidad.'}
                                img={'./develop.svg'}

                                order={'xl:order-first lg:order-first md:order-first sm:w-full lg:w-10/12 h-full bg-opacity-20 md:h-52 md:-mt-10 xl:h-64 rounded-full bg-greenMonochromatic  pointer-events-none transform'}
                            />
                            <Services
                                title={'Implementación de sistemas Open Source'}
                                description={'Cada cliente, cada proyecto, cada producto tiene sus necesidades y apunta a cumplir con necesidades diferentes.\n' +
                                '                    Detrás de cada sistema encontramos usuarios diferentes, por lo que los diseños y navegaciones deben estar pensados para dichos usuarios.\n' +
                                '                    En Kaizen diseñamos experiencias pensando en los usuarios de cada cliente, proporcionando navegaciones intuitivas que hacen a nuestros productos fácil de usar y adoptar.\n' +
                                '                    Prototipamos junto a nuestros clientes para podamos ir construyendo codo a codo un producto acorde a cada necesidad de caso.'}
                                img={'./Devops.svg'}
                                order={'xl:order-last lg:order-last sm:w-full lg:w-10/12  lg:-mt-14  lg:h-60 md:h-52 md:-mt-24  xl:h-5/6  bg-opacity-20 rounded-full  bg-classicBlue pointer-events-none transform'}
                            />
                            {/*<Services*/}
                            {/*    title={'Dirección de Proyectos para desarrollar páginas web'}*/}
                            {/*    description={'Trabajamos sobre diferentes tecnologías para poder cumplir exactamente con las necesidades de nuestros clientes. ' +*/}
                            {/*    'Cubrimos desarrollos en Web, Desktop y Cloud en función de optimizar sus requerimientos y entregando un producto escalable de calidad.'}*/}
                            {/*    img={'./UXUI.svg'}*/}
                            {/*    order={'xl:order-first lg:order-first md:order-first sm:w-full lg:w-10/12 h-full  bg-opacity-20 rounded-full bg-redNaphtol  pointer-events-none transform'}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" py-20">
                <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-28 bg-classicBlue  -mt-14   "></div>
                <div className="inset-x-0 z-0 top-0 py-20 sm:py-20 md:py-20  lg:py-44 bg-classicBlue  -mt-28 rotate-3   "></div>
                <Contacto />
            </div>
            <Footer/>
        </>
    )
}


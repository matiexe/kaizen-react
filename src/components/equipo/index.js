import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex pt-2 flex-wrap">
        <div className="w-full px-3">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row pb-2"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-custom text-blue-kai uppercase px-10 py-6 border-b-2 border-white hover:text-blue-400  hover:border-blue-400 border-gray-600 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-blue-400 border-b-blue-400 shadow-lg  shadow-blue-400 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Nuestra mision
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-custom text-blue-kai uppercase px-10 py-6 border-b-2  border-white hover:text-redNaphtol hover:border-redNaphtol border-gray-600 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-redNaphtol shadow-lg shadow-redNaphtol border-redNaphtol bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Nuestros Valores
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-lg font-custom uppercase text-blue-kai  px-10 py-6 border-b-2 border-white   hover:text-orange-400 hover:border-orange-400 rounded block leading-normal " +
                  (openTab === 3
                    ? "text-orange-400 border-orange-400 shadow-lg shadow-orange-400 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Nuestros objetivos
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space pt-2">
                <div className={openTab === 1 ? "block" : "hidden" } id="link1">
                  <motion.div className="bg-white pt-2  "
                    animate={{ y: -10 }}
                    initial={{y: 40 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 50  }}
                       >
            <div className="py-6 xl:max-w-screen-xl mx-auto  px-3 grid items-center md:grid-cols-2 gap-x-4 sm:px-6 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="xl:text-xl md:text-xl lg:text-xl font-custom tracking-tight text-classicBlue sm:text-xl  text-lg">
                        Nuestra Mision
                    </h2>
                    <p className=" mt-4 text-gray-500 text-justify font-custom text-sm">Contribuir en la formación de recursos humanos en lo referente al trabajo en equipo, inculcando los valores de transparencia y compromiso. Brindar digitalización y mejoras a los procesos internos de los organismos públicos y privados a través de nuestros productos y servicios, haciéndolos más ágiles y eficientes, y acompañándolos en el proceso de transformación digital.</p>

                </div>
                <div className="service xl:order-last lg:order-last  sm:w-full  lg:w-10/12  md:-mt-16 md:h-60 lg:-mt-14 md:h-52 md:-mt-24 lg:h-60 xl:h-5/6  bg-opacity-20 rounded-full bg-illuminatingYellow pointer-events-none transform">
                    <img
                        src="./mision.jpg"
                        alt="Mision."
                        className=" rounded-lg transform " width="500" height="600"
                    />
                </div>
            </div>
        </motion.div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <motion.div className="bg-white pt-2  "
                    animate={{ y: -10 }}
                    initial={{y: 40 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 50  }}
                       >
            <div className="py-6 xl:max-w-screen-xl mx-auto  px-3 grid items-center md:grid-cols-2 gap-x-4 sm:px-6 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="xl:text-xl md:text-xl lg:text-xl font-custom tracking-tight text-classicBlue sm:text-xl  text-lg">
                        Nuestros Valores
                    </h2>
                    <p className=" mt-4 text-gray-500 text-justify font-custom text-sm">Sustentan la misión y el objetivo del emprendimiento: Excelencia, colaboración, ética y compromiso.</p>
                    <p className=" mt-4 text-gray-500 text-justify font-custom text-sm">Nuestro plan es: </p>
                    <ul class="list-disc">
                    <li className=" mt-4 text-gray-500 text-justify font-custom text-sm" >Fomentar e Impulsar la Formación de Talento IT.</li>
                    <li className=" mt-4 text-gray-500 text-justify font-custom text-sm">Fomentar y colaborar en la Modernización Privada y Estatal.</li>
                    <li className=" mt-4 text-gray-500 text-justify font-custom text-sm">Constituir la base de datos del Ecosistema Tecnológico en Santa Cruz e impulsarlo.</li>
                    </ul>
                </div>
                <div className="service xl:order-last lg:order-last  sm:w-full  lg:w-10/12  md:-mt-16 md:h-60 lg:-mt-14 md:h-52 md:-mt-24 lg:h-60 xl:h-5/6  bg-opacity-20 rounded-full bg-illuminatingYellow pointer-events-none transform">
                    <img
                        src="./valores.jpg"
                        alt="Valores."
                        className=" rounded-lg transform " width="500" height="600"
                    />
                </div>
            </div>
        </motion.div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <motion.div className="bg-white pt-2  "
                    animate={{ y: -10 }}
                    initial={{y: 40 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 50  }}
                       >
            <div className="py-6 xl:max-w-screen-xl mx-auto  px-3 grid items-center md:grid-cols-2 gap-x-4 sm:px-6 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="xl:text-xl md:text-xl lg:text-xl font-custom tracking-tight text-classicBlue sm:text-xl  text-lg">
                        Nuestros Objetivos
                    </h2>
                    <p className=" mt-4 text-gray-500 text-justify font-custom text-sm">Consolidarnos como empresa de productos y servicios en lo referente a la tecnología informática, generando un impacto positivo tanto en nuestros clientes como en nuestros colaboradores a través de los proyectos que se realizan y conllevan. Contribuir a la sociedad formando más talento IT para que puedan insertarse en el mercado laboral.</p>

                </div>
                <div className="service xl:order-last lg:order-last  sm:w-full  lg:w-10/12  md:-mt-16 md:h-60 lg:-mt-14 md:h-52 md:-mt-24 lg:h-60 xl:h-5/6  bg-opacity-20 rounded-full bg-illuminatingYellow pointer-events-none transform">
                    <img
                        src="./objetivos.jpg"
                        alt="Objetivos."
                        className=" rounded-lg transform " width="500" height="600"
                    />
                </div>
            </div>
        </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const index = () => {

 

    return (
        <>
 <Tabs color="amber" />;
</>
  );
}

export default index;    

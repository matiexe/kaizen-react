import React, { Fragment, useState } from "react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Equipo = () => {
  const [equipos, setEquipo] = useState("Productividad");
  function cambiarteam(team) {
    setEquipo(team);
  }

  return (
    <>
      <main className=" mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className=" grid md:grid-cols-2 gap-x-4 sm:px-6 sm:text-left md:text-left lg:text-left">
          <div>
            <h1 className=" tracking-tight font-custom  text-gray-900 text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl ">
              <span className=" title-container font-custom block xl:inline">
                Nuestro Equipo
              </span>
            </h1>
            <p className="mt-3 text-base font-custom text-gray-500 sm:mt-5 sm:text-sm sm:mx-auto md:max-w-xl lg:max-w-xl md:mt-5 md:text-lg lg:mx-0">
              ¡Hola! Somos una red de colaboradores. Nos conformamos el 13 de
              febrero de 2021. Surgimos como un espacio destinado a realizar lo
              que nos gusta hacer y nos permite crecer profesionalmente. Cada
              uno de nuestros integrantes ya se encuentra en relación de
              dependencia con un empleador, y así como se coordinan los
              afteroffice, los asados, o los turnos de fútbol, a nosotros nos
              unió esta idea.
            </p>
            <div className=" inline-flex gap-1 ">
              <button
                className="flex items-center relative h-1 focus:outline-none justify-center mt-5 lg:mt-10 md:p-12 hover:text-blue-kai hover:bg-white hover:border-2 hover:border-blue-kai lg:text-sm font-custom text-white p-4 lg:p-6 bg-blue-kai rounded-3xl"
                onClick={() => cambiarteam("Productividad")}
              >
                Productividad
              </button>
              <button
                className="flex items-center relative h-1 focus:outline-none justify-center mt-5 lg:mt-10 hover:text-blue-kai hover:bg-white hover:border-2 hover:border-blue-kai lg:text-sm font-custom text-white p-4 lg:p-6 bg-blue-kai rounded-3xl"
                onClick={() => cambiarteam("Developers")}
              >
                Developers
              </button>
              <button
                className="flex items-center relative h-1 focus:outline-none justify-center mt-5 lg:mt-10 hover:text-blue-kai hover:bg-white hover:border-2 hover:border-blue-kai lg:text-sm font-custom text-white p-4 lg:p-6 bg-blue-kai rounded-3xl"
                onClick={() => cambiarteam("Colaboradores")}
              >
                Colaboradores
              </button>
            </div>
          </div>
          <div className="justify-end  lg:-mt-14 sm:justify-end md:justify-end lg:justify-end xl:justify-end  ">
            <div className="rounded-md w-full h-full ">
              <img
                className=" md:w-full md:h-auto md:rounded-none mx-auto "
                src="/Equipo.png"
                alt=""
                width="500"
                height="600"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="relative  ">
        <div className="relative  inset-x-0 top-0 py-20 sm:py-6 md:py-6 lg:py-6 bg-gradient-to-t rounded-lg -rotate-1 from-blue-kai via-white to-white shadow-md "></div>
      </div>
      <div className="section bg-white">
        <div className="section-title font-custom">{equipos}</div>
        <motion.div
          className="bg-white flex justify-center flex-wrap  "
          animate={{ y: 3 }}
          initial={{ y: 10 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
        >
          {(() => {
            switch (equipos) {
              case "Productividad":
                return (
                  <>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="nicotrujillo.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Nico Trujillo
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Fundador & Ceo
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/nicolas-trujillo/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                        {/* <Link to="https://www.linkedin.com/in/nicolas-trujillo/"  className="w-8 h-8">
                         <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500" type="button">
                             <i className="fab fa-linkedin"></i>
                           </button>
                         </Link> */}
                      </div>
                    </div>
                    {/* <div className="w-48 m-4 py-2 bg-white shadow-lg">
               <img className="w-24 h-24 mx-auto rounded-full" src="agustinruggero.jpg" />
               <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">Agustin Ruggero</p>
               <p className="text-center font-custom text-gray-500">Project Manager</p>
               <div className="flex justify-center items-center mt-2">
               <a target="_blank" href="https://www.linkedin.com/in/agustin-ruggero-ba2745114/" className="w-8 h-8">
                  <button className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500" type="button">
                    <i className="fab fa-linkedin"></i>
                  </button>
                </a>
               </div>
               </div> */}
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="anibal.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Anibal Abel Caceres
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        DevOps Engineer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/anibalabelcaceres/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                );
              case "Developers":
                return (
                  <>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="marques.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Emanuel Marquez
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/emanuel-marquez-0718b09b/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="pastrana.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Martin Pastrana
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/martindiazpastrana/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="gonzales.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Fabricio Gonzalez
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/fabricio-gonzalez-170495/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="fran.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Francisco Estrada
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/francisco-gabriel-estrada-006372219/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="emiliano.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Emiliano Aguero
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/emiliano-agustin-aguero-losardo-74402515a/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="farinola.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Santiago Farinola
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/santiago-farinola-440048188/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                );
              case "Colaboradores":
                return (
                  <>
                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="Urra.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Matias Urra
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Front/Back-End Developer
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/murra/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="macrino.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Matias Macrino
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        E-Learning
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/matias-a-macrino/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="agustina.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Agustina Lanesan
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        Design UI/UX
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/agustina-lanesan/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="w-48 m-4 py-2 bg-white shadow-lg">
                      <img
                        className="w-24 h-24 mx-auto rounded-full"
                        src="mariaangeles.jpg"
                      />

                      <p className="mx-2 mt-2 text-center text-lg text-gray-700 font-custom font-semibold">
                        Maria Angeles Alderete
                      </p>

                      <p className="text-center font-custom text-gray-500">
                        QA Automation
                      </p>

                      <div className="flex justify-center items-center mt-2">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/mariangeles-alderete-53030885/"
                          className="w-8 h-8"
                        >
                          <button
                            className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
                            type="button"
                          >
                            <i className="fab fa-linkedin"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
                );
            }
          })()}
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

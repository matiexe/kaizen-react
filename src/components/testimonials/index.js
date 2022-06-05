import React from 'react'



const index = () => {
    return (
      <div className="bg-white px-4 xl:px-0 py-16 ">


<div className="mx-auto container">
                        <div className="mb-4 lg:mb-20">
                            <h1 className="text-center text-2xl lg:text-5xl text-blue-kai font-custom  tracking-1px">Nuestros Clientes</h1>
                            {/* <h2 className="text-base lg:text-lg text-center text-color-gray-light font-custom mt-5 tracking-wider">Quienes deciden apoyarnos </h2> */}
                        </div>
                        <div className="flex flex-wrap justify-center">


                        <div class="bg-white-200 min-h-screen">
  <div class="max-w-6xl mx-auto px-8 py-16">
    <div class="relative">
      <div class="relative lg:flex rounded-lg shadow-2xl  hover:scale-105 overflow-hidden">
        <div class=" h-60 lg:h-auto lg:w-5/6  relative flex items-center justify-center">
          <img class="absolute h-full w-full bg-gray-50 object-cover lg:pr-4" src="./LogoMefi.png" alt="" />
        </div>
        <div class="relative lg:w-7/12 bg-white">
          <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100"/>
        </svg>
          <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-600 leading-relaxed font-custom">
            <p>
              Desarrollo de Servicios de Software a Medida para el  <strong class="text-gray-900 font-custom">Ministerio de Economia de la Provincia de Santa Cruz</strong>.
            </p>
            {/* <p class="mt-6">
              <a href="#" class="font-medium text-blue-600 hover:text-indigo-900">Conoce mas sobre la solucion &rarr;</a>
            </p> */}
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 left-0 lg:flex lg:items-center">
        {/* <button class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
        </svg>
      </button>
      </div>
      <div class="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/>
        </svg>
      </button> */}
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
    );
}


export default index;

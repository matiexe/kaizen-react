import React from 'react'
import { motion } from 'framer-motion'

const  Service = ({title, description, img, list, order }) =>  {

    return (
        <motion.div className="bg-white  "
                    animate={{ y: -10 }}
                    initial={{y: 40 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 50  }}
        >
            <div className="py-6 xl:max-w-screen-xl mx-auto  px-3 grid items-center md:grid-cols-2 gap-x-4 sm:px-6 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 lg:grid-cols-2">
                <div>
                    <h2 className="xl:text-xl md:text-xl lg:text-xl font-bold tracking-tight text-classicBlue sm:text-xl  text-lg">
                        {title}
                    </h2>
                    <p className=" mt-4 text-gray-500 text-justify text-sm">{description}</p>
                    <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-bold text-classicBlue">Entregables</dt>
                            <dd className="mt-2 text-sm text-gray-500">Diseño Web & Movil</dd>
                            <dd className="mt-2 text-sm text-gray-500">Web</dd>
                        </div>
                    </dl>
                </div>
                <div className={order}>
                    <img
                        src={img}
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className=" rounded-lg transform " width="500" height="600"
                    />
                </div>
            </div>
        </motion.div>
    )
}
export default Service;

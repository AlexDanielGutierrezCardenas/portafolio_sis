import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from '../LiIcon/LiIcon'

const Details=({position,company,companyLink,time,address,work})=>{
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;
                    <a href={companyLink}
                    target="_blank"
                    className='text-primary capitalize'> 
                        @{company}
                    </a>
                </h3>
                    <span className='capitalize font-medium text-dark/75'>
                        {time} | {address}
                    </span>
                    <p className='font-medium w-full'>{work}</p>
            </motion.div>
        </li>
    );
};


const Esperience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-10x1 mb-32 w-full text-center'>
        EXPERIENCIA
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
            
            
            <ul className='w-full flex flex-col items-start justify-between m1-4'>
            <Details
            position="Ingeniero de software"  company="@Google"
            companyLink="www.google.com"
            time="2022-Present" address="Mountain View, CA"
            work="Trabajó en un equipo responsable de desarrollar nuevas funciones para Google
            motor de búsqueda, incluida la mejora de la precisión y relevancia de los resultados de búsqueda y
            desarrollando nuevas herramientas para el análisis y visualización de datos."
            />

            <Details
            position="Intern"  company="@Facebook"
            companyLink="www.facebook.com"
            time="Summer 2021" address="Menlo Park, CA."
            work="Trabajó en un equipo responsable de desarrollar una nueva función de aplicación móvil que permitía a los usuarios crear y
            compartir contenido de video de formato corto, incluido el diseño e implementación de una nueva interfaz de usuario y el desarrollo
            la infraestructura de back-end para admitir la función."
            />
 
            <Details
            position="Desarrollador de Software"  company="@Amazon"
            companyLink="www.amazon.com"
            time="2020-2021" address="Seattle, WA."
            work="Trabajó en un equipo responsable del desarrollo de la aplicación móvil de Amazon, incluida la implementación de nuevas funciones como
            como recomendaciones de productos y reseñas de usuarios, y optimizando el rendimiento y la confiabilidad de la aplicación."
            />

            <Details
            position="Desarrollador de software en prácticas"  company="@Microsoft"
            companyLink="www.microsoft.com"
            time="Summer 2019" address="Redmond, WA."
            work="Trabajó en un equipo responsable de desarrollar nuevas funciones para el sistema operativo Windows de Microsoft,
            incluida la implementación de una nueva interfaz de usuario para un panel de configuración del sistema y la optimización del rendimiento de
            un componente central del sistema."
            />
        
            <Details
            position="Asistente de enseñanza"  company="@MIT"
            companyLink="www.mit.com"
            time="Fall 2018" address="Massachusetts Ave, Cambridge, MA."
            work="Otoño 2018 | Avenida de Massachusetts, Cambridge, MA.
            Asistió en la enseñanza de un curso sobre programación de computadoras, mantuvo horas de oficina para ayudar a los estudiantes con las tareas,
            y exámenes y tareas calificados."
            />
            </ul>

        </div>
    </div>
  )
}

export default Esperience
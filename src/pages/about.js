import AnimatedText from '@/components/Animated/AnimatedText'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills/Skills'
import Esperience from '@/components/Experience/Esperience'
import Education from '@/components/Education/Education'

const AnimatedNumbers =({value})=>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})
const isInView = useInView(ref);

useEffect(()=>{
  if(isInView){
    motionValue.set(value);
  }
},[isInView,value,motionValue])

useEffect(()=>{
  springValue.on("change",(latest)=>{
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
},[springValue,value ])
 return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
        <Head>
            <title>CodeHacks | About Page</title>
            <meta name="descripcion" content="any descripcion"/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-5'>
            <AnimatedText text="Pasion por las nuevas tecnologias" className='mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text font-bold uppercase text-dark/75 dark:text-light'>Biografía
                <p className='font-medium dark:text-light'>
                Hola, soy CodeHacks, desarrollador web y diseñador de UI/UX apasionado por crear hermosos, funcionales,
y experiencias digitales centradas en el usuario. Con 4 años de experiencia en el rubro. siempre estoy buscando
formas nuevas e innovadoras de dar vida a las visiones de mis clientes.
</p>

                <p className='my-4 font-medium dark:text-light'>
                Creo que el diseño es algo más que hacer que las cosas se vean bonitas: se trata de resolver problemas y
creando experiencias intuitivas y agradables para los usuarios.
                </p>

                <p className='font-medium dark:text-light'>
                Ya sea que esté trabajando en un sitio web, una aplicación móvil o
otro producto digital, aporto mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a
cada proyecto en el que trabajo. Espero con ansias la oportunidad de aportar mis habilidades y pasión a su próximo proyecto..
                </p>
                </h2>
              </div>

              <div className='col-span-3 relative h-max rounded-2x1 border-2 border-solid border-dark bg-light p-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                <Image src={profilePic} alt='' className='w-full h-auto rounded-2x1'></Image>  
              </div>
<div className='col-span-2 flex flex-col items-end justify-between'>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7x1 font-bold'>
       <AnimatedNumbers value={50}/>+ 
      </span>
      <h2 className='text-x1 font-medium capitalize text-dark/75'>clientes satisfechos</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7x1 font-bold'>
      <AnimatedNumbers value={40}/>+
      </span>
      <h2 className='text-x1 font-medium capitalize text-dark/75'>proyectos completados</h2>
    </div>
    <div className='flex flex-col items-end justify-center'>
      <span className='inline-block text-7x1 font-bold'>
      <AnimatedNumbers value={4}/>+
      </span>
      <h2 className='text-x1 font-medium capitalize text-dark/75'>años de experiencia</h2>
    </div>
</div>
            

            </div>
            <Skills/>
            <Esperience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about
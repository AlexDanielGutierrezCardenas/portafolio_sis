import AnimatedText from '@/components/Animated/AnimatedText'
import { GithubIcon } from '@/components/Icons/Icons'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject=({type,title,summary,img,link,github})=>{
  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3x1 border border-solid border-dark bg-light shadow-2x1
    '>
      <div className='absolute top-0 -rigth-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-2xl
      '/>
      <Link href={link} target="_blank"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:1.05}}/>
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between p1-6'>
        <span className='text-primary font-medium text-x1'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4x1 font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
          <Link href={link} target="_blank"
          className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
          >Visitar Projecto</Link>
        </div>
      </div>
    </article>
  )
}

const Project =({title,type,img,link,github})=>{
  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    '>
      <div className='absolute top-0 -rigth-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-2xl
      '/>
      <Link href={link} target="_blank"
      className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:1.05}}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-x1'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3x1 font-bold'>{title}</h2>
        </Link>
 
        <div className='w-full mt-2 flex items-center justify-between'>

        <Link href={link} target="_blank"
          className='text-lg font-semibold underline'
          >Visitar</Link>
          <Link href={github} target="_blank" className='w-8'>
            <GithubIcon/>
            </Link>
          
        </div>
      </div>
    </article>
  )
}
const projects = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | Projects Page</title>
            <meta name="descripcion" content="any descripcion"/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="La imaginación supera al conocimiento!"
                className='mb-16'
                />

                <div className='grid grid-cols-12 gap-2 gap-y-32'>
                  <div className='col-span-12'>
                    <FeaturedProject
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local. "
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>
                  <div className='col-span-6'>
                  <Project
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local. "
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>
                  <div className='col-span-6'>
                  <Project
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local. "
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>

                  <div className='col-span-12'>
                  <FeaturedProject
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local. "
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>
                  <div className='col-span-6'>
                  <Project
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local. "
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>
                  <div className='col-span-6'>
                  <Project
                    title="Aplicación Cripto Screener"
                    img={project1}
                    summary="Una aplicación Crypto Screener rica en funciones que utiliza React, Tailwind CSS, Context API, React Router y Recharts.
                    Muestra detalles sobre casi todas las criptomonedas. Puede convertir fácilmente el precio en su
                    moneda local."
                    github="/"
                    link="/"
                    type="proyectos destacados"                   
                    />
                  </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects
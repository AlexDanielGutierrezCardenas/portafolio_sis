import AnimatedText from '@/components/Animated/AnimatedText'
import Layout from '@/components/Layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion, useMotionValue } from 'framer-motion'
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"

const FramerImage=motion(Image);

const MovingImg =({title,img,link})=>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef=useRef(null);

    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }
    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-x1 font-semibold hover:underline'>{title}</h2>
        <FramerImage
        style={{x:x , y:y}}
        initial={{opacity:0}}
        whileInView={{opacity:1,transition:{duration:0.2}}}
        ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg'/>
        </Link>
    );
};

const Article = ({img,title,date,link})=>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0,   transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-x1 flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4
        '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle=({img,title,time,summary,link})=>{
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2x1'>
            <div className='absolute top-0 -rigth-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl
      '/>
            <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
            <FramerImage src={img} alt={title} className="w-full h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2x1 font-bold my-2 mt-4 hover:underline'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | Articles Page</title>
            <meta name="descripcion" content="any descripcion"/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Las palabras pueden cambiar el mundo!" className='mb-16'/>
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle
                        title="Cree un componente de paginación personalizado en Reactjs desde cero"
                        summary="Aprenda a crear un componente de paginación personalizado en ReactJS desde cero.
                        Siga esta guía paso a paso para integrar el componente Pagination en su proyecto ReactJS."
                        time="9 min read"
                        link="/"
                        img={article1}
                    />
                    <FeaturedArticle
                        title="
                        Creando impresionantes pantallas de carga en React:"
                        summary="Construye 3 tipos de pantallas de carga
                        Aprende a crear impresionantes pantallas de carga en React con 3 métodos diferentes.
                        Descubre cómo usar React-Loading, React-Lottie y crea una pantalla de carga personalizada.
                        Mejorar la experiencia del usuario."
                        time="10 min read"
                        link="/"
                        img={article2}
                    />
                </ul>
                <h2 className='font-bold text-4x1 w-full text-center my-16 mt-32 dark:text-light'>todos los artículos</h2>
                <ul>
                    <Article
                        title="Validación de formularios en Reactjs: cree un enlace personalizado reutilizable para entradas y manejo de errores"
                        date="Marzo 22,2023"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Desplazamiento suave como la seda en Reactjs: una guía paso a paso para desarrolladores de React"
                        date="Marzo 10,2023"
                        link="/"
                        img={article4}
                    />
                    


                    <Article
                        title="Creando un componente modal eficiente en React usando ganchos y portales"
                        date="Abril 2,2023"
                        link="/"
                        img={article5}
                    />
                    <Article
                        title="Cree una fabulosa aplicación de lista de cosas por hacer con React, Redux y Framer-Motion"
                        date="Enero 8,2023"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="Redux simplificado: una guía para principiantes para desarrolladores web"
                        date="Febrero 16,2023"
                        link="/"
                        img={article3}
                    />
                    <Article
                        title="¿Qué es el componente de orden superior (Hoc) en React?"
                        date="Marzo 02,2023"
                        link="/"
                        img={article3}
                    />
                    






                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles
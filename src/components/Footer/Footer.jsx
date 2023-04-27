import React from 'react'
import Layout from '../Layout/Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer 
    className="w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:border-light
    ">
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()}&copy; Todos los derechos reservados.</span>
            <div className='flex items-center'>
            Construir con <span className='text-primary dark:text-primaryDark text-2x1 px-1'>&#9825;</span>
            por&nbsp;<Link href={"https://dev.com"} className='underline underline-offser-2'>CodeHacks</Link>
            </div>
            <Link href={"/"} target="{_blank}" className='underline underline-offser-2'>Buenas</Link>
        </Layout>
    </footer>
  )
}

export default Footer
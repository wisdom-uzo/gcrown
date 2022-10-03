import { Card } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {AiFillFacebook, AiFillTwitterCircle, AiFillGithub, AiOutlineMenu} from "react-icons/ai"

const Nav = () => {

    const [openNav, setOpenNav] = useState(false)



  return (
    <div className=" relative">
     <div className='flex justify-between px-8 items-center py-4 text-white'>
        <div className="">Logo</div>
        <div className="md:flex hidden">
            <Link href="#">
                <a className="navLink">Home</a>
            </Link>

            <Link href="#">
                <a className="navLink">About</a>
            </Link>

            <Link href="#">
                <a className="navLink">Programs</a>
            </Link>

            <Link href="#">
                <a className="navLink">Blogs</a>
            </Link>
        </div>
        <div className=" gap-5 md:flex hidden">
            <Link href="#">
                 <a><AiFillFacebook className='navIcon text-blue-700 '/></a>
            </Link>
            <Link href="#">
                <a><AiFillGithub className='navIcon text-gray-700 '/> </a>
             </Link>
            <Link href="#">
                <a><AiFillTwitterCircle className='navIcon text-blue-900 '/></a>
            </Link>
        </div>

        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden"
        onClick={()=>setOpenNav(!openNav)}>
           <AiOutlineMenu className='h-7 w-7' />
        </motion.button>
        
        
 
    </div>

    {openNav && (<motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
        <div className="flex flex-col text-center gap-1 px-2 mb-1 md:hidden">
        <Link href="#">
            <a className="navLink">Home</a>
        </Link>

        <Link href="#">
            <a className="navLink">About</a>
        </Link>

        <Link href="#">
            <a className="navLink">Programs</a>
        </Link>

        <Link href="#">
            <a className="navLink">Blogs</a>
        </Link>
    </div>

    <div className=" gap-5 flex md:hidden justify-center pb-5 mt-5">
    <Link href="#">
         <a><AiFillFacebook className='navIcon text-blue-700 '/></a>
    </Link>
    <Link href="#">
        <a><AiFillGithub className='navIcon text-gray-700 '/> </a>
     </Link>
    <Link href="#">
        <a><AiFillTwitterCircle className='navIcon text-blue-900 '/></a>
    </Link>
</div>
        
    </motion.div>)}
    
    </div>
   
  )
}

export default Nav
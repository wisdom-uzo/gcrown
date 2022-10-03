import React from 'react'
import Image from 'next/image'
import { girl } from '../assets'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };



const Banner = () => {
  return (
    <div className="flex-col justify-between md:px-10 md:flex md:flex-row">

    <div className="mt-5 px-3 md:px-0">
    
    <h1 className="text-[3rem] font-bold text-white">Launch Your Dev <br />
    Career With
     Project-Based  Coaching</h1>
    <p className="text-gray-200 text-[1.3rem] mb-8">Showcase your skills with practical development experience and land the coding career of your dreams</p>
     
    <Link href='#'>
        <a className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg shadow-xl">Explore Courses</a>
    </Link>
    </div>
     
 <LeftSection />
    
    
    </div>
  )
}

export default Banner


const LeftSection = ( ) => {


    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        control.start("visible");
        } else {
        control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
         className=" relative top-0">
    
        <div className=" relative md:w-[40rem] md:h-[35rem] h-[35rem]">
            <Image src={girl}  layout="fill" alt='' objectFit="cover" />
        </div>

        <div className=" imageBox top-8 ">Ideate with
        Mentors</div>
        <div className=" imageBox bottom-8 ">Entrepreneurial
        Skills</div>
        <div className=" imageBox right-0 top-8 ">Personal Faculty
        Assitance</div>
        <div className=" imageBox right-0  bottom-0 ">Ideate with
        Mentors</div>
    </motion.div>
    )
}
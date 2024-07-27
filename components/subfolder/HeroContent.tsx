"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { ReactTyped } from 'react-typed';

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-col lg:flex-row items-center justify-center px-20 pt-5 lg:pt-0 mt-[65px] lg:mt-40 w-full z-20 bg-black/50 lg:bg-transparent'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center items-center lg:items-start m-auto text-center lg:text-start'>
            <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[15px] border border-[#7024f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Hey, nice to meet you! </h1>
            </motion.div>

            <motion.div
            variants={slideInFromTop}
            className='mt-8'
            >   
                <h1 className='text-white text-6xl font-bold mb-2'>👋 My name is </h1>
                <span className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Sathya Padmanabhan </span>

            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                <div className='mt-3'>
                    <ReactTyped 
                    strings={['project experience', 'fullstack support', 'machine learning', 'software solutions']}
                    typeSpeed={80} 
                    backSpeed={100} 
                    loop
                    />
                </div>
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
            >
                I am an undergraduate at Rice University passionate about 
                software development, quant, fintech, and entrepreneurship. Check out my projects and skills!
            </motion.p>
            <motion.a
            href="#about-me"
            variants={slideInFromLeft(1)}
            className='py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
            >
                Learn More
            </motion.a>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className='mt-10 lg:mt-0 w-full h-full flex justify-center items-center'
        >
            <Image
                src="/mainIconsdark.svg"
                alt="work icons"
                height={650}
                width={650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent
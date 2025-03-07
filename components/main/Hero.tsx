"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop, slideInFromLeft } from '@/utils/motion'
import Spline from '@splinetool/react-spline/next'

const Hero = () => {
  return (
    <div id="hero" className='relative flex flex-col h-screen w-full'>
      <Spline
        scene="https://prod.spline.design/AiECxnhrYEmRaBbi/scene.splinecode"
        className="absolute top-0 left-0 z-[2] w-full h-full"
      />
      
      <motion.div
        initial='hidden'
        animate='visible'
        className='absolute top-1/4 left-1/2 transform -translate-x-1/2 z-[3] flex flex-col items-center justify-center'
      >
        <motion.div
          variants={slideInFromTop}
          className='text-center'
        >   
          <h1 className='text-white text-5xl md:text-6xl font-bold mb-2'>I'm Sathya</h1>
          <p className='text-xl text-gray-300 mt-2'>Software Developer & Student at Rice University</p>
        </motion.div>

        <motion.a
          href="#about-me"
          variants={slideInFromLeft(0.5)}
          className='mt-8 py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg'
        >
          Explore More
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero
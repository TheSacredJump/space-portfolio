"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true
    })

  return (
    <motion.div
    id="about-me"
    initial='hidden'
    animate='visible'
    className=' flex flex-row items-center justify-center px-20 pt-40 w-full z-20'
    >   
        <div className='w-full xl:w-[80%] flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
            <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideInFromLeft(0.2)} className='w-full flex justify-center lg:justify-start lg:w-[50%] h-full'>
                <Image
                src="/IMG_5649.jpg"
                alt="picture of Sathya"
                width={500}
                height={500}
                className='mb-10 lg:mb-0 w-[300px] h-[300px] rounded-full object-cover border border-transparent bg-clip-border bg-gradient-to-t from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50'
                />
            </motion.div>
            <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref} variants={slideInFromRight(0.4)} className='flex flex-col w-full h-full lg:pl-10 xl:pl-5'>
                <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-6xl font-bold mb-10'>
                    About Me
                </div>
                <div className='flex flex-col text-lg space-y-5 text-white'>
                    <span>👋 Hey there! Thanks for checking out the website!</span>

                    <span>I&apos;m an undergraduate at Rice University 🦉 majoring in Computer Science 💻 and minoring in Business 💼 and Financial Computation and Modeling. 📈</span>

                    <span>I&apos;m from Chandler, Arizona 🌵, and I am super passionate software development 🖥️, machine learning 🤖, and quant 📊.</span>

                    <span>I also love startups 🚀 and entrepreneurship💡, which is what I aim to pursue in the future.</span>

                    <span>Outside of classes and coding, I love to speedcube 🕒. I rank top 8% globally 🌎 and love to compete. I think it&apos;s a great way to have some fun (and it looks pretty cool too.)</span>

                    <span>Other than that, I love space and occassionally go stargazing 🌠 when the skies are clear. I also play soccer ⚽ and squash 🌑 (casually) and read 📖 a bit in my free time.</span>
                </div>
            </motion.div>
        </div>
    </motion.div>    
  )
}

export default About
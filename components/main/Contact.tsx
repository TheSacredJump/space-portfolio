"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const textVariants = {
        visible: (custom: any) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.15, // Staggered delay, multiply index by 0.2 seconds
                type: "spring",
                stiffness: 100
            }
        }),
        hidden: {
            x: 50, // Start from 50 pixels to the left for text
            opacity: 0
        }
    };

    const [ref, inView] = useInView({ threshold: 0.5 });

    return(
        <div id="contact" className='z-20 w-full h-screen flex justify-center items-center p-4'>
            <motion.form ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} method="POST" action="https://getform.io/f/pbnvkkxb" className='flex flex-col max-w-[600px] w-full'>
                <motion.div custom={0} variants={textVariants} className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-2 border-[#2a0e61] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Contact</p>
                    <p className='text-gray-600 py-4'>Submit the form below or shoot me an email - padhu.sathya@gmail.com</p>
                </motion.div>
                <motion.input custom={1} variants={textVariants} required className='p-2 bg-black/25 border border-[#2a0e61]/30 text-white' type="text" placeholder="Name" name='name' />
                <motion.input custom={2} variants={textVariants} required className='my-4 p-2 bg-black/25 border border-[#2a0e61]/30 text-white' type="email" placeholder="Email" name='email' />
                <motion.textarea custom={3} variants={textVariants} required className='p-2 bg-black/25 border border-[#2a0e61]/30 text-white' placeholder="Message" name="message" rows={10}></motion.textarea>
                <motion.button custom={0} variants={textVariants} className='text-white/60 hover:scale-110 bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-white duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Let&apos;s Collaborate</motion.button>
            </motion.form>
        </div>
    )
}

export default Contact
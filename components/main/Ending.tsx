"use client"

import Spline from '@splinetool/react-spline/next'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Ending = () => {
  const [showAnimation, setShowAnimation] = useState(false)
  const router = useRouter()

  const handleCollaboration = () => {
    setShowAnimation(true)
    // Add a delay before navigating to the contact page
    setTimeout(() => {
      router.push('#contact')
    }, 1000)
  }

  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <AnimatePresence>
        {!showAnimation ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleCollaboration}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg text-xl font-bold border border-[#7042f861] bg-gradient-to-r from-purple-500 to-cyan-500 bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
          >
            Let&apos;s Collaborate
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='w-full h-full'
          >
            <Spline
              scene="https://prod.spline.design/mxawJ4OTKWnagL9a/scene.splinecode" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Ending
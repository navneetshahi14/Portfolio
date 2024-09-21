import React from 'react'
import two from '../assets/profile/11.jpg'
import {motion} from 'framer-motion'

// https://images.unsplash.com/photo-1549778399-f94fd24d4697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D

const Hero = () => {
  return (
    <>
        <div className="relative flex min-h-screen items-end justify-center" id='hero'>
            <motion.img src= {(two)} alt="" className='absolute inset-0 z-10 h-full w-full object-cover  '  initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:1}} />
            <motion.div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} ></motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1 , delay:1}} className="z-20 mx-4 max-w-3xl pb-20">
                <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">Navneet Shahi</h1>
                <p className="pt-2 font-semibold">FullStack developer with expertise in MERN Stack</p>
            </motion.div>
        </div>
    </>
  )
}

export default Hero
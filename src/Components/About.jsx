import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <>
        <div className="container mx-auto " id='about'>
            <motion.h2 initial={{opacity:0,y:-20}} whileInView={{opacity:1 , y:0}} transition={{duration: 0.5}} viewport={{once:true }}  className='mt-20 text-center text-4xl font-semibold'>About </motion.h2>
            <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:true}} className="p-4 text-5xl uppercase lg:text-[6rem]">I create dynamic, Responsive Websites that blend creativity with efficiency</motion.h3>
            <motion.p initial={{opacity:0,x:100 }} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:true}} className="mr-24 pl-4 text-lg leading-loose">Hello! I'm Navneet Shahi, a full-stack developer with expertise in Mern Stack. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. </motion.p>
        </div>
    </>
  )
}

export default About
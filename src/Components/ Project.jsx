import React from 'react'
import Projects from '../assets/Projects'
import Carts from './Carts'
import {motion} from 'framer-motion'

const containerVarient ={
    hidden:{opacity:0,y:-20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
            staggerChildren: 0.4
        }
    }
}

const itemVariants ={
    hidden:{
        opacity:0,
        y:0.8
    },
    visible:{
        opacity:1,
        scale:1 ,
        transition:{duration:0.5} 
    }
}

const  Project = () => {
  return (
    <>
        <div className="" id="projects">
            <motion.h2 initial="hidden" whileInView={"visible"} variants={containerVarient} viewport={{once:true}}  className="mt-20 text-center text-4xl font-semibold">Projects</motion.h2>
            <motion.div initial="hidden" whileInView={"visible"} variants={containerVarient} viewport={{once:true}}  className="flex flex-wrap justify-center py-8">
                {
                    Projects.map((pro ,index)=>(
                        <motion.div variants={itemVariants}  key={index}>
                            <Carts title={pro.title} image={pro.img} link={pro.link} description={pro.description} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    </>
  )
}

export default  Project
import React from 'react'
import Skill from '../assets/skill'
import {motion} from 'framer-motion'

const containerVarient ={
    hidden:{opacity:0,y:20},
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:true
        }
    }
}

const itemsVarients ={
    hidden:{opacity:0,x:-20},
    visible:{
        opacity:1,x:0,transition:{duration:0.5}
    }
}

const Skills = () => {
  return (
    <>
        <div className="container mx-auto " id='skills'>
            <h2 className='mb-12 mt-20 text-center text-4xl '>Skills</h2>
            <motion.div initial="hidden" whileInView={"visible"} variants={containerVarient} viewport={{once:true}} className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20 ">
                {
                    Skill.map((sk,index)=>{
                        return(
                            <motion.div variants={itemsVarients} className="mb-8 flex items-center justify-between " key={index}>
                                <div className="flex items-center">
                                    <img width={40} src={sk.image} alt="" />
                                    <h3 className='px-6 text-xl lg:text-3xl '>{sk.title}</h3>
                                </div>
                                <div className="text-md border-b-2 border-yellow-400 font-semibold lg:text-xl">
                                    <span>{sk.experince}</span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    </>
  )
}

export default Skills
import React from 'react'
import logo from '../assets/logo.jpg'
import {motion} from 'framer-motion'


const socialMediaLink=[
    {
        link:"https://www.linkedin.com/in/navneet-shahi-a8762824b",
        icon:"fa-brands fa-linkedin"
    },
    {
        link:"#",
        icon:"fa-brands fa-instagram"
    },
    {
        link:"https://www.github.com/navneetshahi14",
        icon:"fa-brands fa-github"
    },
]

const Footer = () => {

  return (
    <>
        <div className="mb-8 mt-20 ">
            <diinv className="flex items-center justify-center">
                <motion.figure initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5, delay:1}}  > 
                    <img src={logo} alt="" width={100} className='rounded mb-2'  />
                    <div className="mb-10 h-1 w-12 bg-yellow-400"></div>
                </motion.figure>
            </diinv>
            <div className="flex items-center justify-center gap-8">
                {
                    socialMediaLink.map((links,index)=>(
                        <motion.a href={links.link} initial={{opacity:0}} whileInView={{ opacity:1 }} transition={{duration:0.2,delay:0.5*index}} key={index} target='_blank' ><i  className={`text-lg ${links.icon}`} ></i></motion.a>
                    ))
                }
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy;Navneet Shahi. All rights reserved.
            </p>
        </div>
    </>
  )
}

export default Footer
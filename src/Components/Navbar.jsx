import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
    const [isMobileMenu,setIsMobileMenu] = useState(false)

    const NAVGATIONLINK = [
        {
            href:"about",
            label:"About"
        },
        {
            href:"projects",
            label:"Projects"
        },
        {
            href:"skills",
            label:"Skills"
        },
        {
            href:"contacts",
            label:"Contact"
        },
    ]
    
    const toggleMobileMenu = () =>{
        setIsMobileMenu(!isMobileMenu)
    }

    const handleLinkClick = (e,href) =>{
        e.preventDefault()
        const targetElement = document.querySelector(`#${href}`)
        if(targetElement){
            const offset = -85
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY + offset

            window.scrollTo({
                top: offsetPosition, 
                behavior: "smooth",
            })
        }
        setIsMobileMenu(false)
    }
  return (
    <div>
        <nav className='fixed left-0 right-0 top-4
         z-50 '>
            {/* Desktop menu */}
            <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 backdrop-blur-lg lg:flex">
                <div className="flex justify-between gap-6  p-2">
                    <div>
                        <a href="#" >
                            <img src={logo} alt="" width={30} className='rounded-full overflow-hidden'/>
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                            {
                                NAVGATIONLINK.map((items,index)=>(
                                    <li key={index}>
                                        <a href={items.href} className="text-lg hover:text-yellow-400" onClick={(e)=>handleLinkClick(e,items.href)} >{items.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="rounded-lg backdrop-blur-md mx-1 lg:hidden">
                <div className="flex items-center px-3 py-2  justify-between">
                    <div className="">
                        <a href="#" >
                            <img src={logo} alt="" width={40} className='rounded-full overflow-hidden' />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                            {isMobileMenu ? (
                                <i className="fa-solid fa-xmark m-2" ></i>
                            ) : (
                                <i className="fa-solid fa-bars m-2" ></i>
                            ) }
                        </button>
                    </div>
                </div>
                {
                    isMobileMenu && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVGATIONLINK.map((items,index)=>(
                                <li key={index}>
                                    <a href={items.href} onClick={(e)=>toggleMobileMenu(e,items.href)} className="block w-full text-xl font-semibold ">{items.label}</a>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
         </nav>
    </div>
  )
}

export default Navbar
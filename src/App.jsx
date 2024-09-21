import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Project from './Components/ Project'
import Skills from './Components/Skills'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Skills />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}

export default App
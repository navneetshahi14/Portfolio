import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import {motion} from 'framer-motion'

const ContactForm = () => {

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const [error,setError] = useState({})

    const [isSending,setIsSending] = useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const validate =()=>{
        let errors = {}
        if(!formData.name) error.name = "Name is required"
        if(!formData.email){
            errors.email = "Email is required"
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email  = "Email is invalid"
        }

        if(!formData.message)errors.message = "Message is required"

        return errors
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const validateError = validate()
        if(Object.keys(validateError).length > 0){
            setError(validateError)
        }
        else{
            setError({})
            setIsSending(true)

            emailjs
                .send(
                    "service_koxt0si",
                    "template_y3hf4zl",
                    formData,
                    "zpvDYLQa-YAlQDxEu"
                )
                .then((response)=>{
                    console.log("success!",response.status,response.text)
                    toast.success('Message sent Successfully!')
                    setFormData({name:"",email:"",massage:""})
                })
                .catch((error)=>{
                    console.log("Error:--> "+error )
                    toast.error("Failed")
                })
                .finally(()=>{
                    setIsSending(false)
                })
        }
    }

  return (
    <>
        <div className="mx-auto max-w-3xl p-4 " id='contacts'>
            <Toaster/>
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
                Let's Connect
            </h2>
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:1}}  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="text" name="name" id="name" value={formData.name} placeholder='Name' onChange={handleChange} className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none ' />
                    {error.name && (
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live='polite' className='text-sm text-pink-700'>{error.name}</motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <input type="email" name="email" id="email" value={formData.email} placeholder='Email' onChange={handleChange} className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none ' />
                    {error.email && (
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live='polite' className='text-sm text-pink-700'>{error.email}</motion.p>
                    )}
                </div>
                <div className="mb-4">
                    <textarea name="message" id="message" value={formData.message} placeholder='Message' onChange={handleChange} className='mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none ' rows={4} />
                    {error.message && (
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} aria-live='polite' className='text-sm text-pink-700'>{error.message}</motion.p>
                    )}
                </div>
                <button type="submit" className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${isSending?"cursor-not-allowed opacity-50 ":"" }`} disabled={isSending} >{isSending?"Sending...":"Send"}</button>
            </motion.form>
        </div>
    </>
  )
}

export default ContactForm
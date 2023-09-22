import React from 'react'
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import './Contact.css'
import tfelsghir from '../../assets/Pngs/tfelsghir.png'


//yup schema
const schema = yup.object({
    email: yup.string().email("Not a valid email address.").required("Please write your email."),
    message: yup.string().required("Message can't be empty.")
})

function Contact() {

    //handle submit function 
    const submitFunc = (data)=> console.log(data)

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver:yupResolver(schema)
      })
    

  return (
    <div className='contact-wrapper'>
      <h1>Contact us</h1>
      <h2>Get in touch</h2>
      <div className='contact-card'>

        <p style={{
            color:"#FFBA07",
             fontSize:"0.8em"
             }}>Enter Your Email Below</p>

        <p style={{
            fontWeight:600,
            fontSize:"1.6em",
            maxWidth:"502px"
        }}>Support is just a click away. Contact us for prompt assistance with your inquiries.</p>

        <form className='contact-form' onSubmit={handleSubmit(submitFunc)}>

            <input type='text' placeholder='Enter Your Email' className='contact-input' {...register("email")}/>

            <textarea type='text' placeholder='Enter Your Message' className='contact-input' {...register("message")} style={{height:'170px'}}/>

            <button className={"primary-button"+ (Object.keys(errors).length > 0 ? " contact-submit-error": "") } style={{
                borderRadius:'4px', 
                width:"502px", 
                fontWeight:600, 
                fontSize:"1.2em"
                }}>
                    {Object.values(errors).length > 0 ? Object.values(errors)[0].message : "Send Your Message"}
            </button>
        </form>

      </div>
      <img src={tfelsghir} className='tfelsghir'></img>
    </div>
  )
}

export default Contact

import React from 'react'
import "../components/Footer.css";
import { FaLocationArrow } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>NEED HELP?</h2>
                    <hr className='line'/>
                    <div className='w-icon'> <IoLogoWhatsapp/></div>
                   
                    <div className='first-list'>
                        <li>Email : test@123</li>
                        <li className='call'> <BiPhoneCall/>Contact +123456</li>
                    </div>

                </div>
                <div className='col'>
                    <h>QUICK LINKS</h>
                    <hr className='line'/>
                   
                 
                    <div className='first-list'>
                    <li>Refund or Return Policy</li>
                        <hr/>
                        <li>Track Your Order</li>
                        <hr/>
                        <li>Terms & Conditions</li>
                        <hr/>
                        <li>Privacy Policy</li>
                        <hr/>
                        <li>Blog</li>
                    </div>
                     
                    
                    

                </div>
                <div className='col'>
                    <h>Get in Touch</h>
                    <hr className='line'/>
                    <div className='first-list'>
                    <h>We Ship from</h>
                    <hr/>
                        <li><FaLocationArrow/> complete Address pincode</li>
                        <hr/>
                        <li ><BiPhoneCall/>Contact +123456</li>
                        <hr/>
                        <h1>logo</h1>
                    </div>

                </div>
              
            
                <hr/>
                <div className='row'>
                    <p className='col-sm'>Copyright | All Rights Reserved.</p>
                 
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer
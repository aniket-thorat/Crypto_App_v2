import React from 'react'
import './Footer.css'
import {FaFacebook , FaGithub ,FaLinkedin, FaTwitter} from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h1>C<span className='primary'>S</span></h1>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Chat</a>
                    <a href='/'>Help center</a>
                    <a href='/'>FAQ</a>
                
            </div>


            <div className='col'>
                <h5>Developer</h5>
                <span className='bar'></span>
                    <a href='/'>Cloud</a>
                    <a href='/'>Commerce</a>
                    <a href='/'>Pro</a>
                    <a href='https://www.coingecko.com/en/api/documentation' target='_blank'>API</a>
                
            </div>


            <div className='col'>
                <h5>Company</h5>
                <span className='bar'></span>
                    <a href='/'>About</a>
                    <a href='/'>Information</a>
                    <a href='/'>Legal</a>
                    <a href='/'>Privacy</a>
                
            </div>


            <div className='col'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='http://facebook.com' target='_blank'><FaFacebook className='icon'/>FaceBook</a>
                    <a href='http://twitter.com' target='_blank'><FaTwitter className='icon'/>Twitter</a>
                    <a href='https://www.linkedin.com/in/aniket-thorat-338b62213/' target='_blank'><FaLinkedin className='icon'/>LinkedIn</a>
                    <a href='https://github.com/EnoughCode' target='_blank'><FaGithub className='icon'/>GitHub</a>
                
            </div>

        </div>
    </div>
  )
}

export default Footer
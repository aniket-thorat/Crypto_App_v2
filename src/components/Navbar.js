import React , {useState} from 'react'
import './Navbar.css'
import {FaBars , FaTimes} from 'react-icons/fa' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
const [click, setClick]  = useState(false) ;

const handleclick=()=>{
    setClick(!click) ;
}
  return (
    <div className='header' prima="true">
        <div className='container' prima="true">
            <h1>Crypt<span className='primary' prima="true">Stat</span> </h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} prima="true">
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group' prima="true">
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className='hamburger' prima="true" onClick={handleclick} >
                {click?(<FaTimes size={20} style={{color:'#333'}}/>) : (<FaBars size={20} style={{color:'#333'}}/>)}
                
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
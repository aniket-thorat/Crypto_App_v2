import React from 'react'
import './Signup.css' 
import crypto from '../assets/trade.png'

function Signup() {
  return (
    <div className='signup'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <img src={crypto} alt=''/>
            </div>

            {/* right  */}

            <div className='right'>
                <h2>Earn Passive Income With Crypto.</h2>
                <p>Earn upto 12% annual rewards on 30+ digital assets. 
                    Simply hold your assets in the app to automatically earn rewards at the 
                    end of each month with no lockups and no limits.</p>
                <div className='input-container'>
                    <input type='email' placeholder='Enter your email'></input>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Signup
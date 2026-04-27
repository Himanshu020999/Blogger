import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



function Home() {



  return (

    <>


        <Navbar/>


        
   <div className='boooo'>

  <div className="login-container">
    <h2>Login</h2>

    <form>
      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>

      <button type="submit" className="btn">Login</button>
    </form>

    <div className="extra">
      <p>Don't have an account? <Link to="#">Sign up</Link></p>
    </div>
  </div>




   </div>



    </>
  )
}

export default Home
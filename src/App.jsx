import React from 'react'
import Navbar from './Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Card from '../components/Card'
import Bloghomepage from './Bloghomepage'
import Blogpostpage from './Blogpostpage'



function App() {
  return (
    <>
     {/* <Navbar/> */}

   
        <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
        <Route path="/bloghomepage" element={<Bloghomepage/>}/>
        <Route path="/bloghomepage/:id" element={<Blogpostpage/>}/>
        
     </Routes>
    
    {/* <Card/> */}

    

  
    </>
  )
}



export default App
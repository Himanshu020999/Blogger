import React from 'react'
import Card from '../components/Card'
import Navbar from './Navbar'
import { useState } from 'react'
import images1 from "./images/images1.jpg"
import images2 from "./images/images2.jpg"
import images3 from "./images/images3.jpg"
import images4 from "./images/images4.jpg"
import images5 from "./images/images5.jpg"
import images6 from "./images/images6.jpg"
import images7 from "./images/images7.jpg"
import images8 from "./images/images8.jpg"
import images9 from "./images/images9.jpg"
import images10 from "./images/images10.jpg"
import Blogpostpage from './Blogpostpage'


function Bloghomepage() {

    let [blogdata] = useState([
    {id:1  , imageURL:images1 ,   title:"first" , paragraph:"this is first para"},
    {id:2  , imageURL:images2 , title:"second" , paragraph:"this is second para"},
    {id:3  , imageURL:images3 , title:"third" , paragraph:"this is third para"},
    {id:4  , imageURL:images4 , title:"fourth" , paragraph:"this is fourth para"},
    {id:5  , imageURL:images5 ,  title:"fifth" , paragraph:"this is fifth para"},
    {id:6  , imageURL:images6 , title:"sixth" , paragraph:"this is sixth para"},
    {id:7  , imageURL:images7 , title:"seventh" , paragraph:"this is seventh para"},
    {id:8  , imageURL:images8 , title:"eightth" , paragraph:"this is eightth para"},
    {id:9  , imageURL:images9 , title:"ninth" , paragraph:"this is ninth para"},
    {id:10 , imageURL:images10 , title:"tenth" , paragraph:"this is tenth para"}
  ])

  return (
    <div>

    <Navbar/>

    {/* <Blogpostpage/> */}

     <div className='bloghomepage'>
     {
      blogdata.map(blog =>(
        <Card imageURL={blog.imageURL} id={blog.id}  title={blog.title} paragraph={blog.paragraph} />
      ))
     }
  </div>



    </div>
  )
}

export default Bloghomepage
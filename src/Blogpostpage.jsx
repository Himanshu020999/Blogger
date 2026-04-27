import React from 'react'
import { Link, useParams } from 'react-router-dom'
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



    const blogdata = [
    {   id:1  , imageURL:images1 ,  title:" this is the first blog " , 
        paragraph:"this is first para of the blog with details" },
    {   id:2  , imageURL:images2 ,  title:" this is the second blog " , 
        paragraph:"this is second para of the blog with details" },
    {   id:3  , imageURL:images3 ,  title:" this is the third blog " , 
        paragraph:"this is third para of the blog with details" },
    {   id:4  , imageURL:images4 ,  title:" this is the fourth blog " , 
        paragraph:"this is fourth para of the blog with details" },
    {   id:5  , imageURL:images5 ,  title:" this is the fifth blog " , 
        paragraph:"this is fifth para of the blog with details" },
    {   id:6  , imageURL:images6 ,  title:" this is the sixth blog " , 
        paragraph:"this is sixth para of the blog with details" },
    {   id:7  , imageURL:images7 ,  title:" this is the seventh blog " , 
        paragraph:"this is seventh para of the blog with details" },
    {   id:8  , imageURL:images8 ,  title:" this is the eightth blog " , 
        paragraph:"this is eightth para of the blog with details" },
    {   id:9  , imageURL:images9 ,  title:" this is the ninth blog " , 
        paragraph:"this is ninth para of the blog with details" },
    {   id:10  , imageURL:images10 ,  title:" this is the tenth blog " , 
        paragraph:"this is tenth para of the blog with details" },                        
  ]

function Blogpostpage() {

    const {id} = useParams()

    const blogpost = blogdata.find(blog => blog.id === parseInt(id))

    
  return (
    <div className='blogpost'>

        <h1>{blogpost.title}</h1>
        <p>{blogpost.paragraph}</p>
        <img src={blogpost.imageURL} />
    </div>
  )
}

export default Blogpostpage
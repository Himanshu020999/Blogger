import React from 'react'
import "./Styles/Card.css"
import { Link } from 'react-router-dom'


function Card({title , paragraph , id, imageURL}) {
  return (
<div className="card " style={{width: "45rem"}}>
  <div className='d-flex'>
  <div className="card-body">
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{paragraph}</p>
    <p>{id}</p>
    <Link to={`/bloghomepage/${id}`} className="btn btn-primary">Know More</Link>

    <div className='mycard' >
      <i className="fa-regular fa-heart"></i>
      <i className="fa-regular fa-comment"></i>
      <i className="fa-solid fa-share"></i>
      <i className="fa-regular fa-bookmark"></i>
    </div>
  </div>

  <div>
    <img src={imageURL} className=" img-thumbnail" />
  </div>
  </div>
</div>
  )
}

export default Card
import React from 'react'
import './Jumbotron.scss'
import { imgJumbotron } from '../assets/img'
import { Link } from 'react-router-dom'

export default function Jumbotron() {
  return (
  <div className="p-5 mb-4 rounded-3 container mt-2 jumbotron">
    <img src={imgJumbotron} alt="" srcSet="" />
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">Welcome to Concad Restaurant</h1>
      <p className="col-md-8 fs-4">
        Pengen makan beragam masakan nusantara? Sini cobain! Gausah Takut
        Mahal!.
      </p>
      <Link to='/menu'>
        <button className="btn btn-danger btn-lg" type="button">
          Explore Menu
        </button>
      </Link>
    </div>
  </div>

  )
}

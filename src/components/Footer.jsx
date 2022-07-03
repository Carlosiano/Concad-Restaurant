import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
  <footer className="bg-dark text-center text-lg-start">
    <div className="text-center p-3 text-white-50">
      © 2020 Copyright:
      <Link className="text-white-50" to='/'>Concad-Restaurant.com</Link>
    </div>
  </footer>

  )
}

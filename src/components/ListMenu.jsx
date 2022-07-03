import React, { useState } from 'react'
import './ListMenu.scss'
import "./ListMenuCard.scss";
import { DataMenu } from "../assets/data";

export default function ListMenu() {
  return (
    <div className='list-menu mb-4 d-flex flex-column'>
      <div className='list-menu-category'>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" >Mie</button>
          <button type="button" className="btn btn-primary" >Nasi</button>
          <button type="button" className="btn btn-primary" >Minuman</button>
        </div>
      </div>
    </div>
  )
}

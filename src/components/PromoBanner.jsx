import React from 'react'
import './PromoBanner.scss'
import {imgNasiGoreng} from '../assets/img'

export default function PromoBanner() {
  return (
  <div className="container mt-4">
    <div className="align-items-center bg-danger rounded-3">
      <div className="row justify-content-between">
        <div className="col-8 d-flex flex-column text-center justify-content-center">
          <a href="" className="text-decoration-none text-dark">
            <h1>Rendang Daging Sapi Kemasan</h1>
          </a>
          <p className="text-light">
            Kini tersedia rendang daging sapi dalam kemasan yang praktis untuk
            dibawa
          </p>
        </div>
        <div className="col-4 d-flex">
          <div className="promo-banner p-2 overflow-hidden border-box">
            <img className="" src={imgNasiGoreng} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

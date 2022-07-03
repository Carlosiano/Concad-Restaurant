import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./SlideMenu.scss"
import { DataMenu } from '../assets/data/menu'

export default function SlideMenu() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <Carousel className="rounded-3 overflow-hidden" activeIndex={index} onSelect={handleSelect}>
        {DataMenu.map((data, i) => (
          i < 4 ? (<Carousel.Item>
            <div className="slide-menu">
              <img className="d-block w-100" src={`./assets/img/menu/${data.img}`} alt="First slide" />
              <Carousel.Caption>
                <h1>{data.nama}</h1>
                <button className="btn btn-danger">Pesan</button>
                {/* <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4> */}
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          )
            : ''
        ))
        }
      </Carousel>
      {
        document.querySelectorAll('*').forEach(elem => {
          if (elem.offsetWidth > document.documentElement.offsetWidth) {
            console.log('Problem child: ', elem);
          }
        }
        )
      }
    </div>
  );
}

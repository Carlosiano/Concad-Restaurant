import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"

export default function Navbar() {

  let link = [
    {
      text: "Home",
      target: "/",
      className: "nav-link text-dark"
    },
    {
      text: "Menu",
      target: "menu",
      className: "nav-link text-dark"
    },
    {
      text: "About",
      target: "about",
      className: "nav-link text-dark"
    },
    {
      text: "Contact",
      target: "contact",
      className: "nav-link text-dark"
    },
    {
      text: <FaShoppingCart className="text-success" size={20} />,
      target: "keranjang",
      className: "nav-link text-dark"
    }
  ]

  const [navLink, setNavLink] = useState(link)

  console.log(navLink)
  const navLinkActive = (data, index) => {
    setNavLink(link)
    let p = []
    navLink.map((item, i) => {
      if (index === i) {
        p.push({
          text: item.text,
          target: item.target,
          className: "nav-link text-danger"
        })
      } else {
        p.push({
          text: item.text,
          target: item.target,
          className: "nav-link text-dark"
        })
      }
    })
    setNavLink(p)
  }
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand text-dark fs-2" to='/'>
              Concad Restaurant
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                  navLink.map((item, index) => (
                    <li className="nav-item" >
                      <Link className={item.className} aria-current="page" to={item.target} onClick={() => navLinkActive(item, index)}>
                        {item.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

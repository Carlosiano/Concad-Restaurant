import React, { useState, useEffect } from 'react'
import { db, fs } from '../libs/firebase-config'
import { DataMenu } from '../assets/data/menu'
import { Link } from "react-router-dom";
import "./FloatKeranjang.scss";
import { FaShoppingCart } from "react-icons/fa"

export default function FloatKeranjang() {
  useEffect(() => {
    db.collection("cart")
      .onSnapshot((querySnapshot) => {
        var p = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data());
          products.map((i) => {
            if (i.id == doc.data().id) {
              i.cart = true
            }
          })
        });
        setCart(p)
      });

  }, []);

  const [products, setProducts] = useState(DataMenu)
  const [cart, setCart] = useState([])

  function showTotal() {
    let x = 0
    cart.map((i) => {
      x += (i.harga - (i.harga * (i.diskon / 100))) * i.quantity
    })
    return x
  }

  return (
    <Link className={`card nav-link position-fixed float-keranjang ${cart.length ? '' : 'nonActive'}`} to='/keranjang'>
      <div className="card-body d-flex justify-content-between align-items-center">
        <h3 className="text-dark px-3">
          <FaShoppingCart />
        </h3>
        <h4 className="text-light px-3">{cart.length} Pesanan</h4>
        <h3 className="text-warning px-3">Rp.{showTotal()}</h3>
      </div>
    </Link>
  );
}

import React, { useState, useEffect } from "react";
import { db, fs } from '../libs/firebase-config'
import "./DiskonCard.scss";
import { DataMenu } from "../assets/data/menu";
import "../assets/img";

export default function DiskonCard() {
  useEffect(() => {
    db.collection("cart")
      .onSnapshot((querySnapshot) => {
        var p = [];
        querySnapshot.forEach((doc) => {
          p.push(doc.data());
          products.map((i) => {
            if (i.id === doc.data().id) {
              i.cart = true
            }
          })
        });

        setCart(p)
      });

  }, []);

  const [products, setProducts] = useState(DataMenu)
  const [cart, setCart] = useState([])


  function addToCart(item) {
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true })

  }
  function removeFromCart(item) {

    products.map((i) => {
      if (i.id === item.id) {
        i.cart = false
      }
    })
    db.collection('cart').doc(`${item.id}`).delete()
  }
  return (
    <div className="album py-5">
      <div className="container d-flex text-danger justify-content-center text-decoration-underline">
        <h2>Diskon 20%</h2>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="card-diskon" >
          {
            DataMenu.map((data) => {
              if (data.diskon == 20) {
                return (
                  <div className="col">
                    <div className="card shadow p-1">
                      <div className="bd-placeholder-img card-img-top card-image">
                        <img width="200" src={`./assets/img/menu/${data.img}`} alt="" srcSet="" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-text">{data.nama}</h4>
                        <div className="d-flex justify-content-between align-items-center">
                          {data.cart == false
                            &&
                            <button type="button" className="btn btn-success" onClick={() => addToCart(data)}>Pesan</button>
                          }
                          {
                            data.cart == true
                            &&
                            <button type="button" className="btn btn-danger" onClick={() => removeFromCart(data)}>Hapus</button>
                          }
                          <div className="d-flex flex-column">
                            <small className="text-success">
                              Rp.{data.harga - data.harga * (data.diskon / 100)}
                            </small>
                            <small className="text-danger text-decoration-line-through">
                              Rp.{data.harga}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

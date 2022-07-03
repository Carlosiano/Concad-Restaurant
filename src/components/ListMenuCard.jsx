import React, { useState, useEffect } from 'react'
import { db, fs } from '../libs/firebase-config'
import { DataMenu, DataMenuCategory } from "../assets/data/menu";
import "../assets/img";

export default function ListMenuCard() {
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

  // function increase(item) {
  //   db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))

  // }
  // function decrease(item) {
  //   db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
  // }
  // function total() {
  //   let x = 0
  //   cart.map((i) => (
  //     x += i.harga * i.quantity
  //   ))
  //   return x
  // }

  return (
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.map((item, i) => {
            return (
              <>
                <div className="col" key={i}>
                  <div className="card shadow p-1">
                    <div className="bd-placeholder-img card-img-top card-image">
                      <img
                        width="200"
                        src={`./assets/img/menu/${item.img}`}
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-text">{item.nama}</h4>
                      <div className="d-flex justify-content-between align-items-center">
                        {item.cart == false
                          &&
                          <button type="button" className="btn btn-success" onClick={() => addToCart(item)}>Pesan</button>
                        }
                        {
                          item.cart == true
                          &&
                          <button type="button" className="btn btn-danger" onClick={() => removeFromCart(item)}>Hapus</button>
                        }
                        <div className="d-flex flex-column">
                          <small className="text-success">
                            Rp.<span className='harga'>{item.harga - item.harga * (item.diskon / 100)}</span>
                          </small>
                          {item.diskon ? (
                            <small className="text-danger text-decoration-line-through">
                              Rp.<span className='harga'>{item.harga}</span>
                            </small>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div >
  );
}

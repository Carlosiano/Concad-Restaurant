import React, { useState, useState } from "react"
import { DataMenu, DataMenuCategory, DataMenuMie, DataMenuNasi, DataMenuMinuman } from "../assets/data/menu";
import { auth, storage, db, fs } from './firebase-config'

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

const fireConf = {
  addToCart: function(item) {
    products.map((i) => {
      if (i.id == item.id) {
        i.cart = true
      }
    })

    db.collection('cart').doc(`${item.id}`).set(item, { merge: true })
  },
  removeFromCart: function(item) {
    products.map((i) => {
      if (i.id === item.id) {
        i.cart = false
      }
    })
    db.collection('cart').doc(`${item.id}`).delete()
  },
  quantity: {
    increase: function(item) {
      db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(1))
    },
    decrease: function(item) {
      db.collection('cart').doc(`${item.id}`).update("quantity", fs.firestore.FieldValue.increment(-1))
    }
  },
  total: function() {
    let x = 0
    cart.map((i) => (
      x += i.harga * i.quantity
    ))
    return x
  }
}

export { fireConf }

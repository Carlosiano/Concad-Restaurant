import { MenuJson } from './index'
let nasi = []
let mie = []
let minuman = []

nasi.push(MenuJson.menu[0].map((element, index) => (
  {

    nama: element.nama,
    id: index + 1,
    harga: element.harga,
    img: element.img,
    diskon: element.diskon,
    quantity: 1,
    cart: false
  }
)))
mie.push(MenuJson.menu[1].map((element, index) => (
  {

    nama: element.nama,
    id: index + nasi[0].length + 1,
    harga: element.harga,
    img: element.img,
    diskon: element.diskon,
    quantity: 1,
    cart: false
  }
)))
minuman.push(MenuJson.menu[2].map((element, index) => (
  {

    nama: element.nama,
    id: index + mie[0].length + nasi[0].length + 1,
    harga: element.harga,
    img: element.img,
    diskon: element.diskon,
    quantity: 1,
    cart: false
  }
)))

let data = []

nasi[0].map(i => (
  data.push({
    nama: i.nama,
    id: i.id,
    harga: i.harga,
    img: i.img,
    diskon: i.diskon,
    quantity: i.quantity,
    cart: i.cart
  })
))
mie[0].map(i => (
  data.push({
    nama: i.nama,
    id: i.id,
    harga: i.harga,
    img: i.img,
    diskon: i.diskon,
    quantity: i.quantity,
    cart: i.cart
  })
))
minuman[0].map(i => (
  data.push({
    nama: i.nama,
    id: i.id,
    harga: i.harga,
    img: i.img,
    diskon: i.diskon,
    quantity: i.quantity,
    cart: i.cart
  })
))

const DataMenu = data
const DataMenuNasi = nasi[0]
const DataMenuMie = mie[0]
const DataMenuMinuman = minuman[0]
const DataMenuCategory = [DataMenuNasi, DataMenuMie, DataMenuMinuman]
export { DataMenu, DataMenuNasi, DataMenuMie, DataMenuMinuman, DataMenuCategory }

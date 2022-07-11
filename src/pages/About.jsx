import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Footer } from '../components'
import './About.scss'

export default function About() {
  // data array yang berisi object mahasiswa
  const team = [
    {
      nama: "Mario Sebastian Carlosiano",
      avatar: "https://bootstrapious.com/i/snippets/sn-about/avatar-1.png",
      nim: "20.11.3439"
    },
    {
      nama: "Paskalis Nani Randang",
      avatar: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
      nim: "20.11.3473"
    },
    {
      nama: "Sendi Tiantara",
      avatar: "https://bootstrapious.com/i/snippets/sn-about/avatar-2.png",
      nim: "20.11.3470"
    },
    {
      nama: "Adhe Putra Kusuma Dwi Wardhana",
      avatar: "https://bootstrapious.com/i/snippets/sn-about/avatar-4.png",
      nim: "20.11.3440"
    },
    {
      nama: "Andrew Joshua Marthin Lumatauw",
      avatar: "https://bootstrapious.com/i/snippets/sn-about/avatar-3.png",
      nim: "20.11.3425"
    }
  ]
  return (
    <div>
      <div class="bg-warning">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">Tentang Kami</h1>
              <p class="lead text-light mb-0">Concad Restaurant merupakan perusahaan swasta yang terbentuk perorangan. Didirikan pada tanggal 9 oktober 1976 berlokasi di jalan Pemuda No. 20 Medan, yang kemudian ditetapkan sebagai Rumah Makan Concad I sekaligus sebagai kantor pusat dan administrasinya. Pada awalnya restoran ini hanya berupa rumah makan yang diberi nama "Rumah Makan dan Buffet Concad".
                Rumah Makan Concad bergerak dibidang mengelolah makanan yang spesifik yaitu Minang dan Melayu, dimana alasan untuk mendirikan rumah makan ini adalah merupakan hasil survey bahwa masih kurangnya sarana rumah makan terutama yang menyediakan makanan spesifik Minang dan Melayu dikota Medan. Dengan melihat kesempatan inilah, maka didirikanlah Rumah Makan Concad pada tahun 1976. Bidang usaha ini terus berkembang hingga saat ini, dimana terdapat beberapa usaha sejenis yang dikelola oleh pihak lain.
              </p>
            </div>
            <div class="col-lg-6 d-none d-lg-block">
              <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />

            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />

            </div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">Our team</h2>
              <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>

          <div class="row text-center">
            {/* perulangan untuk menampilkan seluruh data team */}
            {
              team.map(data => (
                <div class="col-xl-3 col-sm-6 mb-5">
                  <div class="bg-white rounded shadow-sm py-5 px-4">
                    <img src={data.avatar} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                    <h5 class="mb-0">{data.nama}</h5><span class="small text-uppercase text-muted">Nim : {data.nim}</span>
                    <ul class="social mb-0 list-inline mt-3">
                      <li class="list-inline-item">
                        <a href="#" class="social-link">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="social-link">
                          <FaTwitter />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="social-link">
                          <FaInstagram />
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#" class="social-link">
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

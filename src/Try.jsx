import React, { useState } from "react";
import "./ListMenuCard.scss";
import { DataMenu } from "../assets/data";
import "../assets/img";
import { Toast, ToastContainer, Button, Col, Row } from "react-bootstrap";
import Countdown from "react-countdown";

export default function ListMenuCard() {
  const [show, setShow] = useState(false);
  return (
    <Row className="me-0">
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {DataMenu.menu.map((element) => {
              return element.map((data, i) => {
                return (
                  <>
                    <div className="col">
                      <div className="card shadow p-1">
                        <div className="bd-placeholder-img card-img-top card-image">
                          <img
                            width="200"
                            src={`./assets/img/menu/${data.img}`}
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="card-body">
                          <h4 className="card-text">{data.nama}</h4>
                          <div className="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example" >
                              <Col xs={6}>
                                <Button onClick={() => setShow(true)}>+</Button>
                              </Col>
                              <button type="button" class="btn btn-success">+</button>
                              <button type="button" class="btn btn-danger">-</button>
                            </div>
                            <div className="d-flex flex-column">
                              <small className="text-success">
                                Rp.
                                {data.harga - data.harga * (data.diskon / 100)}
                              </small>
                              {data.diskon ? (
                                <small className="text-danger text-decoration-line-through">
                                  Rp.{data.harga}
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
              });
            })}
          </div>
        </div>
      </div>
      <Col xs={6} className="position-fixed top-0 end-0 p-3 d-flex justify-content-end" >
      <ToastContainer>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Notifikasi</strong>
            <Countdown
              date={Date.now() + 3000}
              renderer={({ hours, minutes, seconds, completed }) => {
                if (completed) {
                  return "";
                } else {
                  return <small>{
                    seconds === 3 ? 1 : seconds === 1 ? 3 : 2
                  } detik yang lalu</small>;
                }
              }}
            />
          </Toast.Header>
          <Toast.Body>Menu Sudah Ditambah</Toast.Body>
        </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

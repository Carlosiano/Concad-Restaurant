import React, { useState } from 'react'
import { Toast, Button } from 'react-bootstrap'
export default function ToastComponent() {
  const [showToast, setToast] = useState(false)
  return (
    <div>
      <div className='position-absolute top-0 end-0'>
        <Toast
          onClose={() => setToast(false)}
          autohide
          show={showToast}
          delay={2200}
        >
          <Toast.Header>
            <div className="right-0">
              <strong className="">Notification </strong>
              <small> 1 sec ago</small>
            </div>
          </Toast.Header>
          <Toast.Body>Pesan Telah di kirim.</Toast.Body>
        </Toast>
      </div>
      <Button onClick={() => setToast(true)}>Kirim Pesan</Button>
    </div>
  )
}

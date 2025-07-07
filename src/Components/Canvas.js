import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import Account from './Account';

export default function Canvas() {
  const [show, setShow] = useState(false);
  const username = localStorage.getItem('username') || 'Guest';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span
        onClick={handleShow}
        style={{
          cursor: 'pointer',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 12px',
          borderRadius: '6px',
          transition: '0.2s ease',
          border: '1px solid #ccc',
          backgroundColor: '#f8f8f8',
        }}
       onMouseEnter={e => e.currentTarget.style.backgroundColor = '#eaeaea'}
       onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f8f8f8'}
      >
        <RiAccountCircleLine size={28} />
        <span style={{ fontSize: '14px' }}>{username}</span>
      </span>

      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: '#1f2937', color:'white' }}>
        <Offcanvas.Header
          closeButton
          closeVariant="white" 
          style={{ backgroundColor: '#1f2937', color: 'white' }}
        >
          <Offcanvas.Title>👤 My Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#1f2937', color: 'white' }}>
          <Account handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

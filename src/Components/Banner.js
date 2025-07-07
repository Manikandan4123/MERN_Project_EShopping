import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          style={{
            marginTop:'80px',
            display: 'flex',
            alignItems: 'center',
            height: '300px',
            backgroundImage: 'url("/assets/Images/BG1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/assets/Images/avatar2.jpg"
              alt="First Slide"
              style={{ height: '260px', borderRadius: '10px' }}
            />
          </div>
          <div style={{ flex: 1, padding: '20px', color: 'white' }}>
            <h3>Sale Upto 50% Off</h3>
            <p>*on selected Brands</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{
          marginTop:'80px',
            display: 'flex',
            alignItems: 'center',
            height: '300px',
            backgroundImage: 'url("/assets/Images/BG2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/assets/Images/avatar3.jpg"
              alt="First Slide"
              style={{ height: '260px', borderRadius: '10px' }}
            />
          </div>
          <div style={{ flex: 1, padding: '20px', color: 'white' }}>
            <h3>Just Pay ₹1 to get Television</h3>
            <p>*EMI upto 24 months</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{
        marginTop:'80px',
            display: 'flex',
            alignItems: 'center',
            height: '300px',
            backgroundImage: 'url("/assets/Images/BG3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
          }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img
              src="/assets/Images/header.jpg"
              alt="First Slide"
              style={{ height: '260px', borderRadius: '10px' }}
            />
          </div>
          <div style={{ flex: 1, padding: '20px', color:'white' }}>
            <h3>Trendy Collections</h3>
            <h3>Upto 70% Off</h3>
            <p>*Excludes GST</p>
          </div>
        </div>
        </Carousel.Item>
    </Carousel>
  );
}



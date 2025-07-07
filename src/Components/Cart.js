import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';

const Cart = ({ cartItems, removeFromCart  }) => {
  const totalPrice = cartItems.reduce((ini, cur) => ini + cur.price, 0);

  return (
    <div style={{ margin: '40px auto', maxWidth: '800px', padding: '20px', border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <img
            src="/assets/Images/EmptyCart.jpg"
            alt="Empty Cart"
            style={{ height: '260px', borderRadius: '10px' }}
          />
          <p style={{ marginTop: '10px', fontSize: '18px', color: '#888' }}>Your cart is currently empty.</p>
          <Link to="/">
              <button style={buttonStyle}>⬅ Back to Home</button>
            </Link>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 15px',
                  marginBottom: '10px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                }}
              >
                <span 
                style={{flex: 1, marginRight: '20px' }}>
                {item.title}
                </span>

                <span style={{ fontWeight: 'bold' }}>${item.price}</span>
                <MdDeleteOutline
                  onClick={() => removeFromCart(item.id)}
                  size={24}
                  color="#e74c3c"
                  style={{ cursor: 'pointer', transition: 'color 0.2s',transition: 'transform 0.2s, color 0.2s', }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                    e.currentTarget.style.color = '#c0392b';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.color = '#e74c3c';
                  }}
                  title="Remove item"
                />
              </div>
            ))}
          </div>

          <h3 style={{ textAlign: 'right', marginBottom: '30px' }}>
            Total: <span style={{ color: '#27ae60' }}>${totalPrice}</span>
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <button style={buttonStyle}>⬅ Back to Home</button>
            </Link>

            <Link to="/payment" state={{ amount: totalPrice }}>
              <button
                style={{ ...buttonStyle, backgroundColor: '#27ae60', color: '#fff' }}
                disabled={cartItems.length === 0}
              >
                Proceed to Payment ➡
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  cursor: 'pointer',
  backgroundColor: '#fff',
  fontWeight: 'bold',
  transition: 'all 0.3s',
};

export default Cart;

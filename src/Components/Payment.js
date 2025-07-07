import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Payment({clearCart}) {
  const location = useLocation();
  const passedAmount = location.state?.amount || 0;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(passedAmount);
  const [paid, setPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!name || !address || !amount) {
      alert('Please fill in all fields');
      return;
    }
    setPaid(true);
    clearCart();
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', margin: '40px auto', maxWidth:'600px', border: '1px solid black' , borderRadius: '30px' }}>
      <h2>💳 Payment Page</h2>

      {paid ? (
        <>
          <h3>✅ Payment Successful!</h3><br/>
          <p>Thank you for your purchase, {name}!</p><br/>
          <Link to="/">
            <button style={{ padding: '8px 16px', cursor: 'pointer', border: '1px solid black', borderRadius: '10px' }}>
              Back to Shopping
            </button>
          </Link>
        </>
      ) : (
        <form onSubmit={handlePayment} style={{display:"flex", flexDirection:'column' }}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
              width: '100%'}}
          /><br /><br />
          <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
              width: '100%'}}
          /><br /><br />

          <input
            type="text"
            placeholder="Amount (₹)"
            value={`$${amount}`}
            readOnly
            style={{
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              fontSize: '16px',
              width: '100%'}}
          /><br /><br />
          <div>
            <button type="submit" style={{ cursor: 'pointer', border: '1px solid black', borderRadius: '10px',padding:"12px", width:'50%'}}>
              Pay Now
            </button>
            <Link to="/" >
              <button style={{cursor: 'pointer', border: '1px solid black', borderRadius: '10px' ,padding:"12px", width:'50%'}}>
                Cancel
              </button>
            </Link>
          </div>
          
        </form>
      )}
    </div>
  );
}

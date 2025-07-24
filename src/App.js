import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Account from './Components/Account';
import Payment from './Components/Payment';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  // Clear cart after payment
  const clearCart = () => {
    setCartItems([]);
  };

  // Fetch product categories
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCatagories(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    const url = selectedCatagory === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCatagory}`;

    axios.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCatagory]);

  // Add to Cart with Quantity Handling
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  //  Remove item completely
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity or remove if 1
  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <div>
      {(location.pathname === '/Cart' || location.pathname === '/Account') ? (
        <div style={{ padding: '10px 20px', backgroundColor: '#f5f5f5' }}>
          <h1 className="manufacturing-consent-regular" style={{ margin: 0, display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/Images/MyLogo.png" height={'75px'} width={'200px'} alt="Logo" />
          </h1>
        </div>
      ) : (
        <>
          <Navbar
            cats={catagories}
            selectedCat={selectedCatagory}
            onCategoryChange={setSelectedCatagory}
            cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          />
          <Banner />
        </>
      )}

      <Routes>
        <Route path='/' element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path='/Cart' element={
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        } />
        <Route path="/payment" element={<Payment clearCart={clearCart} />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

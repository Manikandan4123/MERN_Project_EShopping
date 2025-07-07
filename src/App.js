import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom'
import Account from './Components/Account';
import Payment from './Components/Payment';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation();
  const [products,setProducts] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const clearCart = ()=>{
    setCartItems([]);
  };
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
      .then((response)=>{
        setCatagories(response.data);
      })
      .catch((err)=>{console.log(err);})
  },[]);  

  useEffect(() => {
    const url =   selectedCatagory === 'all' ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${selectedCatagory}`;
    axios.get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCatagory]);

 

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};

  return (
    <div>
      {(location.pathname === '/Cart' || location.pathname === '/Account') ?  ( <div style={{ padding: '10px 20px', backgroundColor: '#f5f5f5' }}>
          <h1 className="manufacturing-consent-regular"  style={{ margin: 0, display:'flex',justifyContent:'center'  }}><img src="/assets/Images/MyLogo.png" height={'75px'} width={'200px'}></img></h1>
        </div>):(<>
      <Navbar cats={catagories}
        selectedCat={selectedCatagory}
        onCategoryChange={setSelectedCatagory} 
        cartCount={cartItems.length}></Navbar>
      <Banner></Banner></>)}
      <Routes>
        <Route path='/' element={<ProductList products={products} addToCart={addToCart} />}/>
        <Route path='/Cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
        <Route path='/Account' element={<Account></Account>}/>
        <Route path="/payment" element={<Payment clearCart={clearCart}/>  } />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
};

export default App;

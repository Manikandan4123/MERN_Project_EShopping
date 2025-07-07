import React from 'react';

const ProductList = ({ products, addToCart }) => {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin:'20px', justifyContent:'space-evenly'}}>
      {products.map((product) => (
        <article key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            width: '250px',
            transition: 'transform 0.3s',
            boxShadow: '2px 2px 6px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img src={product.image} height={'100px'} width={'100px'}></img><br/><br/>
          <h4 style={{fontSize:'18px',fontWeight:'bold'}}>{product.title}</h4>
          <p>${product.price}</p>
          <button
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '15px',
              border: '1px solid black',
              transition: 'transform 0.1s ease-in-out',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </article>
      ))} 
    </div>
  );
};

export default ProductList;
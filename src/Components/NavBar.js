import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Canvas from "./Canvas";

const Navbar = ({ cats, selectedCat, onCategoryChange, cartCount }) => {
  return (
    <nav style={{
        position: 'fixed',          
        top: 0,
        width: '100%',
        zIndex: 1000,                
        padding: '5px 20px',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.5)'
      }}>
      <h1 className="manufacturing-consent-regular"  style={{ margin:'0' }}><img src="/assets/Images/MyLogo.png" height={'75px'} width={'200px'}></img></h1>  
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <div>
          Refine Your Picks 👉
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <select
            id="category-filter"
            value={selectedCat}
            onChange={(e) => onCategoryChange(e.target.value)}
            style={{
              appearance: 'none',                  
              padding: '10px 40px 10px 16px',
              minWidth: '180px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #ccc',
              backgroundColor: '#ffffff',
              color: '#333',
              boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#999')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#ccc')}
            onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 1 px rgba(100, 150, 250, 0.2)')}
          >
            <option value="all">All</option>
            {cats.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link to="/Cart" title="Cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '5px 10px',
              borderRadius: '10px',
              transition: 'all 0.1s ease-in-out',
              position: 'relative', display: 'inline-block'
            }}
            onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#eaeaea';}}
            onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent';}}
          >
            <FaShoppingCart size={28} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-10px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}>
                {cartCount}
              </span>
            )}
          </div>
        </Link>
        <Canvas/>
      </div>

    </nav>
  );
};

export default Navbar;

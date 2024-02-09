import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ username, onLogout, searchInput, handleChange, sortByName, resetFilters, categoryFilter, filterByCategory, dispayCart, clearCart, displayYourProducts }) => {  
  return (
    <nav>
      <ul>
        {username !== null && <h3>Logged as: {username}</h3>}
        <li>
        <Link to="/" onClick={resetFilters}>Product List</Link>
        </li>
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
          {username == null ? (
            <>
              <Link to="/login" onClick={onLogout}>Login</Link>
            </>
          ):(
            <>
              <Link to="/" onClick={onLogout}>Logout</Link>
            </>
          )}
        </li>

      
        <div>
          {searchInput !== null ? (
            <>
              <h3>Search product</h3>
              <input
                type="text"
                id="searchInput"
                value={searchInput}
                onChange={handleChange}
                placeholder="Szukaj"
              />
              <select id="categoryFilter" value={categoryFilter} onChange={(e) => filterByCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
              </select>
              <button onClick={() => sortByName('asc')}>Sort ASC</button>
              <button onClick={() => sortByName('desc')}>Sort DESC</button>
              <button onClick={() => sortByName('')}>Remove sort</button>
              <button onClick={resetFilters}>Remove filter and sort</button>
              <br />
              <br />
              <br />
              {username !== null ? (
                <>
                  <button onClick={displayYourProducts} className='cart'>Your Products</button>
                  <button onClick={dispayCart} className='cart'>Your Cart</button>
                  <button onClick={clearCart} className='cart'>Clear Cart</button>
                </>
              ):(<></>)}
            </>
          ):(<></>)}
        </div>
      </ul>
    </nav>
  );
};

export default Menu;

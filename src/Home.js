import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Menu from './Menu';
import Title from './Title'
import './style/Home.css';

const Home = ({ username, role, onLogout }) => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3002/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
  
        setOriginalProducts(data);
        setFilteredProducts([...data]);
        setSortedProducts([...data]);
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchData();
  }, []);

  
  const handleProductEdit = async (editedProduct) => {
    try {
      const response = await fetch(`http://localhost:3002/api/products/${editedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedProduct = await response.json();
      setOriginalProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setSortedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setSortedProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
  
      return updatedProduct;
    } catch (error) {
      console.error('Wystąpił błąd podczas edycji produktu:', error);
      throw error; 
    }
  };

  const handleProductDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3002/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedData = await response.json();

      if (Array.isArray(updatedData)) {
        setOriginalProducts(updatedData);
  
        if (searchInput.trim() !== '') {
          handleSearch(searchInput);
        } else {
          setFilteredProducts(updatedData);
          setSortedProducts(updatedData);
          setOriginalProducts(updatedData);
        }
      } else {
        setFilteredProducts((prevData) =>
          prevData.filter((product) => product.id !== productId)
        );
        setSortedProducts((prevData) =>
          prevData.filter((product) => product.id !== productId)
        );
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas usuwania produktu:', error);
    }
    window.location.reload();
  };

  const sortByName = (order) => {
    let sorted = [...filteredProducts];

    if (order === 'asc') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === 'desc') {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts(sorted);
  };

  const handleSearch = (input) => {
    const filtered = originalProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(input.toLowerCase()) &&
        (categoryFilter === '' || product.category.toLowerCase() === categoryFilter.toLowerCase())
    );
  
    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    handleSearch(input);
  };

  const filterByCategory = (categoryFilterValue) => {
    setCategoryFilter(categoryFilterValue);
    const filtered = originalProducts.filter(
      (product) =>
        (categoryFilterValue === '' || product.category.toLowerCase() === categoryFilterValue.toLowerCase()) &&
        product.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSortedProducts(filtered);
  };

  const resetFilters = () => {
    setFilteredProducts([...originalProducts]);
    setSortedProducts([...originalProducts]); 
    setSearchInput('');
    setCategoryFilter('');
  };

  const addToCart = async (productId) => {
    try {
      
      const response = await fetch(`http://localhost:3002/api/products/${productId}`, {
      method: 'GET'
      });

    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const productToAdd = await response.json();
      
      if (cart.some((item) => item.id === productToAdd.id)) {
        console.warn('Product is already in the cart');
        return; 
      }

      setCart((prevCart) => [...prevCart, productToAdd]);
    } catch (error) {
      console.error('Error adding product to cart:', error);
      console.error('URL:', `http://localhost:3002/api/products/${productId}`);
    }
  };
  
  const dispayCart = () => {
    setFilteredProducts([...cart]);
    setSortedProducts([...cart]); 
    setSearchInput('');
    setCategoryFilter('');
  }

  const clearCart = () => {
    setFilteredProducts([...originalProducts]);
    setSortedProducts([...originalProducts]); 
    setCart([])
    setSearchInput('');
    setCategoryFilter('');
  }

  const displayYourProducts = () => {
    const filteredProducts = originalProducts.filter(
      (product) => product.owner === username
    );

    setFilteredProducts(filteredProducts);
    setSortedProducts(filteredProducts);
  };

  return (
    <div className="home-container">
      <Menu username={username} onLogout={onLogout} searchInput={searchInput} handleChange={handleChange} sortByName={sortByName} resetFilters={resetFilters} categoryFilter={categoryFilter} filterByCategory={filterByCategory} dispayCart={dispayCart} clearCart={clearCart} displayYourProducts={displayYourProducts}/>
      <div className='main'>
        <div className='title-container'>
          <Title />
        </div>
        <div className='products-container'>
          {sortedProducts.length > 0 ? (
            <ProductList products={sortedProducts} onProductEdit={handleProductEdit} username={username} role={role} handleProductDelete={handleProductDelete} handleAddToCart={addToCart}/>

          ) : (
            <div class="empty-products">
              <p>No products to display</p>
            </div>
          )}  
      </div>
      </div>
      
    </div>
  );
};

export default Home;

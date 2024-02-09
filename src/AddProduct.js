import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Title from './Title';
import './style/AddProduct.css'

const AddProduct = ({ onAddProduct, username, onLogout }) => {
  const [newProduct, setNewProduct] = useState({ title: '', description: '', thumbnail: '', price: '', owner: username, categor: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const validateFields = () => {
    if (!newProduct.title || !newProduct.description || !newProduct.thumbnail || !newProduct.price || !newProduct.category) {
      setError('All fields must be filled!');
      return false;
    }
    
    if (newProduct.price <= 0) {
      setError('Price must be greater than 0!');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddProduct = () => {
    if (validateFields()) {
      onAddProduct(newProduct);
      goToHome();
      window.location.reload();
    }
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="small-container">
      <Menu username={username} onLogout={onLogout} searchInput={null} />
        <div className='main'>
          <div className='title-container'>
            <Title />
          </div>
          <div className='outercontainer'>
            <div id="container">
              <h2 id="title">Add new product</h2>
              <div className='form'>
                <div className='form-desc'>
                  <label>Title:</label>
                  <br />
                  <br />
                  <br />
                  <label>Description:</label>
                  <br />
                  <br />
                  <br />
                  <label>Category:</label>
                  <br />
                  <br />
                  <br />
                  <label>Picture (URL):</label>
                  <br />
                  <br />
                  <br />  
                  <label>Price:</label>
                </div>
                <div>
                  <input type="text" name="title" value={newProduct.title} onChange={handleInputChange} />
                  <br />
                  <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
                  <br />
                  <select name="category" value={newProduct.category} onChange={handleInputChange}>
                    <option value="">Select a category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                  </select>            
                  <br />
                  <input type="text" name="thumbnail" value={newProduct.thumbnail} onChange={handleInputChange} />
                  <br />
                  <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
                </div>
              </div>
              {error && <p className="error-message">{error}</p>} 
              <div id="buttons">
                <button onClick={handleAddProduct} className='button-add'>Add product</button>
                <button onClick={goToHome} className='button-add'>Cancel</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

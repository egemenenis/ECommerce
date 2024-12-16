import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import SearchAndFilter from './SearchAndFilter';
import '../css/ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7103/api/product')
      .then(response => {
        console.log("Fetched products:", response.data);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching products');
        setLoading(false);
        console.error("Error fetching products:", err);
      });
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(term.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category) => {
    const filtered = category
      ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
      : products;
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';
import '../css/SearchAndFilter.css';

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setSelectedCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={selectedCategory} onChange={handleFilter}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="furniture">Furniture</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MerchantList from './components/MerchantList';
import AddMerchant from './components/AddMerchant';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merchants" element={<MerchantList />} />
          <Route path="/add-merchant" element={<AddMerchant />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

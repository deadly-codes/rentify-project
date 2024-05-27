// src/App.js

import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import PostPropertyForm from './components/PostPropertyForm';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <div className="App">
      <h1>Rentify</h1>
      <RegisterForm />
      <PostPropertyForm />
      <PropertyList />
    </div>
  );
}

export default App;

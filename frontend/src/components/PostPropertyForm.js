// src/components/PostPropertyForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostPropertyForm = () => {
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    bedrooms: 0,
    bathrooms: 0,
    hospitals: '',
    colleges: '',
    sellerEmail: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/postProperty', formData)
      .then(response => {
        alert('Property posted successfully');
      })
      .catch(error => {
        console.error('There was an error posting the property!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Place" required />
      <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area" required />
      <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
      <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
      <input type="text" name="hospitals" value={formData.hospitals} onChange={handleChange} placeholder="Hospitals Nearby" required />
      <input type="text" name="colleges" value={formData.colleges} onChange={handleChange} placeholder="Colleges Nearby" required />
      <input type="email" name="sellerEmail" value={formData.sellerEmail} onChange={handleChange} placeholder="Seller Email" required />
      <button type="submit">Post Property</button>
    </form>
  );
};

export default PostPropertyForm;

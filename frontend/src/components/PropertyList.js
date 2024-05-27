import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch properties for the current page when the component mounts or currentPage changes
    axios.get(`http://localhost:5000/properties?page=${currentPage}`)
      .then(response => {
        setProperties(response.data.properties);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, [currentPage]); // Trigger effect whenever currentPage changes

  const handlePreviousPage = () => {
    // Decrement currentPage to go to the previous page
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    // Increment currentPage to go to the next page
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleLike = (propertyId) => {
    // Send a request to backend to increment like count for the property
    axios.post(`http://localhost:5000/properties/${propertyId}/like`)
      .then(response => {
        // Update the properties state to reflect the updated like count
        const updatedProperties = properties.map(property => {
          if (property._id === propertyId) {
            return { ...property, likes: response.data.likes };
          }
          return property;
        });
        setProperties(updatedProperties);
      })
      .catch(error => {
        console.error('Error liking property:', error);
      });
  };

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          {/* Display property details */}
          <h3>{property.place}</h3>
          <p>Area: {property.area}</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Hospitals Nearby: {property.hospitals}</p>
          <p>Colleges Nearby: {property.colleges}</p>
          {/* Like button */}
          <button onClick={() => handleLike(property._id)}>Like ({property.likes})</button>
        </div>
      ))}
      <div>
        {/* Pagination controls */}
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PropertyList;

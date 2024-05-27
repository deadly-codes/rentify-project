// // src/components/RegisterForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     role: '' // 'seller' or 'buyer'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/register', formData)
//       .then(response => {
//         alert('User registered successfully');
//       })
//       .catch(error => {
//         console.error('There was an error registering the user!', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
//       <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//       <select name="role" value={formData.role} onChange={handleChange} required>
//         <option value="">Select Role</option>
//         <option value="seller">Seller</option>
//         <option value="buyer">Buyer</option>
//       </select>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;


// src/components/RegisterForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     role: '' // 'seller' or 'buyer'
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // Clear error message when the user starts typing again
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       axios.post('http://localhost:000/register', formData)
//         .then(response => {
//           alert('User registered successfully');
//         })
//         .catch(error => {
//           console.error('There was an error registering the user!', error);
//         });
//     }
//   };

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     // Check if required fields are empty
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//       valid = false;
//     }
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//       valid = false;
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//       valid = false;
//     }
//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required';
//       valid = false;
//     }
//     if (!formData.role) {
//       newErrors.role = 'Role is required';
//       valid = false;
//     }

//     // Custom validation for email format
//     if (formData.email.trim() && !isValidEmail(formData.email.trim())) {
//       newErrors.email = 'Invalid email format';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const isValidEmail = (email) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
//       {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
//       <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
//       {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//       <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//       {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
//       <select name="role" value={formData.role} onChange={handleChange} required>
//         <option value="">Select Role</option>
//         <option value="seller">Seller</option>
//         <option value="buyer">Buyer</option>
//       </select>
//       {errors.role && <span style={{ color: 'red' }}>{errors.role}</span>}
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation before submitting
    if (validateForm()) {
      axios.post('http://localhost:5000/register', formData)
        .then(response => {
          alert('User registered successfully');
        })
        .catch(error => {
          console.error('There was an error registering the user!', error);
        });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate each form field
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastName = '';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!isValidPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
      valid = false;
    } else {
      newErrors.phoneNumber = '';
    }

    if (formData.role.trim() === '') {
      newErrors.role = 'Role is required';
      valid = false;
    } else {
      newErrors.role = '';
    }

    // Update errors state
    setErrors(newErrors);

    return valid;
  };

  const isValidEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Phone number validation regex pattern
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="seller">Seller</option>
        <option value="buyer">Buyer</option>
      </select>
      {errors.role && <span style={{ color: 'red' }}>{errors.role}</span>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;


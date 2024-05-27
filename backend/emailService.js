const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail address
    pass: 'your-gmail-password' // Your Gmail password
  }
});

// Function to send email notification to seller
const sendEmailToSeller = (sellerEmail, buyerInfo, propertyInfo) => {
  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender's email address
    to: sellerEmail, // Seller's email address
    subject: 'Interest in your property', // Email subject
    text: `Dear Seller,\n\nYou have received interest in your property.\n\nBuyer Details:\nName: ${buyerInfo.name}\nEmail: ${buyerInfo.email}\nPhone: ${buyerInfo.phone}\n\nProperty Details:\nPlace: ${propertyInfo.place}\nArea: ${propertyInfo.area}\nBedrooms: ${propertyInfo.bedrooms}\nBathrooms: ${propertyInfo.bathrooms}\nHospitals Nearby: ${propertyInfo.hospitals}\nColleges Nearby: ${propertyInfo.colleges}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

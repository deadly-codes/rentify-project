# Rentify

Rentify is a web application designed to simplify the process of renting and finding properties. It provides a platform for property owners to list their properties and for potential tenants to search for available properties based on their requirements.

## Features

- **Property Listing**: Property owners can easily list their properties, providing details such as location, area, number of bedrooms, bathrooms, etc.
- **Property Search**: Tenants can search for properties based on various criteria such as location, size, amenities, etc.
- **Pagination**: Pagination is implemented to efficiently manage large sets of property listings.
- **Form Validation**: Client-side form validation ensures that user input is accurate and complete.
- **User Authentication**: Buyers are required to log in to view seller details, enhancing security and privacy.
- **Like Button**: Users can express interest in properties by liking them, and the like count is updated in real-time.
- **Interest Submission**: Buyers can indicate interest in a property by submitting a request, notifying the seller.
- **Email Notifications**: Sellers receive email notifications when a buyer expresses interest in their property, containing buyer contact details.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/rentify.git`
2. Navigate to the project directory: `cd rentify`
3. Install dependencies:
   - Frontend: `cd frontend && npm install`
   - Backend: `cd backend && npm install`
4. Start the development server:
   - Frontend: `cd frontend && npm start`
   - Backend: `cd backend && npm start`

## Configuration

- **Database**: Set up a MongoDB database and configure the connection string in `backend/config/db.js`.
- **CORS Policy**: If frontend and backend are hosted on different domains, configure CORS headers in your backend server.
- **Email Service**: Configure a nodemailer transporter with your email service credentials in `backend/utils/email.js`.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any bugs, feature requests, or improvements you'd like to see.



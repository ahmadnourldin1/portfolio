import axios from 'axios';

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for base URL
  timeout: 15000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other default headers here
  },
});

export default axiosInstance;

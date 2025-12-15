// src/utils/api.js
import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for adding auth token if needed
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.status, error.response.data);
      
      // Custom error messages based on status code
      switch (error.response.status) {
        case 400:
          error.message = 'Bad request. Please check your input.';
          break;
        case 401:
          error.message = 'Unauthorized. Please login again.';
          break;
        case 404:
          error.message = 'Resource not found.';
          break;
        case 500:
          error.message = 'Server error. Please try again later.';
          break;
        default:
          error.message = 'An error occurred. Please try again.';
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.request);
      error.message = 'Network error. Please check your connection.';
    } else {
      // Something happened in setting up the request
      console.error('Request Error:', error.message);
      error.message = 'Request setup error. Please try again.';
    }
    
    return Promise.reject(error);
  }
);

// Portfolio API methods
export const portfolioApi = {
  // Get profile data
  getProfile: async () => {
    try {
      const response = await api.get('/profile');
      return response.data;
    } catch (error) {
      console.warn('Using fallback profile data');
      throw error;
    }
  },

  // Submit contact form
  submitContact: async (contactData) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  },

  // Get projects (if you add this feature later)
  getProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.warn('No projects API available');
      return [];
    }
  },

  // Upload file (if needed for resume download tracking)
  trackDownload: async (fileType) => {
    try {
      const response = await api.post('/analytics/download', { fileType });
      return response.data;
    } catch (error) {
      // Silently fail for analytics
      return null;
    }
  }
};

// Utility functions for API calls
export const makeApiCall = async (method, url, data = null) => {
  try {
    const config = {
      method,
      url,
      ...(data && { data })
    };
    
    const response = await api(config);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

// Upload file helper
export const uploadFile = async (file, endpoint) => {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default api;
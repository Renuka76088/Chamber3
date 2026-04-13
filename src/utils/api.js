import axios from 'axios';

export const API_BASE_URL = 'https://api.parekhchamber.com/api';
export const IMAGE_BASE_URL = 'https://api.parekhchamber.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const tradeEnquiryApi = {
  submit: (formData) => api.post('/trade-enquiry', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const blogApi = {
  getBlogs: (siteId) => api.get(`/blogs?siteId=${siteId}`),
};

export const careerApi = {
  getJobs: (siteId) => api.get(`/careers?siteId=${siteId}`),
};

export const mediaApi = {
  getMedia: (siteId) => api.get(`/media-events?siteId=${siteId}`),
};

export const quotationApi = {
  submit: (formData) => api.post('/quotation', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const auctionApi = {
  submit: (formData) => api.post('/auction', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const appointmentApi = {
  submit: (formData) => api.post('/appointment', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const membershipApi = {
  submit: (formData) => api.post('/membership', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const authorizedPersonApi = {
  validate: (data) => api.post('/authorized-person/validate', data),
};

export default api;

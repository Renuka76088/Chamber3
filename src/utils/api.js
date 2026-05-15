import axios from 'axios';

export const API_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000/api'
  : 'https://api.parekhchamber.com/api';

export const IMAGE_BASE_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:2000'
  : 'https://api.parekhchamber.com';



const api = axios.create({
  baseURL: API_BASE_URL,
});

export const tradeEnquiryApi = {
  submit: (formData) => api.post('/trade-enquiry', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const blogApi = {
  getBlogs: (siteId) => api.get(`/blogs?siteId=${siteId}&status=published`),
  getById: (id) => api.get(`/blogs/${id}`),
};

export const blogHeaderApi = {
  getHeader: (siteId) => api.get(`/blog-header/${siteId}`),
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

export const chamberServiceApi = {
  getServices: (siteId) => api.get(`/chamber-services?siteId=${siteId}`),
};

export const managementApi = {
  getContent: (siteId) => api.get(`/management/content?siteId=${siteId}`),
  getMembers: (siteId) => api.get(`/management/members?siteId=${siteId}`),
};

export const membershipContentApi = {
  getContent: (siteId) => api.get(`/membership-content?siteId=${siteId}`),
};

export const circularApi = {
  getCirculars: (siteId) => api.get(`/circulars?siteId=${siteId}`),
};

export default api;

import axios from 'axios';

const API_BASE_URL = 'https://api.parekhchamber.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const tradeEnquiryApi = {
  submit: (formData) => api.post('/trade-enquiry', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
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

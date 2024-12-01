import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

export const createSubscription = (data) => api.post('/subscriptions/create', data);
export const getSubscriptions = () => api.get('/subscriptions');
export const cancelSubscription = (id) => api.delete(`/subscriptions/cancel/${id}`);
export const processPayment = (data) => api.post('/subscriptions/payment', data);

import { fetchWithDelay } from './fetch';
const url = 'https://localhost:4000/products/';

const fetchUsers = () => fetchWithDelay(url);

export const userAPI = {
	fetchUsers,
};

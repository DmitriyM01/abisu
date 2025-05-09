import axios from "axios";
const url = import.meta.env.VITE_API_URL;

console.log(url)

export const getData = async () => {
	const products = (await axios.get(url + '/products')).data;
	return products;
};
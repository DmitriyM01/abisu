import axios from "axios";

export const getData = async () => {
	const products = (await axios.get('http://localhost:5000/products')).data;
	return products;
};
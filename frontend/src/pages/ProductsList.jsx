import React, { useEffect, useState } from "react";
import axios from 'axios';

import { getData } from "../utils/getData.js";

import Product from "../components/Product.jsx";

export async function fetchProducts() {
  const response = await axios.get('http://localhost:5000/products');
  return response.data;
}

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
		getData().then((e) => {
			setProducts(e);
		});
	}, []);

    return (
        <main className="main">
            <section className="section about">
                {products.map((product) => {
                    return (<Product key={product.id} props={{product}}/>)
                })}
            </section>
        </main>
    )
}

export default Products;
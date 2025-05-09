import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ props }) => {
    const { name, description, image, link } = props.product;

    return (
        <Link className='product-link' to={link}>
            <div className="product-contaynir">
                <img src={image} className="product-img" />
                <div className="product-text">
                    <h2 className="product-name"><b>{name}</b></h2>
                    <p className="product-description">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product;
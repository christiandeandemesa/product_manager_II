import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {

    return (
        <div>
            <h1>All Products</h1>
            {props.products.map((product, idx) =>
                <p key={idx}>
                    <Link to={`/` + product._id}>
                        {product.title}
                    </Link>
                </p>
            )}
        </div>
    );

}

export default ProductList;
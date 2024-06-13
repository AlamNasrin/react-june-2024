// <ProductView product={prd} />

import { Product } from "./model/Product";
import React from "react";

type ProductViewProps = {
    product: Product;
    onDelete: (product: Product) => void; // signature should be same as deleteProduct in Listproducts.tsx
    onEdit: (product: Product) => void;
}

// Option 1:
/*
const ProductView = (props: ProductViewProps) => {    
    const {product} = props; // Destructuring in function
}
*/

// Option 2:

// React.memo is a higher order component 
// that prevents a functional component from rerendering if its props or its state have not changed
const ProductView : React.FC<ProductViewProps> =  React.memo(({product, onDelete, onEdit}) => {    // Destructuring at argument level 
    
    console.log("ProductView rendering: " + product.name);

    return(
        <div className="product">
            <p>Id: {product.id}</p>
            <p>NAmed: {product.name}</p>
            <p>Desc: {product.description}</p>
            <p>Price: {product.price}</p>
            <div>
            <button className="btn btn-danger" onClick={() => onDelete(product)}>Delete</button> &nbsp;
            <button className="btn btn-warning" onClick={() => onEdit(product)}>Edit</button>
            </div>
        </div>
    )
})

export default ProductView;
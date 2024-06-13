import axios from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Product } from "./model/Product";
import './ListProducts.css';
import { useNavigate } from 'react-router-dom';
import ProductView from "./ProductView";
import { useSelector } from "react-redux"; 
import { AuthState } from "../redux-store/authReducer";

const baseUrl = "http://localhost:9000/secure_products";
function ListProducts() {

    const [products, setProducts] = useState<Array<Product>>([]);
    const navigate = useNavigate();

    const [isDescriptionVisible, setDescVisible] = useState(false);
    const auth = useSelector((state: any) => state.auth) as AuthState;

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
            // const response = await axios.get(baseUrl);
            // const headers = {Authorization: `Bearer ${auth.accessToken}`}; // Authorization is Bearer Token in Postman
            const response = await axios.get<Array<Product>>(baseUrl);
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.log("fetchProducts error: ", error);
        }
    }

    const deleteProduct=useCallback(async (product: Product) => {

        try {
            const url = `${baseUrl}/${product.id}`; // http://localhost:9000/products/3
            await axios.delete(url);
            // fetchProducts();
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1) {
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
            alert(`product with id: ${product.id} is deleted`)        
    } catch (error) {
            alert(`product with id: ${product.id} is not found`)
        }
    }, [products]); // Cache for useRCallback will be refreshed only when products changes

    const editProduct = useCallback((product: Product) => {
        navigate("/products/" + product.id);
    }, []);

    const calulatePrices = useMemo(
        () => {
            console.log("In calulatePrices..");
            let totalPrice = 0;
            products.forEach(product => {
                if(product.price) {
                    totalPrice += product.price;
                }
            })
            return totalPrice;
    }, [products]);
        
    return(
        <div>
            <h4>List Products</h4>
            <p>Total prices(useMemo): {calulatePrices}</p>
            {isDescriptionVisible ? <p>This is a demo on react components optimization</p> : null}
            <button className="btn btn-warning" onClick={() => setDescVisible(!isDescriptionVisible)}>Toggle State</button>

            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
            {products.map((product) => {
                return (
                    <ProductView product={product} key={product.id} 
                                    onDelete={deleteProduct} onEdit={editProduct}/>
                    // <div className="product" key={product.id}>
                    //     <p>Id: {product.id}</p>
                    //     <p>Name: {product.name}</p>
                    //     <p>Desc: {product.description}</p>
                    //     <p>Price: {product.price}</p>
                    //     <div>
                    //         {/* <button className="btn btn-danger" onClick={deleteProduct}>Delete</button> &nbsp; */}
                    //         {/* inline function */}
                    //         <button className="btn btn-danger" onClick={() => {deleteProduct(product)}}>Delete</button> &nbsp;
                    //         <button className="btn btn-warning" onClick={() => {editProduct(product)}}>Edit</button>
                    //     </div>
                    // </div>
                )
            })}
        </div>
        </div>
    )
}

export default ListProducts;
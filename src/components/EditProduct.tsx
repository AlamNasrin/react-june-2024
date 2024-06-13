import { useEffect, useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./model/Product";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function EditProduct() {

    const params = useParams();
    useEffect(() => {
        console.log("params", params);
        fetchProduct();
    }, []);

    // Today
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));

    async function fetchProduct() {
        try {
            const response = await axios.get<Product>(`http://localhost:9000/products/${params.id}`);
            setProduct(response.data);
        } catch (error) {
            console.log("fetchProduct fetchProduct: ", error);
        }
    }
    
       function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {
        setProduct({...product, name: evt.target.value});
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        const value = evt.target.value;
        const copy_of_product = {...product};
        if(evt.target.name == "price") {
            copy_of_product.price = Number(value);
        } else {
            // @ts-ignore
            copy_of_product[evt.target.name] = value;
        }
        setProduct(copy_of_product);
    }

    const navigate = useNavigate();
    async function saveProduct() {try {
            // const url = await axios.put<Product>(`http://localhost:9000/products/${params.id}`);
            const url = `http://localhost:9000/products/${params.id}`;
            await axios.put(url, product);     
            navigate("/products"); 
            
    } catch (error) {
        console.log("saveProduct error: ", error);
        }
    }

    async function cancelSave() {
        try {
            // const url = await axios.put<Product>(`http://localhost:9000/products/${params.id}`);
            const url = `http://localhost:9000/products/${params.id}`;
            await axios.put(url, navigate);      
    } catch (error) {
        console.log("saveProduct error: ", error);
        }
    }

    return (
    <div>
        <h4>Edit Product</h4>

        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name"
                     name="name" value={product.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="proce">Price</label>
                <input className="form-control" id="price"
                     name="price" value={product.price} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" id="description"
                 name="description" value={product.description} onChange={handleChange} />
            </div>
            <div>
                <button className="btn btn-warning" onClick={saveProduct} type="button">Save</button>&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={cancelSave}>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default EditProduct;
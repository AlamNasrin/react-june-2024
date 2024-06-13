import React, { useEffect, useState } from "react";
import { Product } from "../components/model/Product"; 
import axios from "axios";

export function useAxiosGetProducts(){

    const [products, setProducts] = useState<Product[]>([]);
    const source = axios.CancelToken.source();

    useEffect(() => {

        fetchProducts();

        return () => {
            // if(source){
            //     source.cancel()
            // }
        }

    }, [])

    async function fetchProducts(){
        try {
            //const url = process.env.REACT_APP_BASE_URL + "/products";
            const url = "http://localhost:9000/products";
            const response = await axios.get<Product[]>(url, {cancelToken: source.token});
            setProducts(response.data);

        } catch (error) {
            console.log("error", error)
        }
    }

    return [products];

}
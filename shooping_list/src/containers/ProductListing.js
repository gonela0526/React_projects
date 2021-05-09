import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcomponent from './Productcomponent';
import {setProducts} from '../redux/actions/productActions';
import axios from 'axios';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err",err);
        });
         dispatch(setProducts(response.data));
    };
    useEffect(()=> {
        fetchProducts();

    },[]);
    console.log("Products",products);

    return (
        <div className="ui grid container">
           <Productcomponent />
        </div>
    )
}

export default ProductListing

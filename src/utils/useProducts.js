import { useState, useEffect } from "react";
import axios from "axios";

// Base API URL for products
const API = "https://dummyjson.com/products";

  //Custom Hook: useAllProducts =Fetches the list of all products from the API

export function useAllProducts() {
    // State to hold products array
    const [data, setData] = useState([]);
    // Loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Set loading to true and clear any previous errors
        setLoading(true);
        setError(null);
        // Make GET request to fetch all products
        axios
            .get(API)
            .then((res) => {
                // Update data state with products array from response
                setData(res.data.products);
            })
            .catch((err) => {
                // Set error message if fetch fails
                setError(err.message || "Failed to fetch products");
            })
            .finally(() => {
                // Always turn off loading when request completes
                setLoading(false);
            });
        // Runs once on component mount
    }, []); 
    return { data, loading, error };
}

 // Fetches a single product by its ID
export function useProduct(id) {
    // State to hold single product
    const [data, setData] = useState(null);
    // Loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Don't attempt to fetch if no ID is provided
        if (!id) return;
        // Set loading to true and clear any previous errors
        setLoading(true);
        setError(null);
        // Construct URL with product ID
        const url = `${API}/${id}`;
        // Make GET request to fetch single product
        axios
            .get(url)
            .then((res) => {
                // Update data state with the product from response
                setData(res.data);
            })
            .catch((err) => {
                // Set error message if fetch fails
                setError(err.message || "Failed to fetch product");
            })
            .finally(() => {
                // Always turn off loading when request completes
                setLoading(false);
            });
    }, [id]); // Runs whenever the ID changes

    return { data, loading, error };
}

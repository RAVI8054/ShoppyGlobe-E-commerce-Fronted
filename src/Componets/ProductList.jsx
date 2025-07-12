import { useState } from "react";
import { useAllProducts } from "../utils/useProducts";
import ProductItem from "./ProductItem";

function ProductList() {
    // Use custom hook to fetch all products
    const { data: products, loading, error } = useAllProducts();

    // State for search query
    const [searchQuery, setSearchQuery] = useState("");

    // Filter products based on search query (case-insensitive)
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            {/* Search input with left margin */}
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded p-2 mb-4 w-full sm:w-1/3 lg:w-1/2 xl:w-1/3 mx-auto ml-4"  // Added ml-4 for left margin
            />

            <div className="p-4">
                {/* Map over filtered products and render ProductItem */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border-2 p-2 rounded">
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;

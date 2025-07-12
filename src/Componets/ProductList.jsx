
import { useAllProducts } from "../utils/useProducts";
import ProductItem from "./ProductItem";

function ProductList() {
    // Use custom hook to fetch all products 
    // All products
    const { data: products, loading, error } = useAllProducts();

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {/* Map over products array and render ProductItem for each */}
            {products.map((product) => (
                <div key={product.id} className="grid grid-cols-4 gap-4 border-2">
                    <ProductItem  product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;

import { useParams } from "react-router-dom";
import { useProduct } from "../utils/useProducts";
function ProductDetail() {
    // Extract product id from route params
    const { id } = useParams();
    // Use custom hook to fetch single product by id
    const { data: product, loading, error } = useProduct(id);
    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found</p>;
    // Render product details UI
    return (
        <div className="max-w-3xl mx-auto p-2 border-2">
            <h1 className="text-2xl font-bold mb-1">{product.title}</h1>
            <h2 className="text-xl text-gray-600 mb-4">{product.brand}</h2>
            <p className="mb-2">${product.price}</p>
            <p className="mb-4">{product.discountPercentage}% off</p>
            <p className="mb-6">{product.description}</p>

            {/* Render product images if available */}
            {product.images?.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                    {product.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${product.title} image ${i + 1}`}
                            className="w-full h-48 object-cover"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductDetail;

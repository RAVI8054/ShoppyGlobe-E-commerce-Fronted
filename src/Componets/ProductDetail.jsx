import { useParams } from "react-router-dom";
import { useProduct } from "../utils/useProducts";

function ProductDetail() {
    // Extract product id from route params
    const { id } = useParams();
    // Use custom hook to fetch single product by id
    const { data: product, loading, error } = useProduct(id);

    // Loading, error, and not found messages
    if (loading) return <p className="text-center py-10 text-lg">Loading product details...</p>;
    if (error) return <p className="text-center py-10 text-lg text-red-600">Error: {error}</p>;
    if (!product) return <p className="text-center py-10 text-lg">Product not found</p>;

    // Render product details UI
    return (
        <>
            <div className="max-w-3xl mx-auto p-4 border rounded shadow-md space-y-6">
                {/* Render product images if available */}
                {product.images?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`${product.title} image ${i + 1}`}
                                className="w-full h-48 object-cover rounded"
                            />
                        ))}
                    </div>
                )}

                {/* Product Title */}
                <h1 className="text-3xl font-bold mb-1">{product.title}</h1>

                {/* Product Brand */}
                <h2 className="text-xl text-gray-600 mb-2">Brand: {product.brand}</h2>

                {/* Product Price and Discount */}
                <p className="text-2xl font-semibold mb-2">
                    <span>Price: ${product.price}</span>{" "}
                    <span className="text-red-600">({product.discountPercentage}% off)</span>
                </p>

                {/* Product Description */}
                <p className="text-gray-700 mb-4">{product.description}</p>

                {/* Product Category */}
                <p className="font-semibold">Category: {product.category}</p>

                {/* Product Rating */}
                <p className="font-semibold">Rating: {product.rating}</p>

                {/* Product Warranty */}
                <p className="font-semibold">Warranty: {product.warrantyInformation}</p>
            </div>
        </>
    );
}

export default ProductDetail;

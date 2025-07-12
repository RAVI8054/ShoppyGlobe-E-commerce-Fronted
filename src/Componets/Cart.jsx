import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // Calculate total cart value
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.count,
        0
    ).toFixed(2);

    return (
        <div className="max-w-5xl mx-auto p-4 space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-4">
                <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
                <button
                    onClick={() => dispatch(clearCart())}
                    className="mt-2 md:mt-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Clear Cart
                </button>
            </div>

            <div className="space-y-8">
                {cartItems.length === 0 ? (
                    <div>
                        <h2 className="text-center text-lg font-medium text-gray-700">Your cart is empty.</h2>
                    </div>
                ) : (
                    <>
                        {cartItems.map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-col md:flex-row md:items-center gap-4 border rounded p-4 shadow-sm"
                            >
                                {/* Images */}
                                {product.images?.length > 0 && (
                                    <div className="flex-shrink-0 grid grid-cols-3 gap-2 md:gap-4">
                                        {product.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`Image ${i + 1}`}
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-col flex-grow">
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <h4 className="text-gray-600">{product.brand}</h4>
                                    <p className="font-semibold mt-1">Price: ${product.price}</p>
                                    <p className="text-red-600">Discount: {product.discountPercentage}%</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center mt-3 space-x-4">
                                        <button
                                            onClick={() => dispatch(decreaseQuantity(product.id))}
                                            className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 font-bold"
                                        >
                                            -
                                        </button>
                                        <span className="font-semibold">{product.count}</span>
                                        <button
                                            onClick={() => dispatch(increaseQuantity(product.id))}
                                            className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <div className="mt-3">
                                        <button
                                            onClick={() => dispatch(removeItem(product.id))}
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                        >
                                            Remove Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Total Price & Clear Cart */}
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-t pt-4">
                            <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="mt-2 md:mt-0 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;

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
        <div>
        <div>
                <hr />
            <h3>Total: ${totalPrice}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
            <div>
                {cartItems.length === 0 ? (
                    <div>
                        <h2>Your cart is empty.</h2>
                    </div>
                ) : (
                    <>
                        {cartItems.map((product) => (
                            <div key={product.id}>
                                {/* Images */}
                                {product.images?.length > 0 && (
                                    <div>
                                        {product.images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={img}
                                                alt={`Image ${i + 1}`}
                                                width="150"
                                                height="150"
                                            />
                                        ))}
                                    </div>
                                )}
                                <h2>{product.title}</h2>
                                <h4>{product.brand}</h4>
                                <p>Price: ${product.price}</p>
                                <p>Discount: {product.discountPercentage}%</p>

                                {/* Quantity Controls */}
                                <div>
                                    <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                                    <span>{product.count}</span>
                                    <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                                </div>

                                {/* Remove Button */}
                                <div>
                                    <button onClick={() => dispatch(removeItem(product.id))}>
                                        Remove Item
                                    </button>
                                </div>
                               
                            </div>
                        ))}
                        {/* Total Price & Clear Cart */}
                        <div>
                            <h3>Total: ${totalPrice}</h3>
                            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

}

export default Cart;

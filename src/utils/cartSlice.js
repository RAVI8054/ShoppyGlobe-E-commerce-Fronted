import { createSlice } from "@reduxjs/toolkit";

// Initial Redux state for the cart
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] // Each item will have: { id, title, price, count, ... }
    },
    reducers: {
        // Add item to cart or increase quantity if it already exists
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.count += 1; // Increase count if item already in cart
            } else {
                state.items.push({ ...item, count: 1 }); // Add new item with count = 1
            }
        },

        // Remove item entirely by ID
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },

        // Increase the quantity of an item by ID
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                item.count += 1;
            }
        },

        // Decrease the quantity of an item by ID
        // If count goes to 0, remove the item
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                } else {
                    // Remove item if count is 1 and user decreases again
                    state.items = state.items.filter(i => i.id !== id);
                }
            }
        },

        // Clear the entire cart
        clearCart: (state) => {
            state.items = [];
        }
    }
});

// Export actions to use in components
export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

// Export the reducer for the store
export default cartSlice.reducer;

export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
});

export const increaseCartItem = (id) => ({
    type: 'INCREASE_CART_ITEM',
    payload: id
})

export const decreaseCartItem = (id) => ({
    type: 'DECREASE_CART_ITEM',
    payload: id
})
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const currentPizzaIems = state.items[action.payload.id] ?
                [...state.items[action.payload.id].items, action.payload] : [action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaIems,
                    totalPrice: currentPizzaIems.reduce((sum, item) => item.price + sum, 0)
                }
            }

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const allPrices = Object.values(newItems).map((el) => el.items).flat().reduce((sum, item) => item.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice: allPrices

            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const newStateItems = {
                ...state.items,
            }
            delete newStateItems[action.payload]
            return {
                ...state,
                items: newStateItems,
                totalPrice: Object.values(newStateItems).map((el) => el.items).flat().reduce((sum, item) => item.price + sum, 0),
                totalCount: Object.values(newStateItems).map((el) => el.items).flat().length
            }
        case 'INCREASE_CART_ITEM':

        const increasingItem = {
            ...state.items,
            [action.payload]: {
                items: [...state.items[action.payload].items,state.items[action.payload].items[0]],
                totalPrice: [...state.items[action.payload].items,state.items[action.payload].items[0]].reduce((sum, item) => item.price + sum, 0)
            }}

            return {
                ...state,
                items: increasingItem, 
                totalPrice: Object.values(increasingItem).map((el) => el.items).flat().reduce((sum, item) => item.price + sum, 0),
                totalCount: Object.values(increasingItem).map((el) => el.items).flat().length
                }

        case 'DECREASE_CART_ITEM': 
        const currentItems = state.items[action.payload].items
        const  someDecrease = currentItems.length >1 ? state.items[action.payload].items.slice(1) : currentItems
        const  decreasingItem = {
            ...state.items,
            [action.payload]: {
                items: someDecrease,
                totalPrice: someDecrease.reduce((sum, item) => item.price + sum, 0)
            } 
        }
            return {
                ...state,
                items: decreasingItem, 
                totalPrice: Object.values(decreasingItem).map((el) => el.items).flat().reduce((sum, item) => item.price + sum, 0),
                totalCount: Object.values(decreasingItem).map((el) => el.items).flat().length
                }
               
        default: return state
    }
};

export default cart


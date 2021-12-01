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


            const allPizzas = Object.values(newItems).map((el) => el.items).flat().length
            const allPrices = Object.values(newItems).map((el) => el.items).flat().reduce((sum, item) => item.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas,
                totalPrice: allPrices

            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default: return state
    }
};

export default cart


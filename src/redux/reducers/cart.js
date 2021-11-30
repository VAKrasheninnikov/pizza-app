const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_CART':
            const obj = {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id] ?
                    [...state.items[action.payload.id], action.payload] : [action.payload],
            }

            const allPizzas = Object.values(obj).reduce((a,b)=>a.concat(b)).length
            const allPrices = Object.values(obj).reduce((a,b)=>a.concat(b)).reduce((sum,item)=>item.price+sum,0)
            
            return {
                ...state,
                items: obj,
                totalCount: allPizzas,
                totalPrice: allPrices
               
            };
        default: return state
    }
};

export default cart


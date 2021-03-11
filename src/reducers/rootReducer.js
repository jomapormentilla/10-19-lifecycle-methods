function reducer(state = { 
    items: [], 
    cart: [] 
}, action){
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, items: state.items.concat(action.item) }
            // return {...state, items: [...state.items, action.item]}
        case 'GET_ITEMS':
            return {...state, items: action.items}
        default:
            return state
    }
}

export default reducer
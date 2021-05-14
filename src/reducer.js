export const initialState={
    menu : [],
    user : null,
    cart: [],
    total: 0,
    orders: [],
    currentQ: [],
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'MENU':
            return {
                ...state,
                menu: action.menu
            }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'CART_TOTAL':
            return{
                ...state,
                cart:action.carts.cart,
                total: action.carts.total
            }
        case 'ADMIN_ORDERS':
            return {
                ...state,
                orders: action.orders
            }
        case 'CURRENTQ':
            return {
                ...state,
                currentQ: action.currentq
            }
        
        default:
            return state
    }
}
export default reducer
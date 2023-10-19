import {
    LOAD_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART
  } from './action';
  
  const initialState = {
    products: [],
    cart: [],
    total: 0,
    passengers: [],
    travelDate: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_PRODUCTS:
        return { ...state, products: action.payload };
      case ADD_TO_CART:
        const existingProductIndex = state.cart.findIndex(item => item.id === action.payload.id);
  
        if (existingProductIndex !== -1) {
          const updatedCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          return { ...state, cart: updatedCart };
        } else {
          const updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
          return { ...state, cart: updatedCart };
        }
        case UPDATE_CART_QUANTITY:
            const updatedCart = state.cart.map(item => {
              if (item.id === action.payload.productId) {
                const newQuantity = Math.max(action.payload.quantity, 0);
                return { ...item, quantity: newQuantity };
              }
              return item;
            });
            return { ...state, cart: updatedCart };
        case REMOVE_FROM_CART:
          const filteredCart = state.cart.filter(item => item.id !== action.payload);
          return { ...state, cart: filteredCart };

        case 'ADD_PASSENGER':
          return {
            ...state,
            passengers: [...state.passengers, action.payload],
          };
        case 'REMOVE_PASSENGER':
          return {
            ...state,
            passengers: state.passengers.filter(
              (passenger) => passenger.id !== action.payload
            ),
          };
        case 'SET_TRAVEL_DATE':
          return {
            ...state,
            travelDate: action.payload,
          };

      default:
        return state;
    }
  };
  
  export default rootReducer;
  
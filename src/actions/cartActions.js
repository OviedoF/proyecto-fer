import { ADD_TO_CART, CLEAR_CART } from "../types";

export const agregarACarrito = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const limpiarCarrito = (product) => ({
    type: CLEAR_CART,
    payload: product
})
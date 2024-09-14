import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: '',
    filteredData: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
        setSearchterm(state, action){
            state.searchTerm = action.payload;
            state.filteredData = state.products.filter(product => (
                product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            ))
        }
    },

})
export const {setProducts, setSearchterm} = productSlice.actions;
export default productSlice.reducer;
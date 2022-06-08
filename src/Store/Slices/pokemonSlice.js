import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
		name: 'user',
    initialState: "",
    reducers: {
        changeUser:(state,action)=>action.payload
    }
})
export const {changeUser}= pokemonSlice.actions;
export default pokemonSlice.reducer;
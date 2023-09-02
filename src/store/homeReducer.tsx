import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	home: 0
};

const homeReducer = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setHome: (state, action) => {
            state.home = action.payload;
		},
	},
});

export const { setHome } = homeReducer.actions;
export default homeReducer.reducer;
